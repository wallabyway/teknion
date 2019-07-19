#montage -define jpeg:size=512x512 -geometry 128x128 -crop 128x128 textures/*.jpg sprite.jpg 
#-define jpeg:size=200x200

convert textures/*.jpg -crop '128x128+10+5' +append -resize 25% contactsheet.jpg
