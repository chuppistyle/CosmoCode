 //
 // // for .menu-left
 //    window.onscroll = function () {
 //        var sun = document.querySelector('#section_sun');
 //        var rocket = document.querySelector('.space-rocket')
 //        var section2 = sun.getBoundingClientRect().bottom - (sun.getBoundingClientRect().bottom*0.1);
 //        var menu = document.querySelector('.menu-left')
 //        if (section2<window.innerHeight){
 //            menu.style.display="block";
 //            rocket.style.display="block";
 //
 //            // menu.style.opacity= 1;
 //            // rocket.style.opacity= 1;
 //
 //        } else {
 //            menu.style.display="none";
 //            rocket.style.display="none";
 //            // menu.style.opacity= 0;
 //            // rocket.style.opacity= 0;
 //        }
 //    };
// end
//
//  for .menu-left
    window.onscroll = function () {
        var sun = document.querySelector('#section_sun');
        var rocket = document.querySelector('.space-rocket')
        var section2 = sun.getBoundingClientRect().bottom - (sun.getBoundingClientRect().bottom*0.1);
        var menu = document.querySelector('.menu-left')
        if (section2<window.innerHeight){
            menu.style.opacity = 1;
            menu.style.transition = "opacity 3s";
            menu.style.display="block";
            rocket.style.display="block";
        } else {
            menu.style.opacity = 0;
            menu.style.transition = "opacity 0.5s";
            rocket.style.display="none";
        }
    };
 // end


