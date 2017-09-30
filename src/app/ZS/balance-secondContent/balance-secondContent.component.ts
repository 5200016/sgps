import { Component, Input } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  moduleId: module.id,
  selector: 'balanceSecondContent',
  styleUrls: ['balance-secondContent.css'],
  templateUrl: 'balance-secondContent.html',
  providers: []
})
export class BalanceSecondContentComponent {

  s_addAdress_flag: boolean = false;

  id: string;
  userId: string;
  goodsId: number;
  goodsCount:number;
  goodsName: string;
  goodsImage: string;
  goodsPrice: string;
  orders: any;

  constructor(private http: Http){
  }
  ngOnInit(){
    this.http.get('http://www.mobilebooks.cn/api/t-users/2').subscribe((res: Response) => {
      this.orders = res.json();
      console.log(this.orders.shoppingCars);
    });
  }

  $add_address() {
    this.s_addAdress_flag = true;
  }
  $confirm_sure_click () {
    console.log('cancel ok');
  }


}
