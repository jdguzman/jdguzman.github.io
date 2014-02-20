$(document).ready(function () {
  var div_offsets = {};
  var back_to_top_offset = $('.header').height();
  console.log(back_to_top_offset);

  if ($('body').scrollTop() < back_to_top_offset)
    $('.scroll-top').hide();

  $('#portfolio-details .row').each(function (index) {
    key = $(this).attr('id');
    div_offsets[key] = $(this).offset().top - 60;
  });

  $('.portfolio-thumbs a').click(function (e) {
    e.preventDefault();
    offset = div_offsets[$(this).data('offset')];
    $('body').animate({ scrollTop: offset }, 'slow');
  });

  $(window).scroll(function (e) {
    var already_shown = ($('.scroll-top').css('display') == 'block');

    if ($('body').scrollTop() > back_to_top_offset && !already_shown) {
      $('.scroll-top').fadeIn('slow');
    } else if ($('body').scrollTop() < back_to_top_offset && already_shown) {
      $('.scroll-top').fadeOut('slow');
    }
  });

  $('.scroll-top a').click(function (e) {
    e.preventDefault();
    $('body').animate({ scrollTop: 0 }, 'slow');
  });
});
