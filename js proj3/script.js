// var center = document.querySelector("#center")


//     const throttleFunction = (func, delay) => {
//         let prev = 0;
//         return (...args) => {
//             let now = new Date().getTime();
//             console.log(now - prev, delay);
//             if (now - prev > delay) {
//                 prev = now;
//                 return func(...args);
//             }
//         }
//     }
//         center.addEventListener("mousemove",
//             throttleFunction((dets) => {
//               var div = document.createElement("div")
//               div.style.left = dets.clientX + "px"
//               div.style.top = dets.clientY + "px"

//               var img = document.createElement("img")
//               img.setAttribute("src", "https://images.unsplash.com/photo-1728216593412-24cffa8f757b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
//               div.appendChild(img);

//               div.classList.add("imagediv");
                

//               document.body.appendChild(div);
//             var tl = gsap.timeline()
//               tl.to(img,{
//                 y:"0",
//                 ease:Power1,
//                 duration:.8
//               })
//               tl.to(img,{
//                 y:"100%",
//                 ease:Power1,
//                 duration:.8
//               })

//               setTimeout(function(){
//                 div.remove()
//               },2000)

//             }, 400));


// second method random 

// var center = document.querySelector("#center");

// const imagesArray = [
//     "https://images.unsplash.com/photo-1604744591536-6e3c7f99f919?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1602596758966-4e40df56ae25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1623601691948-49dcfdadcdad?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1603610882058-6b50795f187a?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1647524233183-0bd0e70706ea?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1673283385294-532948b96501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbWJvcmdpbml8ZW58MHx8MHx8fDA%3D",
//     "https://images.unsplash.com/photo-1674110958136-40fd83adc9e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     "https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
// ];

// const throttleFunction = (func, delay) => {
//     let prev = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if (now - prev > delay) {
//             prev = now;
//             return func(...args);
//         }
//     }
// }

// center.addEventListener("mousemove", throttleFunction((dets) => {
//     // Create div
//     var div = document.createElement("div");
//     div.style.left = dets.clientX + "px";
//     div.style.top = dets.clientY + "px";

//     // Create img element
//     var img = document.createElement("img");

//     // Pick a random image from the array
//     var randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
//     img.setAttribute("src", randomImage);

//     div.appendChild(img);
//     div.classList.add("imagediv");

//     document.body.appendChild(div);

//     // GSAP animations
//     var tl = gsap.timeline();
//     tl.to(img, {
//         y: "0",
//         ease: Power1,
//         duration: 0.8
//     });
//     tl.to(img,{
//         y:"100%",
//         ease:Power1,
//         duration:.8
//         })

//         setTimeout(function(){
//         div.remove()
//         },2000)

//     }, 400));


// third method
// var center = document.querySelector("#center");

// const throttleFunction = (func, delay) => {
//     let prev = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if (now - prev > delay) {
//             prev = now;
//             return func(...args);
//         }
//     }
// }

// center.addEventListener("mousemove", throttleFunction((dets) => {
//     // Create div
//     var div = document.createElement("div");
//     div.style.left = dets.clientX + "px";
//     div.style.top = dets.clientY + "px";

//     // Create img element
//     var img = document.createElement("img");

//     // Set the random image URL
//     img.setAttribute("src", "https://picsum.photos/200/300");

//     div.appendChild(img);
//     div.classList.add("imagediv");

//     document.body.appendChild(div);

//     // GSAP animations
//     var tl = gsap.timeline();
//     tl.to(img, {
//         y: "0",
//         ease: Power1,
//         duration: 0.8
//     });
//     tl.to(img, {
//         y: "100%",
//         ease: Power1,
//         duration: 0.8
//     });

//     // Remove the image after 2 seconds
//     setTimeout(function() {
//         div.remove();
//     }, 2000);

// }, 400));

// forth method

// var center = document.querySelector("#center");

// const imagesArray = [
//    "https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"
// ];

// const throttleFunction = (func, delay) => {
//     let prev = 0;
//     return (...args) => {
//         let now = new Date().getTime();
//         if (now - prev > delay) {
//             prev = now;
//             return func(...args);
//         }
//     }
// }

// center.addEventListener("mousemove", throttleFunction((dets) => {
//     // Create div
//     var div = document.createElement("div");
//     div.style.left = dets.clientX + "px";
//     div.style.top = dets.clientY + "px";

//     // Create img element
//     var img = document.createElement("img");

//     // Pick a random image from the array
//     var randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
//     img.setAttribute("src", randomImage);

//     div.appendChild(img);
//     div.classList.add("imagediv");

//     document.body.appendChild(div);

//     // GSAP animations
//     var tl = gsap.timeline();
//     tl.to(img, {
//         y: "0",
//         ease: Power1,
//         duration: 0.8
//     });
//     tl.to(img,{
//         y:"100%",
//         ease:Power1,
//         duration:.8
//         })

//         setTimeout(function(){
//         div.remove()
//         },2000)

//     }, 200));

var center = document.querySelector("#center");

const imagesArray = [
    "https://images.unsplash.com/photo-1604744591536-6e3c7f99f919?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1602596758966-4e40df56ae25?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1623601691948-49dcfdadcdad?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1603610882058-6b50795f187a?q=80&w=1916&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1647524233183-0bd0e70706ea?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1673283385294-532948b96501?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGxhbWJvcmdpbml8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1674110958136-40fd83adc9e3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1674110997072-41f11b7d4ae7?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1517942491415-4fc176d3c2f7?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

center.addEventListener("mousemove", throttleFunction((dets) => {
    // Create div
    var div = document.createElement("div");
    div.style.left = dets.clientX + "px";
    div.style.top = dets.clientY + "px";

    // Create img element
    var img = document.createElement("img");

    // Pick a random image from the array
    var randomImage = imagesArray[Math.floor(Math.random() * imagesArray.length)];
    img.setAttribute("src", randomImage);
    div.appendChild(img);

    div.classList.add("imagediv");

    document.body.appendChild(div);

    // Calculate rotation based on mouse position
    var windowCenterX = window.innerWidth / 2;
    var rotation = (dets.clientX - windowCenterX) / windowCenterX * 15; // Max 15-degree rotation

    var tl = gsap.timeline();
    tl.to(div, {
      rotation: rotation, // Rotate the div based on mouse position
      ease: Power1,
      duration: 0.8,
    });
    tl.to(div, {
      rotation: 0, // Reset rotation when the div leaves
      ease: Power1,
      duration: 0.8,
    });


    var tl = gsap.timeline();
    tl.to(img, {
      y: "0",
      rotation: rotation, // Rotate the image based on mouse position
      ease: Power1,
      duration: 0.8,
    });
    tl.to(img, {
      y: "100%",
      rotation: 0, // Reset rotation when the image leaves
      ease: Power1,
      duration: 0.8,
    });

    setTimeout(function () {
      div.remove();
    }, 2000);
  }, 400)
);
