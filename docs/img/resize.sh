rm -fr test
mkdir test
mogrify -resize 512 -quality 70 -path ./test *.jpg
