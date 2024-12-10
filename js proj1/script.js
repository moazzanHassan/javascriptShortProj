var rect = document.querySelector("#rectangle");

rect.addEventListener("mousemove", function(det){
    var rectangleLocation = rect.getBoundingClientRect();
    
    var innerloc = det.clientX - rectangleLocation.left;

    if(innerloc<rectangleLocation.width/2){
        var blCol = gsap.utils.mapRange(0,rectangleLocation.width/2,255,0,innerloc);

        gsap.to(rect,{
            backgroundColor:`rgb(0,0,${blCol})`,
            ease:Power4
        })
    }else{
        var greencol = gsap.utils.mapRange(rectangleLocation.width/2,rectangleLocation.width,0,255,innerloc);

        gsap.to(rect,{
            backgroundColor:`rgb(0,${greencol},0)`,
            ease:Power4
        })
    }
})

rect.addEventListener("mouseleave",function(){
    gsap.to(rect,{
        backgroundColor:"salmon"
    })
})