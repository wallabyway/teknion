const svf = require('./offlinesvf');
const forge = require('./forge-utils');
const program = require('commander');

const version = "0.1";

async function listUrns(bucket, key, secret) {
    let token = await forge.getToken(key, secret);
    console.log(`accessToken: ${token}`);
    let urnsInbucket = await forge.getURNList(bucket, token);
    console.log(`urnsInbucket: ${JSON.stringify(urnsInbucket)}`);
}

async function downloadSVF(urn, token, outputFolder) {
    if (!token) {
        console.log(`error: no token - try using 'listurns' command to choose which 'URN' to download, oh, and an 'access-token'`);
        return;
    }
    let derivatives = await svf.getURNs(urn, token);
    let outfolder = await svf.downloadUrns(derivatives, token, outputFolder);
}


program
    .command('download <urn>')
    .description(`download svf files to local folder, for viewing offline (on your own hosted service). Use viewsvfoffline.html to test`)
    .option('-a, --access-token [token]', 'Forge access token (can also be provided via FORGE_ACCESS_TOKEN env. var.)', '')
    .option('-o, --output-folder [folder]', 'output folder', 'svfs')
    .action(function(urn, options) {
        console.log('download')
        downloadSVF(urn, options.accessToken, options.outputFolder + "/")
            .then(_ => console.log('Done!'))
            .catch(err => console.error(err));
    })


program
  .version(version, '-v, --version')
  .command('listurns <bucket>')
  .description(`list all of the urns inside a 'forge bucket'(folder)`)
  .option('-k, --forge-key [key]', 'Forge key (can also be provided via FORGE_CLIENT_ID env. var.)', '')
  .option('-s, --forge-secret [secret]', 'Forge secret (can also be provided via FORGE_CLIENT_SECRET env. var.)', '')
  .action(function(bucket, options) {
    listUrns( bucket,
        options.forgeKey || process.env.FORGE_CLIENT_ID,
        options.forgeSecret || process.env.FORGE_CLIENT_SECRET,
    )
    .then(_ => console.log('Done!'))
    .catch(err => console.error(err));
  });


program.parse(process.argv);

