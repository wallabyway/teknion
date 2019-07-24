# Teknion Configurator (POC) - Preparation Scripts

**DEMO: https://wallabyway.github.io/teknion/**


## Introduction

Under this 'script' folder, everything you need to prepare all the DWG files, into the self hosted configurator page, should go here.

#### Contents...

* `/downloadSVFs` - scripts to help download SVFs
* `contactsheet.sh` - script to create *contactsheet.jpg*
* `resize.sh` - optimizes Teknion's fabric jpgs for the web


  
## downloadSVFs folder

The `/downloadSVFs` folder contains helpful scripts to pull your SVFs from Forge Storage (either A360 project or a Forge Bucket) to your local machine (for self-hosting).

#### the CLI tool
To help things along, use the cli tool to help list URNs in a Forge-bucket, get a 2-legged access-token from Forge, or download SVFs to a local folder.

* This script expects that you have already uploaded and converted your DWG files to SVF already (either using A360, BIM360 or using a tool like https://oss-manager.herokuapp.com/?client_id=abc&client_secret=na



##### 1. getting an access token and URN
Start by getting an access token and URN of one of your DWGs.
in the `/scripts` folder, run this command:

```
node cli.js listurns -k <forge_key> -s <forge_secret> <bucket name>
```
... this will return an access-token and a list of URNs for each DWG file.


##### 2. downloading a single SVF
Once you have an access token and a URN, run this command, in the `/scripts` folder...

```
nodejs cli.js download -a <access_token> <urn>
```

this will download the svf from A360/Forge-bucket to the default 'svfs' output folder.
There's already an example svfs downloaded.

You can test it by opening the 'scripts/index.html' with localhost:8000 (run a local server, ie. python -m SimpleHTTPServer) 


## contactsheet.sh
script to create converts all the jpgs in the `texture` folder to a contactsheet.jpg to display a list of fabric thumbnails in the browser quickly

## resize.sh
the `resize.sh` script, resizes all the original Teknion fabric jpgs to a 'power of 2' texture size for optimal downloading and rendering
  