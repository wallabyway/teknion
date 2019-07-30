var viewer;

window.app = new Vue({
    el: "#app",
    mixins: [configs, cameras, materials],


    methods: {
        getTitle: function(t) {
            return t.slice(5,t.indexOf('.jpg'));
        },

        onResize: function() {
            viewer.impl.resize(window.innerWidth - 310, window.innerHeight - 83);
        },

        addToCart() {
            this.cartcount++;
        },

        onViewerLoaded: function() {
            with(viewer) {
                loadExtension("Autodesk.LayerManager"); // only works for DWG files, not F3D
                container.style.cssText = ""; // hides the toolbar
                setBackgroundColor(255, 255, 255, 255, 255, 255); // change the background to white
                disableHighlight(true);
                autocam.shotParams.destinationPercent = 3;  // slow down camera transitions
                autocam.shotParams.duration = 3;
                addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, () => {
                    setGroundShadow(false);
                    impl.skipAOWhenMoving = true;
                });
                // when camera moves, stop the transitions.
                canvas.addEventListener('mousedown', (e => this.mousemoved = true));
                canvas.addEventListener('mousewheel', (e => this.mousemoved = true));
            }
            window.addEventListener("resize", this.onResize);
            this.onResize();
            this.setView(0);
            this.addBackdrop();
        },

        init: function() {
            let self = this;

            // Debugging
            if (window.location.hash == "#debug") {
                viewer = new Autodesk.Viewing.Private.GuiViewer3D(document.getElementById('forgeViewer'), {});
            } else
                viewer = new Autodesk.Viewing.Viewer3D(document.getElementById('forgeViewer'), {});

            var options = {
                    env: "Local",
                    //placementTransform: (new THREE.Matrix4()).multiplyScalar(10)
                }
            //var urn = "svf/20550034-NSBYCNA_3ddwg/dwg.svf";
            var urn = "svf/f3d/Design.svf";
            Autodesk.Viewing.Initializer(options, function() {
                viewer.start(urn, options, self.onViewerLoaded);
            });
        },
    }
})