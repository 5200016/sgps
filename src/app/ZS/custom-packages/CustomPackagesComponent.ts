/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'custom-packages',
  templateUrl: './template/CustomPackagesComponent.html',
  styleUrls: ['./css/CustomPackagesComponent.css']
})
export class CustomPackagesComponent implements OnInit{
  fruitClassifys :Object;
  url: string;
  fruitDetails: any;
  s_confirm_addflag: boolean = false;
  s_confirm_content: string =  '';
  s_confirm_subTitle: string = '';

  constructor(private http:Http){
  }
  $classifyFruit(id:any){
    this.url= 'http://www.mobilebooks.cn/api/t-classifies/' + id;
    this.http.get(this.url).subscribe((res:Response) =>{
        this.fruitDetails= res.json();
        console.log(this.fruitDetails)
      }
    );

  }
  ngOnInit(){//初始化
    //品类
    this.http.get('http://www.mobilebooks.cn/api/t-classType-0').subscribe((res:Response) =>{
        this.fruitClassifys = res.json();
      }
    );
    this.url= 'http://www.mobilebooks.cn/api/t-classifies/' + 2;
    this.http.get(this.url).subscribe((res:Response) =>{
        this.fruitDetails= res.json();
        console.log(this.fruitDetails);
      }
    );
  }

  $confirm_add_goods () {
    this.s_confirm_subTitle = '确定加入购物车吗？';
    /*this.s_confirm_content = '购物车中共<span class="tip">1</span>件商品 | 商品小计<span class="tip">￥19.90</span>';*/
    this.s_confirm_addflag = true;
  };


}

