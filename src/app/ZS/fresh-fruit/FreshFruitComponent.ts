/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

@Component({
  selector: 'fresh-fruit',
  templateUrl: './template/FreshFruitComponent.html',
  styleUrls: ['./css/FreshFruitComponent.css']
})

export class FreshFruitComponent implements OnInit {
  id: string;
  goodsName: string;
  goodsImage: string;
  goodsPrice: string;
  /*goodsClassify:number;*/
  classifyName: string;
  data: any;
  place:any;
  good:any;
  /*
  构造方法
   */
  constructor(private http: Http){
  }

  /*初始化方法*/
  ngOnInit(){
    //品类
    this.http.get('http://www.mobilebooks.cn/api/t-classType-0').subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
    });
    //产地
    this.http.get('http://www.mobilebooks.cn/api/t-classType-1').subscribe((res: Response) => {
      this.place = res.json();
      console.log(this.place);
    });
    //商品
    this.http.get('http://www.mobilebooks.cn/api/t-classifies/2').subscribe((res: Response) => {
      this.good = res.json();
      console.log(this.good);
    })
  }

  /*fruitsList = [
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]*/
}
