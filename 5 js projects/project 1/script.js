var check = document.querySelector(".check");
var istat = document.querySelector("#card p");
var btn = document.querySelector("button");

var flag = 0;

btn.addEventListener("click",()=>{
if (flag == 0){
        check.innerHTML = "🙂";
        istat.innerHTML = "Friends"
        istat.style.color = "#fff"
        istat.style.backgroundColor = "green"
        btn.innerHTML = "Remove Friend"
        btn.style.backgroundColor = "rgb(247, 73, 73)"
        btn.style.color = "#fff"
        flag = 1
   
}else{
  
        check.innerHTML = "🙁";
        check.backgroundColor = "rgb(114, 225, 114)"
        istat.innerHTML = "Not Friend"
        istat.style.color = "#000"
        istat.style.backgroundColor = "transparent"
        btn.innerHTML = "Add Friend"
        btn.style.backgroundColor = "rgb(232, 231, 231)"
        btn.style.color = "#000"
        flag = 0

    }
    
})
