/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, OnInit, ViewChild} from '@angular/core';
import { KSSwiperContainer } from 'angular2-swiper';
import { Http, Response, RequestOptions, Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'homepage',
  templateUrl: './template/HomepageComponent.html',
  styleUrls: ['./css/HomepageComponent.css']
})

export class HomepageComponent implements OnInit {

// 单机上一个下一个的时候调用封装子组件中的方法
  @ViewChild(KSSwiperContainer)
  swiperContainer: KSSwiperContainer;

  // 图片数组
  saleFruits: Object;
  freshFruits: Object;
  fruitPackages: Object;
  advertisements: Object;
  s_confirm_addflag: boolean = false;
  s_confirm_content: string =  '';
  s_confirm_subTitle: string = '';
  /*img: Array<number>*/
  // 配置
  swipeOptions: any;
  /*swipeOptionsTwo: any;*/
  constructor(private http:Http) {

    this.swipeOptions = {
      // 每页显示几张图片
      slidesPerView: 1,
      // 是否循环
      loop: true,
      autoplay: 5000,
      spaceBetween: 5,
      pagination: '.swiper-pagination',
      paginationClickable: true
    };

  }
  ngOnInit(){
    this.http.get('http://www.mobilebooks.cn/api/t-bargains').subscribe((res:Response) =>{
      this.saleFruits = res.json();
       }
    );
    this.http.get('http://www.mobilebooks.cn/api/t-home-recommends-0').subscribe((res:Response) =>{
        this.freshFruits = res.json();
        console.log(this.freshFruits)
      }
    );
    this.http.get('http://www.mobilebooks.cn/api/t-home-recommends-1').subscribe((res:Response) =>{
        this.fruitPackages = res.json();
        console.log(this.fruitPackages)
      }
    );
    this.http.get('http://www.mobilebooks.cn/api/t-advertisements').subscribe((res:Response) =>{
        this.advertisements = res.json();
        console.log(this.advertisements)
      }
    );
  }

  $confirm_add_goods () {
    this.s_confirm_subTitle = '确定加入购物车吗？';
    /*this.s_confirm_content = '购物车中共<span class="tip">1</span>件商品 | 商品小计<span class="tip">￥19.90</span>';*/
    this.s_confirm_addflag = true;
  };


}

