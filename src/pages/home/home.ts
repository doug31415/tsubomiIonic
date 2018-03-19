import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {PeopleProvider} from "../../providers/people/people";
import {PersonDetailPage} from '../person-detail/person-detail';
import {ModalController} from "ionic-angular";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  public people: any[] = [];

  public shouldReorder = false;

  constructor(public navCtrl: NavController,
              public peopleProvider: PeopleProvider,
              public modalCtrl: ModalController) {
  }

  toggleReorder() {
    this.shouldReorder = !this.shouldReorder;
  }

  refreshPeople(evt) {
    this.peopleProvider.getPeople()
      .subscribe(
        (data: any[]) => {
          this.people.unshift(...data)
        },
        err => console.log('DANGER', err),
        () => evt.complete(),
      )
  }

  doInfiniteScroll(evt) {
    this.peopleProvider.getPeople()
      .subscribe(
        (data: any[]) => {
          this.people.push(...data)
        },
        err => console.log('DANGER', err),
        () => evt.complete(),
      )
  }

  pushPage(person) {
    this.modalCtrl
      .create(PersonDetailPage, person)
      .present()

    // this.navCtrl.push(PersonDetailPage, person)
  }

  ngOnInit() {
    console.log('home on init');
    this.peopleProvider.getPeople()
      .subscribe(
        (data: any[]) => {
          this.people = data;
        }
      )
  }


}
