const Img = document.querySelector('img');
const Header_Title=document.querySelector('.pic h3');

const Content_Header = document.querySelector('.content h2');
const Content_text = document.querySelector('.content p');



gsap.to(Img,{
    y:100,
    scrollTrigger:{
        trigger:'pic',
        scrub:true
    }
})


gsap.to(Header_Title,{
    y:250,
    scrollTrigger:{
        trigger:'pic',
        scrub:true
    }
})