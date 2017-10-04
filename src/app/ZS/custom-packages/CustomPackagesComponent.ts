/**
 * Created by lenovo on 2017/7/18.
 */
import {Component, OnInit} from '@angular/core';
import { Http, Response, RequestOptions, Headers, Jsonp, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'custom-packages',
  templateUrl: './template/CustomPackagesComponent.html',
  styleUrls: ['./css/CustomPackagesComponent.css']
})

export class CustomPackagesComponent implements OnInit{
  fruitClassifys: Object;
  url: string;
  allUrl: string;
  selectedData: any = "";   //初始化
  fruitDetails: any;
  /*s_confirm_addflag: boolean = false;*/
 /* s_confirm_content: string =  '';*/
/*  s_confirm_subTitle: string = '';*/

  constructor(private http:Http){
  }

  $classifyFruit(id:any){
    this.url =  'http://www.mobilebooks.cn/api/t-classifies/' + id;
    this.http.get(this.url).subscribe((res:Response) =>{
        this.fruitDetails = res.json();
        console.log(this.fruitDetails);
      }
    );
  }

  $allFruits(){
    this.allUrl = 'http://www.mobilebooks.cn/api/t-classifies/1';
    this.http.get(this.allUrl).subscribe((res:Response) => {
        this.fruitDetails = res.json();
        console.log(this.fruitDetails);
    }
    );
  }

  /*$deleteEle3(){
    let parent = document.getElementsByClassName("z-custom-bottom-one-small-div");
    let child = document.getElementsByClassName("custom-already");
    parent.removeChild(child);
  }
*/
  $custom_add_goods(goodsName: any,id: any){
      this.selectedData += `<div class="z-custom-small-selected" style="width: 100%;height: 50px;border-bottom: 1px solid #ECECEC;">
                                <label style="float: left;font-size: 18px;margin-top: 10px; ">${ goodsName }</label>
                                <img (click)="$deleteEle3(id)" style="float: right;width: 34px;margin-top: 6px;" src="../../../assets/fruit/jianhao.png">
                               </div>`;
        document.getElementById("z-side-aa").innerHTML = this.selectedData;
  /*  this.s_confirm_subTitle = '确定选择吗？';
    this.s_confirm_addflag = true;*/
  }
  $deleteEle3(id){
  }
  ngOnInit(){//初始化
    //品类
    this.http.get('http://www.mobilebooks.cn/api/t-classType-0').subscribe((res:Response) =>{
        this.fruitClassifys = res.json();
      }
    );

    this.allUrl = 'http://www.mobilebooks.cn/api/t-classifies/1';
    this.http.get(this.allUrl).subscribe((res:Response) => {
        this.fruitDetails = res.json();
        console.log(this.fruitDetails);
      }
    );
  }

}

