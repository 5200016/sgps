/**
 * Created by 123 on 2017/7/15.
 */
import { Component, Input } from '@angular/core';
@Component({
  moduleId: module.id,
  selector: 'mealOffer',
  styleUrls: ['mealOffer.css'],
  templateUrl: 'templates/mealOffer.html',
  providers: []
})
export class MealOfferComponent {
  fruitsList = [
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit1.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit2.jpg' , name : '荷兰青啤梨' , price: '39.90'},
    { img : '../../../assets/specialOffer/fruit3.jpg' , name : '荷兰青啤梨' , price: '39.90'},
  ]
}
