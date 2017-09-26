import { Component } from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'fixed-packages',
  templateUrl: './template/FixedPackagesComponent.html',
  styleUrls: ['./css/FixedPackagesComponent.css']
})

export class FixedPackagesComponent{
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
  /*fruitsList = [
    { img : '../../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]*/
}
