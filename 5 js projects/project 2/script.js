var img = document.querySelector("#box img");
var heart = document.querySelector("#heart");
var heart1 = document.querySelector("#heart1");

var flag = 0;
heart.addEventListener("click",function(){
    if(flag == 0){
        heart.style.transform = "scale(1.2)";
        setTimeout(function(){
        heart.style.transform = "scale(1)";
    
        },400)
        heart.style.color = "red"
        flag = 1
    }else{
        heart.style.color = "white"
        flag = 0
    }
   

})
img.addEventListener("dblclick",function(){

        heart1.style.opacity = 1;
        heart1.style.transform = "translate(-50%, -50%) scale(1.2)";
        setTimeout(function(){
            heart1.style.color = "red";
            heart1.style.transform = "translate(-50%, -50%) scale(1)";
            heart.style.color = "red";
            flag= 1
        },500)
        setTimeout(function(){
            heart1.style.transition = "none"
            heart1.style.opacity = "0"
            heart1.style.color = "white";
            heart1.style.transition = "transform ease .5s"

        },2000)
        
})

