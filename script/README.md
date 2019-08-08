# Convert Scripts


The 'script' folder, contains a cli tool and scripts for automating the preparation of your DWG files.

#### Contents...

* `/downloadSVFs` - scripts to help download SVFs
* `contactsheet.sh` - script to create *contactsheet.jpg*
* `resize.sh` - optimizes Teknion's fabric jpgs for the web





## downloadSVFs folder

The `/downloadSVFs` folder contains a nodejs based `cli tool`, to help automate a few processes... 

The cli-tool is written in node.js and pulls together a collection of seperate task js files.
The thinking is, if you can process one DWG file, then it's easier to process a cloud-folder of DWG files.


#### the CLI tool
The cli tool helps with the following tasks:
 
- get an `access-token` from Forge APIs
- list the files(URNs) in your Forge "bucket"
- download SVFs locally for self-hosting
- get the Layers-mapping json file. We need this for changing materials in the configurator


### 1. Getting started

Get a Forge Key/Secret, create a bucket called `configurator`, upload all your chair.DWG's. 

The sample app, [oss-manager.herokuapp.com](https://oss-manager.herokuapp.com/?client_id=xxx&client_secret=xxx#), can help do this.  Click on the file to preview the chair in the Forge-Viewer, this will translate the DWG into an SVF file.


### 2. Pull the DWG layers information

Let's start with a single Chair.DWG file...  

<img width="630" alt="layers-to-textures" src="https://user-images.githubusercontent.com/440241/62667423-6da1b000-b93c-11e9-93b5-1e8e52476750.png">


```
layers : DBId
[
  'A-FURN-3-CHAR-FMPL': [ 118, 122, 123 ],
  'A-FURN-3-CHAR-BKFB': [ 120 ],
  'A-FURN-3-CHAR-STFB': [ 111 ],
  'A-FURN-3-CHAR-BS': [ 140 ]
]
```

We want a cli tool, to pull this mapping json data, for the chair.dwg file.  We then want to repeat this for many DWG files.


To get started, Use the `listurns` command: 

this will get us the chair.dwg's `URN` and `guid` and an `access-token`...

> `node cli.js listurns -k < forge-key>  -s < forge-secret> < bucket-name>`

Result:

```
accessToken: eyJhbGciOiJIUzI1NiIsImtpZCI6Imp3dF9zeW1tZXRyaWNfa2V5In0.eyJjbGllbnRfaWQiOiJHYjNobDY5S21YOGpQQkJnQXJtU1RRNmdDR3Bna3VCaiIsImV4cCI6MTU2NTIyNzc3OSwic2NvcGUiOlsiZGF0YTpyZWFkIiwiZGF0YTp3cml0ZSIsImRhdGE6Y3JlYXRlIiwiYnVja2V0OnJlYWQiLCJidWNrZXQ6Y3JlYXRlIl0sImF1ZCI6Imh0dHBzOi8vYXV0b2Rlc2suY29tL2F1ZC9qd3RleHA2MCIsImp0aSI6IjFtTDJJbWFzQm43ZjlvbUFZdFN0alczRjIwcVprYmdvdjA3MHgyemlhR0d2aXJyZ2NlUTVHVm9qSHJSVk81dzQifQ.NI7I-ImXZ7fv_PxJOvtBTVnPAxrRu3i0Nqcy2P9oHkI
fetching bucket 'configurator'
urnsInbucket: [
{"name":"P15-top.f3d", "urn":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL1AxNS10b3AuZjNk"},
{"name":"NSBYCNA_3d.dwg","urn":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL05TQllDTkFfM2QuZHdn"},
{"name":"P15-top-all v1.f3d","urn":"dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL1AxNS10b3AtYWxsJTIwdjEuZjNk"}]
Done!
```

Now, get the mapping json (layer:DBids), using the `layers <urn> <guid>` command...

``` node cli.js layers dXJuOmFkc2sub2JqZWN0czpvcy5vYmplY3Q6Y29uZmlndXJhdG9yL05TQllDTkFfM2QuZHdn 029fc4ac-3b3c-63ce-4d9d-bc28da8d9ad6 -a eyJhbGci......u3i0Nqcy2P9oHkI ```


```
Result:  layers : DBId
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
```

We will use this mapping json in webpage configurator to change the materials based on the DBId.



### 3. Downloading a single SVF
Once you have an access token and a URN, run this command, in the `/scripts` folder...

```
nodejs cli.js download -a <access_token> <urn>
```

this will download the svf from A360/Forge-bucket to the default 'svfs' output folder.
There's already an example svfs downloaded.

You can test it by opening the 'scripts/testOffline.html' with localhost:8000
run a local server, ie. 

`python -m SimpleHTTPServer`


### 4. Create a contact-sheet
the script `contactsheet.sh` creates a single `contactsheet.jpg` used for thumbnails in the configurator.  It runs through all the jpgs in the `texture` folder to create the jpg file.

### 5. Resize the textures for the web
the script `resize.sh` resizes the Teknion jpg's used for fabric to a distributable size for the web.  It changes them to a 'power of 2' size for better webGL rendering.

