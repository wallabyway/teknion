//forge-utils.js
const fetch = require('node-fetch');
const FormData = require('form-data');
var btoa = require('btoa');

baseURL = "https://developer.api.autodesk.com";

async function getToken(key, secret) {

	const options = {
	    method: 'POST',
		body: `grant_type=client_credentials&client_id=${key}&client_secret=${secret}&scope=data:read data:write data:create bucket:read bucket:create`,
		headers: { "Content-Type": "application/x-www-form-urlencoded" }
	}
	const res = await fetch(`${baseURL}/authentication/v1/authenticate`, options);
	const token = await res.json();
	return token.access_token;
}

async function getURNList(bucket, token) {
	console.log(`fetching bucket ${bucket}`);
	const res = await fetch(`${baseURL}/oss/v2/buckets/${bucket}/objects`, { 
		headers: { 'Authorization': `Bearer ${token}` }
	});
	const ress = await res.json();
	const files = ress.items.map(i=> {return {name:i.objectKey, urn: btoa(i.objectId) }});
	return files;
}

module.exports = { getToken, getURNList };