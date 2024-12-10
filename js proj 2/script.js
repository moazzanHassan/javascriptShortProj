var rect = document.querySelector("#rect");
window.addEventListener("mousemove",function(details){
    var cardloc = rect.getBoundingClientRect();

    var valx = gsap.utils.mapRange(0,window.innerWidth ,200 +  cardloc.width / 2, window.innerWidth - (200 + cardloc.width/2) , details.clientX);

    gsap.to(rect,{
        left:valx,
        ease:Power3
    })
})