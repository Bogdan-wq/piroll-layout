$(document).ready(function(){
   $('.slider').slick({
         autoplay:true,
         autoplaySpeed:4000,
         speed:1000,
         swipe:false,
         arrows:false,
         infinite: true
   });


   $('#logo-and-menu').load('../snippets(footer-menu-work)/menu/menu.html');


   $('#work').load('../snippets(footer-menu-work)/work/work.html');

   $('#footer').load('../snippets(footer-menu-work)/footer/footer.html');
});

const anchors = document.querySelectorAll('a[href*="#"]');

for(let anchor of anchors) {
   anchor.addEventListener('click',(event) => {
      event.preventDefault();
      const blockID = anchor.getAttribute('href')
      document.querySelector('' + blockID).scrollIntoView({
         behavior:"smooth",
         block:"start"
      })
   })
}
