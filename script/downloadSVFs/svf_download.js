const fetch = require('node-fetch');
const zip = require('node-zip');
const zlib = require('zlib');
const { mkdirSync, createWriteStream } = require('fs');
const BaseUrl = 'https://developer.api.autodesk.com';


async function getManifest(urn, token) {
    const res = await fetch(BaseUrl + `/modelderivative/v2/designdata/${urn}/manifest`, {
        compress: true,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    return res.json();
}

function parseManifest(manifest) {
    const items = [];
    function parse(node) {
        const roles = [
            'Autodesk.CloudPlatform.DesignDescription',
            //'Autodesk.CloudPlatform.PropertyDatabase',
            'Autodesk.CloudPlatform.IndexableContent',
            //'leaflet-zip',
            //'thumbnail',
            'graphics',
            //'preview',
            //'raas',
            //'pdf',
            //'lod'
        ];
        if (roles.includes(node.role)) {
            const item = {
                guid: node.guid,
                mime: node.mime
            };
            items.push(Object.assign({}, item, getPathInfo(node.urn)));
        }
        if (node.children) {
            node.children.forEach(parse);
        }
    }

    parse({ children: manifest.derivatives });
    return items;
}

function getPathInfo(encodedURN) {
    const urn = decodeURIComponent(encodedURN);
    const rootFileName = urn.slice(urn.lastIndexOf('/') + 1);
    const basePath = urn.slice(0, urn.lastIndexOf('/') + 1);
    const localPath = basePath.slice(basePath.indexOf('/') + 1).replace(/^output\//, '');
    return {
        urn,
        rootFileName,
        localPath,
        basePath
    };
}

async function getDerivative(urn, token) {
    const res = await fetch(BaseUrl + `/derivativeservice/v2/derivatives/${encodeURIComponent(urn)}`, {
        compress: true,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    const buff = await res.buffer();
    return buff;
}

async function getDerivativesSVF(urn, token) {
    const data = await getDerivative(urn, token);
    const pack = new zip(data, { checkCRC32: true, base64: false });
    const manifestData = pack.files['manifest.json'].asNodeBuffer();
    const manifest = JSON.parse(manifestData.toString('utf8'));
    if (!manifest.assets) {
        return [];
    }

    return manifest.assets
        .map(asset => asset.URI)
        .filter(uri => uri.indexOf('embed:/') === -1);
}

async function getDerivativesF2D(item, token) {
    const manifestPath = item.basePath + 'manifest.json.gz';
    const data = await getDerivative(manifestPath, token);
    const manifestData = zlib.gunzipSync(data);
    const manifest = JSON.parse(manifestData.toString('utf8'));
    if (!manifest.assets) {
        return [];
    }

    return manifest.assets
        .map(asset => asset.URI)
        .filter(uri => uri.indexOf('embed:/') === -1)
        .concat(['manifest.json.gz']);
}




async function getURNs(urn, token) {
    try {
        const manifest = await getManifest(urn, token);
        const items = parseManifest(manifest);
        const derivatives = items.map(async (item) => {
            let files = [];
            switch (item.mime) {
                case 'application/autodesk-svf':
                    files = await getDerivativesSVF(item.urn, token);
                    break;
                case 'application/autodesk-f2d':
                    //files = await getDerivativesF2D(item, token);
                    break;
                case 'application/autodesk-db':
                    //files = ['objects_attrs.json.gz', 'objects_vals.json.gz', 'objects_offs.json.gz', 'objects_ids.json.gz', 'objects_avs.json.gz', item.rootFileName];
                    break;
                default:
                    files = [item.rootFileName];
                    break;
            }
            return Object.assign({}, item, { files });
        });
        const urls = await Promise.all(derivatives);
        console.log(JSON.stringify(urls));
        return urls;
    } catch (err) {
        console.log(err);
    }
}


async function downloadUrns(derivatives, access_token, destFolder) {

    const baseUrl = 'https://developer.api.autodesk.com/derivativeservice/v2';
    const options = { headers: { 'Authorization': 'Bearer ' + access_token } };
    const fetches = [];

    derivatives[0].files.unshift(`${derivatives[0].rootFileName}`);
    const baseFolder = destFolder + derivatives[0].urn.slice(25,derivatives[0].urn.lastIndexOf("/")+1);
    const rootFile = destFolder + derivatives[0].urn.slice(25);
    console.log('rootFile'+rootFile);

    for (const derivative of derivatives) {
        const derivUrl = baseUrl + '/derivatives/' + encodeURIComponent(derivative.urn);
        for (const file of derivative.files) {
            const fetchUrl = baseUrl + '/derivatives/' + encodeURIComponent(derivative.basePath + file);
            const tmpdir = (baseFolder + file).replace(/\\/g,"/");
            mkdirSync(tmpdir.slice(0,tmpdir.lastIndexOf('/')), {recursive:true} );
            fetches.push(fetch(fetchUrl, options).then(resp => { const dest = createWriteStream(tmpdir); resp.body.pipe(dest)}).then(() => tmpdir));
        }
    }
    // Fetch and cache all URLs in parallel
    const urls = await Promise.all(fetches);
    return rootFile;
}

module.exports = { getURNs, downloadUrns };
