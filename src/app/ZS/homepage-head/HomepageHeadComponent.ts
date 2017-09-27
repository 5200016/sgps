import {Component, ViewChild} from '@angular/core';
import { KSSwiperContainer } from 'angular2-swiper';
@Component({
  selector: 'homepage-head',
  templateUrl: './template/HomepageHeadComponent.html',
  styleUrls: ['./css/HomepageHeadComponent.css']
})

export class HomepageHeadComponent{
  /*str: boolean = true
  onClickLogin(){
    this.str = false;
  }*/
  function ($scope) {
    $scope.show = function () {
      // $scope.isShow = !$scope.isShow;
      if($scope.isShow == 'true'){
        $scope.isShow = 'false';
      }else{
        $scope.isShow = 'true';
      }
    }
  }
}
