var configs = {
    data: function() {
        return {

            // color state
            fabric: 0,
            frame: 0,
            cost: 640,
            cartcount: 0,


            frameList: [
                {rgb:"#454545",cost:"640", title:"Gris"},
                {rgb:"#5E483D",cost:"550", title:"Ebony"}
            ],

            fabricList: [
                {rgb:"#F0C68F", texture:"fabric_wire_light_brown.png"},
                {rgb:"#707073", texture:"fabric_wire_grey_alpha.png"},
                {rgb:"#4040D0", texture:"fabric_wire_denim.jpg"},
                {rgb:"#E0E61F", texture:"fabric_wire_yellow.png"},
                {rgb:"#D0D0A3", texture:"fabric_wire_cream.png"},
            ],

            fabricList_Prism: [
                {rgb:"#c0a000", texture:"model:1|mat:3"},
                {rgb:"#c0a000", texture:"wood_pine"},
                {rgb:"#6B2112", texture:"cork2"},
                {rgb:"#c0a000", texture:"fabric_wire_blue"},
                {rgb:"#c0a000", texture:"fabric_wire_green"}
            ],

            // selection-sets for wood, grill, glass & frame
            fabric_Layers: ["A-FURN-3-CHAR-BKFB", "A-FURN-3-CHAR-STFB"],
            frame_Layers: ["A-FURN-3-CHAR-FMPL", "A-FURN-3-CHAR-BS"],


        }
    }
};