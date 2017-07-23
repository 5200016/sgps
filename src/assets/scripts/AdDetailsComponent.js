/**
 * Created by 刘婷 on 2017/7/19.
 */
//点击返回顶部
$(function () {
  //点击返回顶部
  $(window).scroll(function() {
    if($(window).scrollTop() > 600) {
      $('.l-go-back').stop().fadeIn(100) //stop停止所有动画
    } else {
      $('.l-go-back').stop().fadeOut(100)
    }
  });
  $('.l-go-back').unbind('click').click(function() {
    $('body,html').animate({ //动画效果
      scrollTop: 0
    }, 200);
  });

});
