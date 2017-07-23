/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, ViewChild} from '@angular/core';
import { KSSwiperContainer } from 'angular2-swiper';

@Component({
  selector: 'homepage',
  templateUrl: './template/HomepageComponent.html',
  styleUrls: ['./css/HomepageComponent.css']
})

export class HomepageComponent{

  saleFruits = [{
        'id': 1,
        'img': '../../../assets/fruit/tejia01.jpg',
        'name': '【闪购】能量果花',
        'price': '现：￥239.00 原：￥299.00'
      },
    {
      'id': 2,
      'img': '../../../assets/fruit/tejia02.jpg',
      'name': '【闪购】能量果花',
      'price': '现：￥239.00 原：￥299.00'
    },
    {
      'id': 3,
      'img': '../../../assets/fruit/tejia03.jpg',
      'name': '【闪购】能量果花',
      'price': '现：￥239.00 原：￥299.00'
    },
    {
      'id': 4,
      'img': '../../../assets/fruit/tejia04.jpg',
      'name': '【闪购】能量果花',
      'price': '现：￥239.00 原：￥299.00'
    }
  ];

  freshFruits = [
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit01.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 2,
      'img': '../../../assets/fruit/fruit02.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 3,
      'img': '../../../assets/fruit/fruit03.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 4,
      'img': '../../../assets/fruit/fruit04.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 5,
      'img': '../../../assets/fruit/fruit05.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 6,
      'img': '../../../assets/fruit/fruit06.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 7,
      'img': '../../../assets/fruit/fruit01.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 8,
      'img': '../../../assets/fruit/fruit02.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 9,
      'img': '../../../assets/fruit/fruit03.jpg',
      'name': '新疆硒砂瓜',
      'price': '￥39.90/1个'
    },
    {
      'id': 10,
      'img': '../../../assets/fruit/fruit04.jpg',
      'name': '新疆硒砂瓜哈哈',
      'price': '￥39.90/1个'
    }
    ];
  fruitPackages = [
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit01.jpg',
      'name': '新疆硒砂瓜哈哈1',
      'price': '￥39.90/1个'
     },
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit02.jpg',
      'name': '新疆硒砂瓜哈哈2',
      'price': '￥39.90/1个'
    },
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit03.jpg',
      'name': '新疆硒砂瓜哈哈3',
      'price': '￥39.90/1个'
    },
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit04.jpg',
      'name': '新疆硒砂瓜哈哈4',
      'price': '￥39.90/1个'
    },
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit05.jpg',
      'name': '新疆硒砂瓜哈哈5',
      'price': '￥39.90/1个'
    },
    {
      'id': 1,
      'img': '../../../assets/fruit/fruit06.jpg',
      'name': '新疆硒砂瓜哈哈6',
      'price': '￥39.90/1个'
    }]

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
