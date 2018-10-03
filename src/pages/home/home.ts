import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AddPage } from '../add/add';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  username:string = 'mxo';
  password:string = 'nene';
  constructor(public navCtrl: NavController) {

  }

  confirmUser(name,pass){
    if(this.username == name && this.password == pass){
      this.navCtrl.push(AddPage);
    } else {
      alert('wrong password or username');
    }
  }

}
