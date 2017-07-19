/**
 * Created by lenovo on 2017/7/13.
 */
import {Component, ViewChild} from '@angular/core';
import {KSSwiperContainer} from "angular2-swiper";
@Component({
  selector: 'register',
  templateUrl: './template/FruitRegisterComponent.html',
  styleUrls: ['./css/FruitRegisterComponent.css']
})

export class FruitRegisterComponent{
// 单机上一个下一个的时候调用封装子组件中的方法
  @ViewChild(KSSwiperContainer)
  swiperContainer:KSSwiperContainer;

  // 图片数组
  data:Array<number>;
  img:Array<number>
  // 配置
  swipeOptions:any;
  swipeOptionsTwo:any;
  constructor() {
    this.swipeOptions = {
      // 每页显示几张图片
      slidesPerView: 1,
      // 是否循环
      loop: true,
      autoplay:5000,
      spaceBetween: 5,
      pagination: '.swiper-pagination',
      paginationClickable: true
    };
    this.data = [
      1, 2, 3, 4, 5, 6
    ];
  }
}
