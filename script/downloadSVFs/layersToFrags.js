// Given a DWG file with Layers, find the DBIds for each layer.
// Use Forge API to query the properties database
/* For example:
Give Chair.DWG, the layers and their DBIds are:

Use the CLI command:  node 
[
  'A-FURN-3-CHAR-SUPL': [ 101 ],
  'A-FURN-3-CHAR-MCPT': [ 105, 107, 108, 109, 110 ],
  'A-FURN-3-CHAR-STFB': [ 111 ],
  'A-FURN-3-CHAR-STPL': [ 113, 115, 116, 117 ],
  'A-FURN-3-CHAR-FMPL': [ 118, 122, 123 ],
  'A-FURN-3-CHAR-BKFB': [ 120 ],
  'A-FURN-3-CHAR-CTPL': [ 124, 126, 127, 128, 129 ],
  'A-FURN-3-CHAR-TPPL': [ 130, 134 ],
  'A-FURN-3-CHAR-ARAL': [ 132, 135 ],
  'A-FURN-3-CHAR-BKPL': [ 136 ],
  'A-FURN-3-CHAR-BKPT': [ 138 ],
  'A-FURN-3-CHAR-BS': [ 140 ]
]
*/
const fetch = require('node-fetch');
const BaseUrl = 'https://developer.api.autodesk.com';


async function queryLayers(urn, guid, token) {
    const res = await fetch(BaseUrl + `/modelderivative/v2/designdata/${urn}/metadata/${guid}/properties`, {
        compress: true,
        headers: { 'Authorization': 'Bearer ' + token }
    });
    let json = await res.json();

	let layers=[];
	json.data.collection
		.filter(i=>{return i.properties})
		.map(i=> {
			const name=i.properties.General.Layer;
			if (!layers[name]) layers[name] = [];
			layers[name].push(i.objectid);
		})

    return layers;
}


module.exports = { queryLayers };

/*

// https://forge.autodesk.com/en/docs/model-derivative/v2/reference/http/urn-metadata-guid-GET/
//  :urn/metadata/:guid 
// urn=dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL05TQllDTkFfM2QuZHdn
// guid=029fc4ac-3b3c-63ce-4d9d-bc28da8d9ad6

async function test() {
	let token = `eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJjbGllbnRfaWQiOiJHYjNobDY5S21YOGpQQkJnQXJtU1RRNmdDR3Bna3VCaiIsImV4cCI6MTU2NTIxNzc5MSwic2NvcGUiOlsiZGF0YTpyZWFkIiwiZGF0YTp3cml0ZSIsImRhdGE6Y3JlYXRlIiwiYnVja2V0OnJlYWQiLCJidWNrZXQ6ZGVsZXRlIiwiYnVja2V0OnVwZGF0ZSIsImJ1Y2tldDpjcmVhdGUiXSwiYXVkIjoiaHR0cHM6Ly9hdXRvZGVzay5jb20vYXVkL2p3dGV4cDYwIiwianRpIjoiR29EVEJLV0hlemdxNm05S2pXQWROWDV1SXhaNzZKS3E2Wmd0Y05ZaGJnS2hwc01WY3pPVzFqQXdHTmozZUNSeiJ9.FwdLRoZVtTrzge5Fb6FZg7e4P16vDCEmxbOwd5Zxrxo`;
	let json = await queryLayers("dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL05TQllDTkFfM2QuZHdn", "029fc4ac-3b3c-63ce-4d9d-bc28da8d9ad6", token)
	console.log(json);
}
test();


*/