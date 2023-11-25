$(window).on('load',function(){
  $("#splash").delay(1500).fadeOut('slow');
  $("#splash_logo").delay(1200).fadeOut('slow');
});

$(window).scroll(function() {
  var scroll = $(window).scrollTop();//スクロール値を定義
//scroll-imgの背景
$('.scroll-img').css({
transform: 'scale('+(100 + scroll/10)/100+')',//スクロール値を代入してscale1から拡大.scroll/10の値を小さくすると拡大値が大きくなる
top: -(scroll/50)  + "%",//スクロール値を代入してtopの位置をマイナスにずらす
  });
});

// humburger
$('.hamburger').on('click', function() {
  if ($('#top').hasClass('open')) {
    $('#top').removeClass('open');
  } else {
    $('#top').addClass('open');
  }
});

$('#mask').on('click', function() {
  $('#top').removeClass('open');
});

$('#navi a').on('click', function() {
  $('#top').removeClass('open');
});

$(function() {
  $(window).scroll(function () {
    $('.js-fade').each(function() {
      var pos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100) {
        $(this).addClass('scroll');
      }
    });
  });
});



// scrool
$.scrollify({
  section : ".box",//1ページスクロールさせたいエリアクラス名
  scrollbars:"false",//スクロールバー表示・非表示設定
  interstitialSection : ".header,#collection,#footer",//ヘッダーフッターを認識し、1ページスクロールさせず表示されるように設定
  easing: "swing", // 他にもlinearやeaseOutExpoといったjQueryのeasing指定可能
  scrollSpeed: 300, // スクロール時の速度
});  

var text = new ShuffleText(document.querySelector('.text'));
text.start();