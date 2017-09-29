import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'fixed-packages',
  templateUrl: './template/FixedPackagesComponent.html',
  styleUrls: ['./css/FixedPackagesComponent.css']
})

export class FixedPackagesComponent{

  s_confirm_addflag: boolean = false;
  s_confirm_content: string =  '';
  s_confirm_subTitle: string = '';

  id: string;
  goodsName: string;
  goodsImage: string;
  goodsPrice: string;
  classifyName: string;
  classifyType: string;
  data: any;
  size:any;
  fruit:any;

  /*
   构造方法
   */
  constructor(private http: Http){
  }
  /*初始化方法*/
  ngOnInit(){
    //种类
    this.http.get('http://www.mobilebooks.cn/api/t-classType-2').subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
    });
    //规格
    this.http.get('http://www.mobilebooks.cn/api/t-classType-3').subscribe((res: Response) => {
      this.size= res.json();
      console.log(this.size);
    });
    //商品
    this.http.get('http://www.mobilebooks.cn/api/t-classifies/35').subscribe((res: Response) => {
      this.fruit = res.json();
      console.log(this.fruit);
    })
  }

  $confirm_add_goods () {
    this.s_confirm_subTitle = '确定加入购物车吗？';
    this.s_confirm_addflag = true;
  };

}
