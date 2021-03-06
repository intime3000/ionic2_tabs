import {Component} from '@angular/core';

import {NavController} from 'ionic-angular';
import {NativeDemoPage} from "./native-demo/native-demo";
import {PaginationDemoPage} from "./pagination-demo/pagination-demo";
import {CustomIconDemoPage} from "./custom-icon-demo/custom-icon-demo";
import {ChartjsDemoPage} from "./chartjs-demo/chartjs-demo";
import {SelectPicDemoPage} from "./select-pic-demo/select-pic-demo";
import {CustomPipeDemo} from "./custom-pipe-demo/custom-pipe-demo";
import {TransitionDemoPage} from "./transition-demo/transition-demo";
import {CropPicDemoPage} from "./crop-pic-demo/crop-pic-demo";
import {CityPickerDemoPage} from "./city-picker-demo/city-picker-demo";
import {CalendarDemoPage} from "./calendar-demo/calendar-demo";

@Component({
  selector: 'page-contact',
  templateUrl: 'demo.html'
})
export class DemoPage {

  constructor(private navCtrl: NavController) {

  }

  native() {
    this.navCtrl.push(NativeDemoPage);
  }

  pagination() {
    this.navCtrl.push(PaginationDemoPage);
  }

  customIcon() {
    this.navCtrl.push(CustomIconDemoPage);
  }

  pipes() {
    this.navCtrl.push(CustomPipeDemo);
  }

  chartjs() {
    this.navCtrl.push(ChartjsDemoPage);
  }

  selectPic() {
    this.navCtrl.push(SelectPicDemoPage);
  }

  cropPic() {
    this.navCtrl.push(CropPicDemoPage);
  }

  pageTransition() {
    this.navCtrl.push(TransitionDemoPage);
  }

  cityPicker() {
    this.navCtrl.push(CityPickerDemoPage);
  }

  calendar() {
    this.navCtrl.push(CalendarDemoPage);
  }

}
