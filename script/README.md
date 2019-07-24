# Teknion Configurator (POC) - Preparation Scripts

**DEMO: https://wallabyway.github.io/teknion/**


## Introduction

Under this 'script' folder, everything you need to prepare all the DWG files, into the self hosted configurator page, should go here.

#### Contents...

1. `/downloadSVFs` - scripts to help download SVFs
2. `contactsheet.sh` - script to create `contactsheet.jpg` 
3. `resize.sh` - optimizes Teknion's fabric jpgs for the web


  
## downloadSVFs folder
`/downloadSVFs`
scripts to help download SVFs locally nodejs code to download svfs from your Forge bucket or A360 bucket, to the local machine for self-hosting

## contactsheet.sh
script to create converts all the jpgs in the `texture` folder to a contactsheet.jpg to display a list of fabric thumbnails in the browser quickly

## resize.sh
the `resize.sh` script, resizes all the original Teknion fabric jpgs to a 'power of 2' texture size for optimal downloading and rendering
  