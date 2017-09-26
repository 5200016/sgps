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
  id: string;
  userId: string;
  goodsId: number;
  goodCount:number;
  goodsName: string;
  goodsImage: string;
  goodsPrice: string;
  cars: any;
  constructor(private http: Http){
  }
  /*
  初始化方法
   */
  ngOnInit(){
  }
  makeRequest():void{//定义一个点击事件的实现方法
    this.http.get('http://www.mobilebooks.cn/api/t-shopping-cars/2').subscribe((res: Response) => {
      this.cars = res.json();
      console.log(this.cars);
    })
  }
}
