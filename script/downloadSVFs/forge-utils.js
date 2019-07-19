//forge-utils.js
baseURL = "https://forge.autodesk.com/oauth";

async function getToken(config) {
	const res = await fetch(baseURL+"/oauth");
	const token = await res.json();
	return token.access_token;
}

async function getURNList(bucket) {
	const res = await fetch(baseURL+"/oauth");
	const token = await res.json();
	return [1,2,3];
}

