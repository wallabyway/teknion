# resize original Teknion texture folder to something more reasonable in size for the web
rm -fr textures
mkdir textures
mogrify -resize 512 -quality 70 -path ./textures *.jpg
