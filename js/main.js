
$(window).bind('load', function() {

    $('.js-dotted').dotdotdot();
    jQuery("div#slider1").codaSlider()
});


$(function(){


  var tPosition = 0;
  console.log(tPosition);

  var tItemCount = document.getElementById('testimonials-ul').querySelectorAll('li').length;

  var tWidth = tItemCount * 100 + "vw";
  $("#testimonials-ul").css("width", tWidth);

  $(".slidebutt").click(function() {
    var z = $(this).attr("data-fullText") - tPosition;
    var x = "-" + (100 * (z + tPosition)) + "vw";
    $("#testimonials-ul").animate({
      "left": x
    }, 500);
  });


  $(".slidebutt").click(function() {
    $(".slidebutt").css({
      "color": "gray"
    });
    $(this).css({
      "color": "black"
    });
  })
});

$(function(){

	$('#SandBox').mixItUp();

});


$(document).ready(function(){

  $(".filter").click(function(e) {
    e.preventDefault();
    $(".filter").removeClass('active');
    $(this).addClass('active');
  })

  $('.h-slider').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

  var $status = $('.slider_tag span');
  var $slickElement = $('.slide-gallery');
  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + ' из ' + slick.slideCount);
  });

  $slickElement.slick({
		autoplay: true,
		autoplaySpeed: 5000,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		adaptiveHeight: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		cssEase: 'linear'
	});

  $('.slider-gallery-item__thumbs a').click(function(e){
   e.preventDefault();
   var $item = $(this).closest('li'),
       image_path = $item.data('big-image');
   $('.slider-gallery-item__big-image img').attr('src', image_path);
   $item.addClass('is-active').siblings().removeClass('is-active');
 });


 //popup

 $('.js-popap-call').on('click', function(e) {
   e.preventDefault();
   $('.shim').addClass('js-popap-show');
   $('body').addClass('lock');
   $('.popap-input--name').focus();
 });

 $('.popap_close').on('click', function(e) {
   e.preventDefault();
   $('.shim').removeClass('js-popap-show');
   $('body').removeClass('lock');
 });

 $('.shim').on('click', function(e) {
   e.preventDefault();
   $('.shim').removeClass('js-popap-show');
   $('body').removeClass('lock');
 });

});
