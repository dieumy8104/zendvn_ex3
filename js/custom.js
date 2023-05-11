// exercise4
const slideImages = document.getElementsByClassName('carousel-opacity')
const slides = document.querySelector('.slide')
const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const dots=document.querySelectorAll('.dot')
// 
let index = 1;
var counter=0
var width;
// 
function slideWidth(){
    width = slideImages[0].clientWidth;
}
slideWidth()
window.addEventListener('resize', slideWidth)
slides.style.transform = 'translateX('+(- width * index)+'px)';
// 
next.addEventListener('click', slideNext)
function slideNext(){
    if(index >= slideImages.length - 1){return};
     slides.style.transition='transform 0.4s ease-out';
        index++;
        slides.style.transform='translateX(' +(- width * index) + 'px)';
        dotsLabel()
    }
// 
prev.addEventListener('click', slidePrev)
function slidePrev(){
    if(index <= 0){return};
        slides.style.transition='transform 0.4s ease-out';
        index-- ;
        slides.style.transform='translateX(' +(- width * index) + 'px)';
        dotsLabel()
}
// 
slides.addEventListener('transitionend', function(){
    if(slideImages[index].id === 'first'){
    slides.style.transition = 'none'
    index=slideImages.length-index;
    slides.style.transform = 'translateX(' +(- width * index) + 'px)';
    dotsLabel()
    }
    if(slideImages[index].id === 'last'){
        slides.style.transition = 'none'
        index=slideImages.length - 2;
        slides.style.transform = 'translateX(' +(- width * index) + 'px)';
        dotsLabel()
    }
})
// 
function autoSliding(){
    deleteInterval = setInterval(timer, 2500)
    function timer(){
        slideNext()
    }
}
autoSliding();
// 
const container = document.querySelector('.slide-container')
container.addEventListener('mouseover', function(){
    clearInterval(deleteInterval)
})
container.addEventListener('mouseout',autoSliding)
function dotsLabel(){
    for(i = 0; i < dots.length; i++){
        dots[i].className=dots[i].className.replace(' active', '')
    }
    dots[index - 1].className += ' active'
}
// end exercise4