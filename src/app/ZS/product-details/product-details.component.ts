/**
 * Created by 刘婷 on 2017/7/14.
 */
import { Component } from '@angular/core';
@Component({
  selector: 'product-details',
  templateUrl: './templates/product-details.component.html',
  styleUrls: ['./css/product-details.component.css'],
})
export class ProductDetailsComponent {
  textShow: number = 1 ;
  coms: any = [
    {
      id: '1',
      name: '188****1915',
      content: '好棒',
      img: 'http://img.guocool.com/product/2017/06/23/281b2251e32b4252ba531b902a63b035.jpg',
      date: new Date,
    },
    {
      id: '2',
      name: '222',
      content: '好吃',
      img: 'http://img.guocool.com/product/2017/06/23/ce887eb685ff4731855c5a33dbfeb674.jpg',
      date: new Date,
    }
  ];
  rums: any = [
    {
      id: '1',
      name: '南非葡萄柚',
      img: 'https://imgjd2.fruitday.com/images/product_pic/2509/1/1-180x180-2509-7XUDC579.jpg',
      price: '29.90',
      num: '6个',
    },
    {
      id: '2',
      name: '金黄油桃',
      img: 'https://imgjd1.fruitday.com/images/product_pic/2665/1/1-180x180-2665-375BU5RU.jpg',
      price: '29.90',
      num: '2斤',
    }
  ]
  constructor() {
  }
  goodDes() {
    this.textShow = 1;
  }
  goodComs() {
    this.textShow = 2;
  }

  getStyle() {
    return{
      'border-top': '3px solid #64a131',
      'background-color':  '#ffffff',
    };
  }
  getAllcom() {
    return{
      'background':  'url(http://www.fruitday.com/images/common/icons.png) no-repeat -532px -151px ',
    };
  }
}
