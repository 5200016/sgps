/**
 * Created by lenovo on 2017/7/18.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'mine',
  templateUrl: './template/MineComponent.html',
  styleUrls: ['./css/MineComponent.css']
})

export class MineComponent {
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

}
