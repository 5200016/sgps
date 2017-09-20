/**
 * Created by 刘婷 on 2017/7/14.
 */
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/switchMap';
import { Http, Response } from '@angular/http';

@Component({
  // moduleId: module.id,
  selector: 'product-details',
  templateUrl: './templates/ProductDetailsComponent.html',
  styleUrls: ['./css/ProductDetailsComponent.css'],
  // providers: [ ProductDetailsService ] // service接口
})
export class ProductDetailsComponent implements OnInit {

  s_confirm_addflag: boolean = false;
  s_confirm_folflag: boolean = false;
  s_confirm_content: string =  '';
  s_confirm_subTitle: string = '';
  textShow: number = 1 ;
  // 评论
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
  // 推荐类型物品
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
  ];

  good: any;

// 商品的属性
  id: string;
  goodsName: string;
  goodsPrice: string;
  goodsImage: string;
  goodsClassify: number;
  goodsIntroduction: string;
  temperature: number;
  nutritionInfo: string;
  effect: string;
  hot: number;
  createTime: any;
  updateTime: any;

  constructor(private http: Http) {
  }
  // 生命周期
  ngOnInit(): void {
    this.http.get('http://www.mobilebooks.cn/api/t-goods/2')
      .subscribe((res: Response) => {
        this.good = res.json();
        console.log(this.good);
      })
  }
  goodDes() {
    this.textShow = 1;
  }
  goodComs() {
    this.textShow = 2;
  }
  getAllcom() {
    return{
      'background':  'orange',
    };
  }

  $confirm_add_goods () {
    this.s_confirm_subTitle = '加入购物车成功！';
    this.s_confirm_content = '购物车中共<span class="tip">1</span>件商品 | 商品小计<span class="tip">￥19.90</span>';
    this.s_confirm_addflag = true;
  };

  $confirm_sure_click() {
    console.log('add goods ok')
  }

  $confirm_folllow_goods() {
    this.s_confirm_subTitle = '确认收藏该商品吗？';
    this.s_confirm_folflag = true;
  }
}

