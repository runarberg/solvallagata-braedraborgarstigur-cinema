$(window).scroll(function() {
  var t_pos = $(window).scrollTop(),
      b_pos = t_pos + $(window).height(),
      $el = $(".info"),
      el_top = $el.offset().top;
  var l_pos = (t_pos - el_top) + ($el.width()/2);
  $(".info").css( {left: l_pos});
});
