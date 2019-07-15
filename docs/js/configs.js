var configs = {
    data: function() {
        return {

            // color state
            fabric: 0,
            frame: 0,
            cost: 640,
            cartcount: 0,


            frameList: [
                {rgb:"#B5B5B5",cost:"640", title:"Gris"},
                {rgb:"#BE988D",cost:"550", title:"Ebony"}
            ],

            fabricList: [
                {rgb:"#F0C61F", texture:"A143_Plated.jpg"},
                {rgb:"#F0C65F", texture:"A157_Holograph.jpg"},
                {rgb:"#10168F", texture:"A165_Pascal.jpg"},
                {rgb:"#CFE6CF", texture:"C239_Stone.jpg"},
                {rgb:"#10C68F", texture:"D318_Loden Tweed.jpg"},
                {rgb:"#F0468F", texture:"D322_Rose Tweed.jpg"},
                {rgb:"#F0465F", texture:"D323_Raspite Tweed.jpg"},
                {rgb:"#F0C6F1", texture:"D326_Thistle Tweed.jpg"},
                {rgb:"#A0A6AF", texture:"E100_Eventide.jpg"},
                {rgb:"#10C68F", texture:"E101_Diamond Dust.jpg"},
                {rgb:"#D0161F", texture:"E107_Sunspot.jpg"},
                {rgb:"#D0161F", texture:"P182_Powersurge.jpg"},
                {rgb:"#A0060F", texture:"P184_Semiconductor.jpg"},
                {rgb:"#A0A68F", texture:"P498_Crystal.jpg"},
                {rgb:"#40468F", texture:"P501_Lazuli.jpg"},
                {rgb:"#F0C68F", texture:"P502_Cinnabar.jpg"},
                {rgb:"#F0D66F", texture:"S160_Riverwalk.jpg"},
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