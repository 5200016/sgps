/**
 * Created by 刘婷 on 2017/7/22.
 */
document.getElementById("l-deladdr-btn").onclick=function () {
  $('.l-bg').show(500);
  $('.l-delete-address').show(1000);
}
function delAddress() {
  $('.l-bg').hide(1000);
  $('.l-delete-address').hide(500);
}
