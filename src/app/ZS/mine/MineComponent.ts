/**
 * Created by lenovo on 2017/7/18.
 */
import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'mine',
  templateUrl: './template/MineComponent.html',
  styleUrls: ['./css/MineComponent.css']
})

export class MineComponent {
  s_confirm_flag: boolean = false;
  s_confirm_content: string =  '';
  textShow: number = 1 ;
  constructor() {
  }
  perOne() {
    this.textShow = 1;
  }
  perTwo() {
    this.textShow = 2;
  }
  perThree() {
    this.textShow = 3;
  }
  perFour() {
    this.textShow = 4;
  }
  perFive() {
    this.textShow = 5;
  }
  perSix() {
    this.textShow = 6;
  }
  perSeven() {
    this.textShow = 7;
  }
  perEight() {
    this.textShow = 8;
  }
  $remove_addr() {
    this.s_confirm_content =  '您确定要删除该条收货地址？';
    this.s_confirm_flag = true;
  }
  $remove_follow() {
    this.s_confirm_content =  '您确定要取消收藏该商品？';
    this.s_confirm_flag = true;
  }
  $confirm_sure_click () {
    console.log('cancel ok');
  }
}
