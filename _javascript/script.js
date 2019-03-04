var bleep = new Audio();
                    bleep.src = "_sons/hover.ogg";
                    ;

                    var tleep = new Audio();
                    tleep.src = "_sons/hover1.ogg";
                    ;                   

                    function mudaFoto (foto){
                        document.getElementById("icon").src =foto;
                    }

                    $(".diamond-grid").diamonds({
                        size : 220, // Size of diamonds in pixels. Both width and height. 
                        gap : 5, // Pixels between each square.
                        hideIncompleteRow : false, // Hide last row if there are not enough items to fill it completely.
                        autoRedraw : true, // Auto redraw diamonds when it detects resizing.
                        itemSelector : ".item" // the css selector to use to select diamonds-items.
                });	 

             