import {Component, OnInit} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ViewController} from "ionic-angular";

/**
 * Generated class for the PersonDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-detail',
  templateUrl: 'person-detail.html',
})
export class PersonDetailPage implements OnInit{

  public person: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public viewCtrl:ViewController) {
  }

  dismiss(){
    this.viewCtrl.dismiss()
  }

  ngOnInit(){
    this.person = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonDetailPage');
  }

}
