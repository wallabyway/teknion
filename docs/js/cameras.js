var backdrop;

// define a mixin object
var cameras = {
    data: function() {
        return {
            // camera state
            viewstate: -1,
            mousemoved: false,
            SWITCHVIEW_TIMER: 7000, //change camera every 5 seconds

            // list of camera views
            cameraViewList: [
    	    	{"viewport":{"name":"","eye":[-5.185499125982855,-1344.296184563233,247.82237805275298],"target":[-6.929953635020367,-1237.6984449248273,226.8837488967146],"up":[-0.0031533856122478387,0.1926927740061782,0.9812540705673451],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":1366.0875848975982,"aspectRatio":1.5098039215686274,"projection":"perspective","isOrthographic":false,"fieldOfView":20.347370537500183},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
    	    	{"viewport":{"name":"","eye":[582.6443875294308,-305.2902457734097,122.85186102490094],"target":[486.14322477154354,-258.40833572586735,105.70078219131732],"up":[-0.14198888185624794,0.06898061947333178,0.987461812712921],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":668.8314441903423,"aspectRatio":1.5098039215686274,"projection":"perspective","isOrthographic":false,"fieldOfView":20.347370537500183},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
                {"seedURN":"svf/f3d/Design.svf","objectSet":[{"id":[],"isolated":[],"hidden":[],"explodeScale":0,"idType":"lmv"}],"viewport":{"name":"","eye":[190.9205328139361,153.00617202145918,48.13004520499088],"target":[158.18448273535805,125.52043413490077,37.90420663772092],"up":[-0.1781863446682292,-0.1496082500105769,0.9725569382316637],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":249.64991791425777,"aspectRatio":1.2664714494875549,"projection":"perspective","isOrthographic":false,"fieldOfView":47.84601621943778},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
                {"seedURN":"svf/f3d/Design.svf","objectSet":[{"id":[],"isolated":[],"hidden":[],"explodeScale":0,"idType":"lmv"}],"viewport":{"name":"","eye":[457.9188534267676,391.6234060164552,-51.09362155656822],"target":[375.4198345103292,323.2298781666073,-69.00408315204135],"up":[-0.12690793753025814,-0.10520951247473483,0.9863190831960238],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":586.4088117937931,"aspectRatio":1.5098039215686274,"projection":"perspective","isOrthographic":false,"fieldOfView":20.347370537500183},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
                {"seedURN":"svf/f3d/Design.svf","objectSet":[{"id":[],"isolated":[],"hidden":[],"explodeScale":0,"idType":"lmv"}],"viewport":{"name":"","eye":[402.0638596600009,-427.17659914216813,47.69476163725554],"target":[371.45321871277673,-396.2256160194612,41.63606203604876],"up":[-0.09693536704662585,0.09801313584470393,0.9904529064107104],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":587.4195174946572,"aspectRatio":1.2664714494875549,"projection":"perspective","isOrthographic":false,"fieldOfView":47.84601621943778},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
    	    	{scale:[1,1,1],pos:[150,-20,-20],rot:[1.3153735474450121, -1.2576368547894217, -0.2259727283011639],background:'img/background1.jpg',"viewport":{"name":"","eye":[-1011.583441510458,-670.5127560100976,171.33941760660755],"target":[-919.5553109046672,-615.3655794682886,154.18833877302396],"up":[0.13540739811416655,0.08114188172370662,0.9874618127129209],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":1223.4819537298142,"aspectRatio":1.3733862959285006,"projection":"perspective","isOrthographic":false,"fieldOfView":20.347370537500183},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}}},
    	    	{scale:[0.75,1.5,1],pos:[250,-180,-380],rot:[-0.5107336686425479, -0.5230479149173086, -2.3784918234333325,],background:'img/background2.jpg',"viewport":{"name":"","eye":[-252.9947797738865,226.72188985790834,415.6400988233818],"target":[-231.60234759796612,210.68904685317997,380.7546530457501],"up":[0.6351528560085087,-0.4760237611435428,0.608261644632464],"worldUpVector":[0,0,1],"pivotPoint":[-0.5222819074988365,-0.44045305252075195,0.44046783447265625],"distanceToOrbit":535.3127591212203,"aspectRatio":1.3733862959285006,"projection":"perspective","isOrthographic":false,"fieldOfView":47.84601621943778},"renderOptions":{"environment":"(Custom: Model defined)","ambientOcclusion":{"enabled":true,"radius":80,"intensity":0.8},"toneMap":{"method":1,"exposure":-9,"lightMultiplier":-1e-20},"appearance":{"ghostHidden":true,"ambientShadow":true,"antiAliasing":true,"progressiveDisplay":false,"swapBlackAndWhite":false,"displayLines":true,"displayPoints":true}},"cutplanes":[]},
            ],
        }
    },


    created: function() {
        // toggle through camera views, every 7 seconds
        setInterval(e => {
            if (this.mousemoved) {
                this.mousemoved = false;
                return;
            }
            this.setView((this.viewstate + 1) % this.cameraViewList.length);
        }, this.SWITCHVIEW_TIMER);
    },

    methods: {
        setView(i) {
            if (this.viewstate == i) return;
            this.viewstate = i;
            camera = this.cameraViewList[i];
            viewer.restoreState(camera);
            if (backdrop && camera.scale) {
                setTimeout(() => {
                    this.setBackdrop(camera)
                }, 600)
            }
        },

        addBackdrop: function() {
            const txt = THREE.ImageUtils.loadTexture("img/background1.jpg");
            const mat = new THREE.MeshBasicMaterial({
                map: txt
            })
            const geom = new THREE.PlaneGeometry(800, 600)
            backdrop = new THREE.Mesh(geom, mat);
            backdrop.visible = false;
            viewer.impl.scene.add(backdrop);
        },

        setBackdrop: function(camera) {
            const txt = THREE.ImageUtils.loadTexture(camera.background);
            with(backdrop) {
                visible = true;
                material.map = txt;
                material.map.minFilter = THREE.NearestFilter;
                scale.set(camera.scale[0], camera.scale[1], 1);
                position.set(camera.pos[0], camera.pos[1], camera.pos[2]);
                rotation.set(camera.rot[0], camera.rot[1], camera.rot[2]);
            }
        },



    }
}