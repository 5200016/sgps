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
  data: Object;
  id: string;
  goods_name: string;
  goods_image: string;
  goods_price: string;
  classify_name: string;
  classify_type: number;
  /*
  构造方法
   */
  constructor(private http: Http){
  }
  /*初始化方法*/
  ngOnInit(){
    this.http.get('http://www.mobilebooks.cn/api/t-classifies').subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
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
