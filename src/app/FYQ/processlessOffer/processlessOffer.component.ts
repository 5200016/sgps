/**
 * Created by 123 on 2017/7/16.
 */
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'processlessOffer',
  styleUrls: ['processlessOffer.css'],
  templateUrl: 'processlessOffer.html',
  providers: []
})
export class ProcesslessOfferComponent {
  fruitsList = [
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]
}
