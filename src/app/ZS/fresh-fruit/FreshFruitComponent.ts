/**
 * Created by lenovo on 2017/7/18.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'fresh-fruit',
  templateUrl: './template/FreshFruitComponent.html',
  styleUrls: ['./css/FreshFruitComponent.css']
})

export class FreshFruitComponent{
  fruitsList = [
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]
}
