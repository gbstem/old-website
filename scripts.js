function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) {
                        elmnt.innerHTML = this.responseText;
                    }
                    if (this.status == 404) {
                        elmnt.innerHTML = "Page not found.";
                    }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

includeHTML();

function toggleMenu() {
    if ($('nav').hasClass('responsive')) {
        $('#hamburger-menu').removeClass('open');
        $('nav').removeClass('responsive');
    } else {
        $('#hamburger-menu').addClass('open');
        $('nav').addClass('responsive');
        $('nav').removeClass('dropped');
    }
}

function dropdown() {
    if ($('.curriculum').hasClass('open')) {
        $('.curriculum').removeClass('open');
    } else {
        $('.curriculum').addClass('open');
    }
    if ($('nav').hasClass('responsive') == false) {
        if ($('nav').hasClass('dropped') && $('.posts').hasClass('open') == false) {
            $('nav').removeClass('dropped');
        } else {
            $('nav').addClass('dropped');
        }
    }
}

function dropdown1() {
    if ($('.about').hasClass('open')) {
        $('.about').removeClass('open');
    } else {
        $('.about').addClass('open');
    }
    if ($('nav').hasClass('responsive') == false) {
        if ($('nav').hasClass('dropped') && $('.posts').hasClass('open') == false) {
            $('nav').removeClass('dropped');
        } else {
            $('nav').addClass('dropped');
        }
    }
}

function dropdown2() {
    if ($('.register').hasClass('open')) {
        $('.register').removeClass('open');
    } else {
        $('.register').addClass('open');
    }
    if ($('nav').hasClass('responsive') == false) {
        if ($('nav').hasClass('dropped') && $('.posts').hasClass('open') == false) {
            $('nav').removeClass('dropped');
        } else {
            $('nav').addClass('dropped');
        }
    }
}

jQuery(document).ready(function ($) {

     $(window).on("scroll", function () {
         var scrollPos = $(window).scrollTop();
         if (scrollPos <= 0) {
             $('.nav').addClass('top');
         } else {
             $('.nav').removeClass('top');
         }
     });

 });

$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});
