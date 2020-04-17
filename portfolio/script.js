$(function(){

$('.nav_btn').click(function(){
    var id=$(this).attr('href');
   var dis=$(id).offset().top;
    $('html,body').animate({
        scrollTop:dis
    },500);
});

$(window).on('load scroll', function (){

    var box = $('.inner');
    var animated = 'fadeIn';
    
    box.each(function(){
    
      var boxOffset = $(this).offset().top;
      var scrollPos = $(window).scrollTop();
      var wh = $(window).height();
  
      //画面内のどの位置で処理を実行するかで「100」の値を変更
      if(scrollPos > boxOffset - wh + 500 ){
        $(this).addClass(animated);
      }
    });
  
  });

  $("btn_nav").on("click",function(){

    var rightval=0;
    if($(this).hasClass("open")){
      rightval=-300;
      $(this).removeClass("open");
    }else{
      $(this).addClass("open");
    }

    $("grobal_nav").stop().animate({
      right:rightval
    },200);
  });



});