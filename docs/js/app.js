var viewer;

window.app = new Vue({
    el: "#app",
    mixins: [configs, cameras, materials],


    methods: {

        onResize: function() {
            viewer.impl.resize(window.innerWidth - 310, window.innerHeight - 100);
        },

        addToCart() {
            this.cartcount++;
        },
        onGeometryLoaded: function() {
            viewer.impl.skipAOWhenMoving = true;
            viewer.setGroundShadow(false);
        },

        onViewerLoaded: function() {
            with(viewer) {
                loadExtension("Autodesk.LayerManager");
                canvas.addEventListener('mousedown', (e => this.mousemoved = true));
                canvas.addEventListener('mousewheel', (e => this.mousemoved = true));
                container.style.cssText = "";
                setBackgroundColor(255, 255, 255, 255, 255, 255);
                autocam.shotParams.destinationPercent = 3;
                autocam.shotParams.duration = 3;
            }
            addEventListener(Autodesk.Viewing.GEOMETRY_LOADED_EVENT, this.onGeometryLoaded);
            this.setView(0);
            this.addBackdrop();
            this.onResize();
            window.addEventListener("resize", this.onResize);
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