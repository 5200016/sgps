/**
 * Created by 123 on 2017/7/17.
 */
import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'balanceFirstContent',
  styleUrls: ['balance-firstContent.css'],
  templateUrl: 'balance-firstContent.html',
  providers: []
})
export class BalanceFirstContentComponent {
  data:Object;
  id: string;
  goods_name: string;
  goods_image: string;
  goods_classify: string;
  goods_price: string;

  constructor(private http: Http){
  }
  /*
  初始化方法
   */
  ngOnInit(){
  }
  makeRequest():void{//定义一个点击事件的实现方法
    this.http.get('http://www.mobilebooks.cn/api/t-goods').subscribe((res: Response) => {
      this.data = res.json();

      console.log(this.data);

    })
  }
}
