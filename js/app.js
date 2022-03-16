
//click function 
var colorGroup = [];

$(document).ready(function(){


    
    $.get("img/014.svg", function(data) {
           

            var $svg = $(data).find('svg'); 
            let count =0;  
            
            // console.log($svg.find(/.st.+{fill:#[0-9A-Z]+;}/gm));           

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            


            $(".svgDropLocation").html($svg);
           

       
                   
            
            
        }, 'xml');       
    
});


setTimeout((e) => {
    $("#acceptSvgs").click(function(e){
        $(".svgDropLocation path, .svgDropLocation circle, .svgDropLocation rect, .svgDropLocation polygon").each(function(){
           let fillValue = $(this).css("fill");
           $(this).removeAttr("class")
           $(this).attr({"fill": "#fff", "data-color-group": fillValue, "data-fillable": true, stroke: "#000"})
        });  
        $(".svgDropLocation svg").find("style").remove();
        $(".svgDropLocation svg").prepend(`<defs>
        <pattern id="img1" patternUnits="userSpaceOnUse" width="16" height="16">
        <image xlink:href="img/tp-bg.jpg" x="0" y="0" width="16" height="16"></image>
        </pattern>
    </defs>
    `)                
    });
    
}, 3000);