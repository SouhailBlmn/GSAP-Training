var navBar=document.querySelector('nav');
var headerTitle=document.querySelector('h1');
var icon=document.querySelector('i');
var button=document.querySelector('button');
var line = document.querySelector('.line');

start_animation = function (){
    const TL = gsap.timeline();

    TL
    .from(headerTitle,{autoAlpha:0,x:-300,delay:0.5})
    .from(icon,{autoAlpha:0,y:200,x:-500},'-=0.3')
    .to(line,{autoAlpha:1,height:100})
    .from(navBar,{autoAlpha:0,y:-100,stagger:1})
    .from(button,{autoAlpha:0,y:300,delay:1})
}

window.addEventListener('load',start_animation);

