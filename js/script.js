
;(function planetMenu() {
    window.onscroll = function () {
        var sun = document.querySelector('#section_sun');
        var rocket = document.querySelector('.space-rocket')
        var section2 = sun.getBoundingClientRect().bottom - (sun.getBoundingClientRect().bottom * 0.1);
        var menu = document.querySelector('.menu-left');
        var menu_bar = document.querySelector('#menu-bar');
        if (section2 < window.innerHeight) {
            if (menu_bar.classList.contains('menu-left') || menu_bar.classList.contains('menu-left-hide')) {
                menu_bar.classList.add('menu-left-vision');
                menu_bar.classList.remove('menu-left');
                menu_bar.classList.remove('menu-left-hide');
            }
            rocket.style.display = "block";
        } else {
            menu_bar.classList.remove('menu-left-vision');
            menu_bar.classList.add('menu-left-hide');
            rocket.style.display = "none";
        }
    };

}());

;(function animationScroll() {
    $(document).ready(function() {
        $('.go-to').on('click',function(){
            var a_id =$(this).attr("href");
            $('html, body').animate({
                scrollTop:$($(a_id)).position().top
            }, 2000);
        });
    });
}());
// animationScroll();



