var mainTitle = document.querySelector(".main-title");
var intro = document.querySelector(".intro");
var preshow = document.querySelector(".preshow");
var trailer = document.querySelector(".trailer");
var footer = document.querySelector("footer");

var setAccordingToScroll = function() {
  var winHeight = window.innerHeight;
  if (window.scrollY > mainTitle.offsetTop + .417*window.innerWidth) {
    $("header").css("padding-bottom", 0);
    $(intro).css("padding-bottom", winHeight+"px");
  } else {
    $("header").css("padding-bottom", winHeight+"px");
    $(intro).css("padding-bottom", 0);
  };
  
  if (window.scrollY > intro.offsetTop + winHeight ) {
    $(intro).css("padding-bottom", 0);
    $(preshow).css("padding-bottom", winHeight+"px");
  } else {
    $(intro).css("padding-bottom", winHeight+"px");
    $(preshow).css("padding-bottom", 0);
  }

  if (window.scrollY + winHeight >
      trailer.offsetTop + 1.25*trailer.clientHeight) { 
    $(preshow).css("padding-bottom", 0);
    $(footer).css("padding-bottom", "");
  } else {
    $(preshow).css("padding-bottom", winHeight+"px");
    $(footer).css("padding-bottom", "");
  }
};

window.onscroll = function() {
  setAccordingToScroll();
};

$(document).ready(function() {
  setAccordingToScroll();
});
