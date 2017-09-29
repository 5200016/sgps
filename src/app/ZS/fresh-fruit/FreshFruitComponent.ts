/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';


@Component({
  selector: 'fresh-fruit',
  templateUrl: './template/FreshFruitComponent.html',
  styleUrls: ['./css/FreshFruitComponent.css']
})

export class FreshFruitComponent implements OnInit {

  s_confirm_addflag: boolean = false;
  s_confirm_content: string =  '';
  s_confirm_subTitle: string = '';

  id: string;
  goodsName: string;
  goodsImage: string;
  goodsPrice: string;
  /*goodsClassify:number;*/
  classifyName: string;
  data: any;
  place:any;
  good:any;
  /*
  构造方法
   */
  constructor(private http: Http){
  }

  /*初始化方法*/
  ngOnInit(){
    //品类
    this.http.get('http://www.mobilebooks.cn/api/t-classType-0').subscribe((res: Response) => {
      this.data = res.json();
      console.log(this.data);
    });
    //产地
    this.http.get('http://www.mobilebooks.cn/api/t-classType-1').subscribe((res: Response) => {
      this.place = res.json();
      console.log(this.place);
    });
    //商品
    this.http.get('http://www.mobilebooks.cn/api/t-classifies/2').subscribe((res: Response) => {
      this.good = res.json();
      console.log(this.good);
    })
  }

  $confirm_add_goods () {
    this.s_confirm_subTitle = '确定加入购物车吗？';
    this.s_confirm_addflag = true;
  };
}
