// define a mixin object
var materials = {
    created: function() {
        //init
    },

    methods: {
        setFabric: function(textureName) {
            //this.setMaterial(materialName, [9,15]);//[120,111]
            const mat = viewer.impl.matman()._materials["model:1|mat:3"];
            this.setDiffuseTexture(mat, textureName);
        },

        setFrame: function(color, cost) {
            const mat = viewer.impl.matman()._materials["model:1|mat:0"];
            mat.metal_f0.set(color);
            viewer.impl.invalidate(true, true);
            this.cost = cost;
        },

        setDiffuseTexture: function(mat, textureName) {
            mat.opaque_albedo_map = THREE.ImageUtils.loadTexture(`../../textures/${textureName}`, null, i => {
                viewer.impl.invalidate(true, true);
            });
            Object.assign(mat.opaque_albedo_map, {
                    matrix: {
                        elements: [0.05, 0, 0, -0, 0.05, 0, 0, 0, 1]
                    },
                    anisotropy: 16,
                    wrapS: 1000,
                    wrapT: 1000,
                    clampS: false,
                    clampT: false
                })
                // for a see-through effect on the material, set it to slightly transparent...
                //mat.transparent=true;
                //mat.opacity = 0.9;
        },

        Prism027: function(textureName, dbIds) {},

        setPrism149: function(textureName, dbIds) {
            const matmgr = viewer.impl.matman();

            function create3Material() {
                if (matmgr._materials[textureName])
                    return; //material already exists
                var cm, bm, rm, mn;
                var textureFolder = "../../textures/";
                if (textureName.indexOf("fabric_wire") != -1) {
                    cm = `${textureFolder}${textureName}.png`;
                    bm = `${textureFolder}fabric_wire_bump.png`;
                    rm = `${textureFolder}fabric_wire_spec.png`;
                } else {
                    cm = `${textureFolder}${textureName}_color.jpg`;
                    bm = `${textureFolder}${textureName}_bump.jpg`;
                    rm = `${textureFolder}${textureName}_rough.jpg`;
                }
                var szPrism = {"0":{"tag":"Prism-149","definition":"PrismOpaque","transparent":false,"keywords":["Wood","Finished"],"categories":["Wood/Finished"],"properties":{"strings":{"AssetLibID":{"values":["BA5EE55E-9982-449B-9D66-9F036540E140"]},"BaseSchema":{"values":["PrismOpaqueSchema"]},"UIName":{"values":["WindowInterior_Wood_JeldWenAlder_Standard"]},"category":{"values":["Wood/Finished"]},"description":{"values":["Wood - pine finished semigloss"]},"keyword":{"values":["Wood","Finished"]},"opaque_albedo_urn":{"values":["adsk.raas:asset.name:Texture-wood_pine_color"]},"opaque_f0_urn":{"values":[]},"opaque_luminance_modifier_urn":{"values":[]},"opaque_mfp_modifier_urn":{"values":[]},"surface_albedo_urn":{"values":[]},"surface_anisotropy_urn":{"values":[]},"surface_cutout_urn":{"values":[]},"surface_normal_urn":{"values":["adsk.raas:asset.name:Texture-wood_pine_bump"]},"surface_rotation_urn":{"values":[]},"surface_roughness_urn":{"values":["adsk.raas:asset.name:Texture-wood_pine_varnished_rough"]},"swatch":{"values":["Swatch-Torus"]}},"uris":{"thumbnail":{"values":["c:/worker/deploy/Material Library/proteinrun/mgr40_gvtg5v1/deserializexsacfz/4a24e120.png"]}},"booleans":{"Hidden":{"values":[false]},"opaque_emission":{"values":[false]},"opaque_translucency":{"values":[false]}},"integers":{"interior_model":{"values":[0]},"revision":{"values":[1]},"version":{"values":[1]}},"scalars":{"opaque_f0":{"units":"","values":[0.06027]},"opaque_luminance":{"units":"","values":[0]},"opaque_mfp":{"units":"in","values":[0.5]},"surface_anisotropy":{"units":"","values":[0]},"surface_rotation":{"units":"","values":[0]},"surface_roughness":{"connections":["1"],"units":"","values":[0.2]}},"colors":{"opaque_albedo":{"connections":["2"],"values":[{"r":1,"g":1,"b":1,"a":1}]},"opaque_luminance_modifier":{"values":[{"r":1,"g":1,"b":1,"a":1}]},"opaque_mfp_modifier":{"values":[{"r":1,"g":1,"b":1,"a":1}]},"surface_albedo":{"values":[{"r":1,"g":1,"b":1,"a":1}]}},"textures":{"surface_cutout":{},"surface_normal":{"connections":["3"]}},"choicelists":{"surface_ndf_type":{"values":[1]}},"uuids":{"ExchangeGUID":{"values":[""]},"VersionGUID":{"values":["F68E0B00-437E-4E2E-966D-C304F5E4FDBE"]}},"references":{}}},"1":{"tag":"Texture-wood_pine_varnished_rough","definition":"UnifiedBitmap","keywords":[""],"categories":["Roughness Map"],"properties":{"strings":{"AssetLibID":{"values":["BA5EE55E-9982-449B-9D66-9F036540E140"]},"BaseSchema":{"values":["UnifiedBitmapSchema"]},"UIName":{"values":["wood pine varnished rough"]},"category":{"values":["Roughness Map"]},"description":{"values":[]},"keyword":{"values":[]},"swatch":{"values":[]},"unifiedbitmap_Bitmap_urn":{"values":[]}},"uris":{"thumbnail":{"values":[]},"unifiedbitmap_Bitmap":{"values":[rm]}},"booleans":{"Hidden":{"values":[false]},"common_Tint_toggle":{"values":[false]},"texture_LinkTextureTransforms":{"values":[false]},"texture_OffsetLock":{"values":[false]},"texture_ScaleLock":{"values":[true]},"texture_URepeat":{"values":[true]},"texture_VRepeat":{"values":[true]},"unifiedbitmap_Invert":{"values":[false]}},"integers":{"revision":{"values":[1]},"texture_MapChannel":{"values":[1]},"texture_MapChannel_ID_Advanced":{"values":[1]},"texture_MapChannel_UVWSource_Advanced":{"values":[0]},"unifiedbitmap_Filtering":{"values":[0]},"version":{"values":[1]}},"scalars":{"texture_RealWorldOffsetX":{"units":"in","values":[0]},"texture_RealWorldOffsetY":{"units":"in","values":[0]},"texture_RealWorldScaleX":{"units":"in","values":[0.0984252]},"texture_RealWorldScaleY":{"units":"in","values":[0.0984]},"texture_UOffset":{"units":"","values":[0]},"texture_UScale":{"units":"","values":[1]},"texture_UVScale":{"units":"","values":[1]},"texture_VOffset":{"units":"","values":[0]},"texture_VScale":{"units":"","values":[1]},"texture_WAngle":{"units":"","values":[0]},"unifiedbitmap_BlueAmount":{"units":"","values":[1]},"unifiedbitmap_Blur":{"units":"","values":[0.01]},"unifiedbitmap_Blur_Offset":{"units":"","values":[0]},"unifiedbitmap_GreenAmount":{"units":"","values":[1]},"unifiedbitmap_RGBAmount":{"units":"","values":[1]},"unifiedbitmap_RedAmount":{"units":"","values":[1]}},"colors":{"common_Tint_color":{"values":[{"r":0.315,"g":0.315,"b":0.315,"a":1}]}},"textures":{},"choicelists":{"common_Shared_Asset":{"values":[0]}},"uuids":{"ExchangeGUID":{"values":[""]},"VersionGUID":{"values":["9D88CAED-B25D-4BFE-8477-A829A7755C2B"]}},"references":{}}},"2":{"tag":"Texture-wood_pine_color","definition":"UnifiedBitmap","keywords":[""],"categories":["Color Map"],"properties":{"strings":{"AssetLibID":{"values":["BA5EE55E-9982-449B-9D66-9F036540E140"]},"BaseSchema":{"values":["UnifiedBitmapSchema"]},"UIName":{"values":["wood pine color"]},"category":{"values":["Color Map"]},"description":{"values":[]},"keyword":{"values":[]},"swatch":{"values":[]},"unifiedbitmap_Bitmap_urn":{"values":[]}},"uris":{"thumbnail":{"values":[]},"unifiedbitmap_Bitmap":{"values":[cm]}},"booleans":{"Hidden":{"values":[false]},"common_Tint_toggle":{"values":[false]},"texture_LinkTextureTransforms":{"values":[true]},"texture_OffsetLock":{"values":[false]},"texture_ScaleLock":{"values":[true]},"texture_URepeat":{"values":[true]},"texture_VRepeat":{"values":[true]},"unifiedbitmap_Invert":{"values":[false]}},"integers":{"revision":{"values":[1]},"texture_MapChannel":{"values":[1]},"texture_MapChannel_ID_Advanced":{"values":[1]},"texture_MapChannel_UVWSource_Advanced":{"values":[0]},"unifiedbitmap_Filtering":{"values":[0]},"version":{"values":[1]}},"scalars":{"texture_RealWorldOffsetX":{"units":"in","values":[0]},"texture_RealWorldOffsetY":{"units":"in","values":[0]},"texture_RealWorldScaleX":{"units":"in","values":[9.84252]},"texture_RealWorldScaleY":{"units":"in","values":[9.84]},"texture_UOffset":{"units":"","values":[0]},"texture_UScale":{"units":"","values":[1]},"texture_UVScale":{"units":"","values":[1]},"texture_VOffset":{"units":"","values":[0]},"texture_VScale":{"units":"","values":[1]},"texture_WAngle":{"units":"","values":[0]},"unifiedbitmap_BlueAmount":{"units":"","values":[1]},"unifiedbitmap_Blur":{"units":"","values":[0.01]},"unifiedbitmap_Blur_Offset":{"units":"","values":[0]},"unifiedbitmap_GreenAmount":{"units":"","values":[1]},"unifiedbitmap_RGBAmount":{"units":"","values":[1]},"unifiedbitmap_RedAmount":{"units":"","values":[1]}},"colors":{"common_Tint_color":{"values":[{"r":0.315,"g":0.315,"b":0.315,"a":1}]}},"textures":{},"choicelists":{"common_Shared_Asset":{"values":[0]}},"uuids":{"ExchangeGUID":{"values":[""]},"VersionGUID":{"values":["6A0D28A3-7025-4AB5-8183-474FBFF56FF9"]}},"references":{}}},"3":{"tag":"Texture-wood_pine_bump","definition":"BumpMap","keywords":[""],"categories":["Bump Map"],"properties":{"strings":{"AssetLibID":{"values":["BA5EE55E-9982-449B-9D66-9F036540E140"]},"BaseSchema":{"values":["BumpMapSchema"]},"UIName":{"values":["wood pine bump"]},"bumpmap_Bitmap_urn":{"values":[]},"category":{"values":["Bump Map"]},"description":{"values":[]},"keyword":{"values":[]},"swatch":{"values":[]}},"uris":{"bumpmap_Bitmap":{"values":[bm]},"thumbnail":{"values":[]}},"booleans":{"Hidden":{"values":[false]},"common_Tint_toggle":{"values":[false]},"texture_LinkTextureTransforms":{"values":[false]},"texture_OffsetLock":{"values":[false]},"texture_ScaleLock":{"values":[true]},"texture_URepeat":{"values":[true]},"texture_VRepeat":{"values":[true]}},"integers":{"revision":{"values":[1]},"texture_MapChannel":{"values":[1]},"texture_MapChannel_ID_Advanced":{"values":[1]},"texture_MapChannel_UVWSource_Advanced":{"values":[0]},"version":{"values":[1]}},"scalars":{"bumpmap_Depth":{"units":"in","values":[0.003]},"bumpmap_NormalScale":{"units":"","values":[1]},"texture_RealWorldOffsetX":{"units":"in","values":[0]},"texture_RealWorldOffsetY":{"units":"in","values":[0]},"texture_RealWorldScaleX":{"units":"in","values":[9.84252]},"texture_RealWorldScaleY":{"units":"in","values":[9.84]},"texture_UOffset":{"units":"","values":[0]},"texture_UScale":{"units":"","values":[1]},"texture_UVScale":{"units":"","values":[1]},"texture_VOffset":{"units":"","values":[0]},"texture_VScale":{"units":"","values":[1]},"texture_WAngle":{"units":"","values":[0]}},"colors":{"common_Tint_color":{"values":[{"r":0.315,"g":0.315,"b":0.315,"a":1}]}},"textures":{},"choicelists":{"bumpmap_Type":{"values":[0]},"common_Shared_Asset":{"values":[0]}},"uuids":{"ExchangeGUID":{"values":[""]},"VersionGUID":{"values":["B82BD398-A796-4A4F-8FA4-A66722B9EB7C"]}},"references":{}}}};
                matmgr.convertOneMaterial(viewer.model, {
                    userassets: ["0"],
                    materials: szPrism
                }, textureName);
                LMV.TextureLoader.loadMaterialTextures(viewer.model, matmgr._materials[textureName], viewer.impl)
            }

            function dbsToFrags() {
                const frags = [];
                const it = viewer.model.getData().instanceTree;
                dbIds.map(dbId =>
                    it.enumNodeFragments(dbId, fragId => frags.push(fragId), true)
                );
                return frags;
            }

            function set3MaterialToFrags(fragIds) {
                // this should be initialized all at once at the beginning
                const fl = viewer.model.getFragmentList();
                var material = matmgr._materials[materialName];
                fragIds.map(fragId =>
                    fl.setMaterial(fragId, material)
                );
            }
            create3Material();
            set3MaterialToFrags(dbsToFrags(dbIds));
            viewer.impl.invalidate(true, true)
        },
    }
}