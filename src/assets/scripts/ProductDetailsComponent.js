/**
 * Created by 刘婷 on 2017/7/19.
 */
<!--商品详情界面-->
<!--鼠标移动商品图片局部放大-->
var smallBox = document.getElementById('l-smallBox');
var mask = document.getElementById('l-mask');
var bigBox = document.getElementById('l-bigBox');
var box = document.getElementById('l-box')
var bigPic = document.getElementById('l-bigPic')
//鼠标经过小盒子，显示大盒子
smallBox.onmouseover = function() {
  bigBox.style.display = "block";
  mask.style.display = "block";

}
smallBox.onmouseout = function() {
  bigBox.style.display = "none";
  mask.style.display = "none";
}
smallBox.onmousemove = function(event) {
  //遮罩跟随鼠标
  var event = event || widow.event;
  var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
  var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
  //计算mask的位置
  // var boxX = ;
  // var boxY =  ;
  var targetX = pageX - box.offsetLeft - mask.offsetWidth / 2;
  var targetY = pageY - box.offsetLeft - mask.offsetHeight / 2;
  //限制mask移动范围
  if (targetX < 0) {
    targetX = 0;
  }
  // if(targetX > 175){
  // 	targetX = 175;
  // }
  if (targetY < 0) {
    targetY = 0;
  }
  // if(targetY > 175){
  // 	targetY = 175;
  // }

  if (targetX > smallBox.offsetWidth - mask.offsetWidth) {
    targetX = smallBox.offsetWidth - mask.offsetWidth;
  }

  if (targetY > smallBox.offsetHeight - mask.offsetHeight) {
    targetY = smallBox.offsetHeight - mask.offsetHeight;
  }
  //console.log(smallBox.offsetWidth-mask.offsetWidth);
  // console.log(mask.offsetWidth);
  //console.log(targetX);
  mask.style.left = targetX + "px";
  mask.style.top = targetY + "px";
  //按照比例移动大图
  var bigToMove = bigPic.offsetWidth - bigBox.offsetWidth;
  var maskToMove = smallBox.offsetWidth - mask.offsetWidth;
  var rate = bigToMove / maskToMove;
  bigPic.style.left = -rate * targetX + "px";
  bigPic.style.top = -rate * targetY + "px";
}

<!--商品数量-->
document.getElementById("add").onclick=function(){
  var t = $(this).parent().find('input[class*=l-text-box]');//获取当前显示的数据
  t.val(parseInt(t.val()) + 1);
}
document.getElementById("min").onclick=function(){
  var t = $(this).parent().find('input[class*=l-text-box]');//获取当前显示的数据
  t.val(parseInt(t.val()) - 1);
  if (parseInt(t.val()) < 1) {
    t.val(1);
  }
}


/*<!--收藏 弹出框-->
document.getElementById('l-gdo-fol').onclick=function () {
  $('.l-bg').show(500);
  $('.l-goods-follow').show(1000);
};
function folCancel() {
  $('.l-bg').hide(1000);
  $('.l-goods-follow').hide(500);
}*/

<!--滚动条滚到一定高度，商品简介、评论栏定位为固定定位-->
/*var rightTextH = $('#comment-text').height();
 $(window).scroll(function(){
 var srollPos = $(window).scrollTop(); //滚动条距顶部距离(页面超出窗口的高度)
 if(srollPos >= rightTextH) {
 $('#text_fiexd').css('position','fixed');
 }else{
 $('#text_fiexd').css('position','relative');
 }
 });*/

<!--点击评论栏上的购物车 弹出框-->
document.getElementById("l-car-btn").onclick=function () {
  $('#l-thefruit').show(1000);
}
document.getElementById("anniu").onclick=function () {
  $('#l-thefruit').hide(500);
}

<!--不同评论切换-->
document.getElementById('l-all-com').onclick=function () {
  $('#l-all-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -151px ');
  $('#l-good-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-normal-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-bad-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
}
document.getElementById('l-good-com').onclick=function () {
  $('#l-good-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -151px ');
  $('#l-all-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-normal-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-bad-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
}
document.getElementById('l-normal-com').onclick=function () {
  $('#l-normal-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -151px ');
  $('#l-all-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-good-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-bad-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
}
document.getElementById('l-bad-com').onclick=function () {
  $('#l-bad-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -151px ');
  $('#l-all-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-good-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
  $('#l-normal-com>s').css( 'background','url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -170px ');
}
