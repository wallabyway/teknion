# Teknion Configurator
POC for Teknion


### Setup:

1. Run a local static server

```
cd docs
python -m SimpleHTTPServer 8080
```

2. open browser `http://localhost:8080`

### Screenshots:

---
**BLUE FABRIC SELECTED**
![teknionjpg](https://user-images.githubusercontent.com/440241/61027626-833aae80-a36b-11e9-9420-5684828e630a.jpg)

---

**BACKDROP FEATURE:**
![teknionjpg2](https://user-images.githubusercontent.com/440241/61027699-ac5b3f00-a36b-11e9-8955-f923f124024b.jpg)


### Notes:
1. textures are in folder `/textures`
2. svf's are hosted 'offline' under folder `/svf`
3. `/configs.js` is a mock example of an XML file
4. experimented with 'two backdrops' 
5. using fast material change, of only the diffuse channel
6. use the setMaterial() function to apply any prism material and individual fragIDs (implementation tested but is commented out).
7. Layers information is accessible via layers extension or via the layers API
8. frame material changing still in progress...

Raw DWG file is accessible from the svf folder and the URN is commented out.  Need to check the UV's are in there.  If not, then we will need DA4CAD to add them back programmatically.


## Teknion experiments:
### Textures:
A sample of the Teknion textures were supplied. The prism fabric normal and specular maps don't not exactly match, but they look ok from a distance.
> fabric_wire_norm.png
![fabric_wire_norm.png](https://wallabyway.github.io/teknion/img/textures/fabric_wire_norm.png)

In order to use existing data, I tried creating a fake bump map from the supplied textures.  I used some off-the-shelf software called '[http://crazybump.com](http://crazybump.com)' to create a normal map from 'D326_Thistle Tweed.jpg'...

![D326_Thistle Tweed.jpg](https://wallabyway.github.io/teknion/img/textures/D326_Thistle%20Tweed.jpg)
![D326-NRM.png](https://wallabyway.github.io/teknion/img/textures/D326-NRM.png)

However, the results weren't so great.  I also need to create a specular map.
Given how laborious this is for previewing, I will instead perfect the look of the chair with this material using Fusion360 where I can better control the scale and bump and specular effect in real-time.


