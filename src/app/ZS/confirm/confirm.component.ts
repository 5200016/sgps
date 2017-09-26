/**
 * Created by lenovo on 2017/7/23.
 */
import {Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'ele-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent {
  @Input() show: boolean = false;
  @Output() showChange: EventEmitter<any> = new EventEmitter();
  @Input() title: string = "消息提示";
  @Input() content: string = "";
  @Input() subTitle: string = "";
  @Input() sureText: string = "确定";
  @Input() cancelText: string = "取消";

  @Output() sure: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  $sureClick() {
    this.sure.emit();
    this.$hideClick();
  }
  $cancelClick() {
    this.cancel.emit();
    this.$hideClick();
  }
  $hideClick() {
    this.show = false;
    this.showChange.emit(this.show);
  }
}
