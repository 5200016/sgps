/**
 * Created by lenovo on 2017/7/23.
 */
import {Component, Input, Output , EventEmitter} from '@angular/core';
import {Http, Response} from "@angular/http";

@Component({
  selector: 'ele-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})

export class ConfirmComponent {
  @Input() show: boolean = false;
  @Input() fruitObject: Object;
  @Input() url: string;
  @Input() title: string = "消息提示";
  @Input() content: string = "";
  @Input() subTitle: string = "";
  @Input() sureText: string = "确定";
  @Input() cancelText: string = "取消";

  @Output() showChange: EventEmitter<any> = new EventEmitter();
  @Output() sure: EventEmitter<any> = new EventEmitter();
  @Output() cancel: EventEmitter<any> = new EventEmitter();

  result: any;

  constructor(private http : Http) {
  }

  $sureClick() {
    this.http.post(this.url,
      this.fruitObject).subscribe((res : Response) => {
      this.result = res.json();
      console.log(this.result);
    })
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
