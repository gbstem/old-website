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
    $('nav').removeClass('dropped');
    $('.curriculum').removeClass('open');
  } else {
    $('nav').addClass('dropped');
    if ($('.register').hasClass('open')) {
      $('.register').removeClass('open');
    }
    if ($('.about').hasClass('open')) {
      $('.about').removeClass('open');
    }
    $('.curriculum').addClass('open');

  }

}

function dropdown1() {
  if ($('.about').hasClass('open')) {
    $('nav').removeClass('dropped');
    $('.about').removeClass('open');
  }
  else {
    $('nav').addClass('dropped');
    if ($('.curriculum').hasClass('open')) {
      $('.curriculum').removeClass('open');
    }
    if ($('.register').hasClass('open')) {
      $('.register').removeClass('open');
    }
    $('.about').addClass('open');

  }

}

function dropdown2() {
  if ($('.register').hasClass('open')) {
    $('.register').removeClass('open');
    $('nav').removeClass('dropped');
  } else {
    $('nav').addClass('dropped');
    if ($('.curriculum').hasClass('open')) {
      $('.curriculum').removeClass('open');
    }
    if ($('.about').hasClass('open')) {
      $('.about').removeClass('open');
    }
    $('.register').addClass('open');

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

$(function () {
  $(window).scroll(function () {
    $('.fadeInBlock').each(function (i) {
      var bottom_of_object = $(this).position().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();

      /* Adjust the "200" to either have a delay or that the content starts fading a bit before you reach it  */
      bottom_of_window = bottom_of_window + 500;

      if (bottom_of_window > bottom_of_object) {
        $(this).animate({
          'opacity': '1'
        }, 500);
      }
    });
  });
});
