// var scroll = new LocomotiveScroll({
//     el: document.querySelector('[data-scroll-container]'),
//     smooth: true,
//     lerp:0.1
// });


var slideIndex = 1;
currentSlide()

function currentSlide(index){
    if(typeof index === "undefined"){
        for(let i = 1; i < 4; i++){
                   document.querySelector(".img"+i).style.display = "none"
        }
        document.querySelector(".img"+slideIndex).style.display = "block"
    }
    else{
        for(let i = 1; i < 4; i++){
                   document.querySelector(".img"+i).style.display = "none"
        }
        document.querySelector(".img"+index).style.display = "block"
    }


}