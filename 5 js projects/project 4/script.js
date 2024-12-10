var rect = document.querySelectorAll(".rect");

rect.forEach(function(val){
    val.addEventListener("mouseenter", function(){
        val.childNodes[1].style.opacity = 1;
    });

    val.addEventListener("mouseleave", function(){
        val.childNodes[1].style.opacity = 0;
    });

    val.addEventListener("mousemove", function(dets){
        var rectBounds = val.getBoundingClientRect();
        var xPos = dets.clientX - rectBounds.left;  // X relative to parent div
        var yPos = dets.clientY - rectBounds.top;   // Y relative to parent div

        val.childNodes[1].style.top = yPos + "px";
        val.childNodes[1].style.left = xPos + "px";
    });
});
