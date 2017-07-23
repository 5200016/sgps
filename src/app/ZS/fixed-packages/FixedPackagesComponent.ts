import { Component } from '@angular/core';

@Component({
  selector: 'fixed-packages',
  templateUrl: './template/FixedPackagesComponent.html',
  styleUrls: ['./css/FixedPackagesComponent.css']
})

export class FixedPackagesComponent{
  fruitsList = [
    { img : '../../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]
}
