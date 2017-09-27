/**
 * Created by 刘婷 on 2017/9/25.
 */
/**
 * Created by lenovo on 2017/7/23.
 */
import {Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'add-address',
  templateUrl: './addAddress.component.html',
  styleUrls: ['./addAddress.component.css']
})

export class AddAddressComponent {
  @Input() addAdressShow: boolean = true;
  @Output() showChange: EventEmitter<any> = new EventEmitter();
  @Input() title: string = "新增收货人信息";
  @Input() keepAddress: string = "保存收货人信息";

  @Output() addAdress: EventEmitter<any> = new EventEmitter();
  $keepAddress() {
    this.addAdress.emit();
    this.$hideClick();
  }
  $hideClick() {
    this.addAdressShow = false;
    this.showChange.emit(this.addAdressShow);
  }
}
