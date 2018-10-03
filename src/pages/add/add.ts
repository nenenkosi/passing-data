import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  list = [];
  firstName:string;
  lastName:string;
  idNum:string;
  tittle:string;
  pic:string;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
  
  showPrompt = function () {
    const prompt = this.alertCtrl.create({
      title: 'Add Employee',
      message: "Enter the details of the emloyee you want to add in a list",
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
        {
          name: 'surname',
          placeholder: 'Surname'
        },
        {
          name: 'idnum',
          placeholder: 'Identity Number'
        },
        {
          name: 'role',
          placeholder: 'Title',
        },
        {
          name: 'picture',
          placeholder: 'insert a picture',
          type: 'file'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
          
            var txt = data.picture;
            var tmp = txt.replace("fakepath", " ");
            var str = tmp.split(" ", 2)
            var url =  str[1];
            url = url.substr(1,url.length);
            url = "../../assets/imgs/" + url;
            let obj = new Employee(data.name,data.surname,data.idnum,data.role,url);
            this.list.push(obj);
            
            
          }
        }
      ]
    });
    prompt.present();
  }

  showOptions = function (i) {
    const prompt = this.alertCtrl.create({
      title: 'Options',
      message: "Enter the updated details of the emlpoyee you want to update",
      inputs: [
        {
          name: 'name',
          placeholder: this.list[i].name
        },
        {
          name: 'surname',
          placeholder: this.list[i].surname
        },
        {
          name: 'idnum',
          placeholder: this.list[i].idnum
        },
        {
          name: 'role',
          placeholder: this.list[i].role
        },
        {
          name: 'picture',
          placeholder: 'insert a picture',
          type: 'file'
        }
      ],
      buttons: [
        {
          text: 'Delete',
          handler: data => {
            this.list.splice(i,1);
            console.log('Delete clicked');
            
          }
        },
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Update',
          handler: data => {
            var txt = data.picture;
            var tmp = txt.replace("fakepath", " ");
            var str = tmp.split(" ", 2)
            var url =  str[1];
            url = url.substr(1,url.length);
            url = "../../assets/imgs/" + url;

            let obj1 = this.list[i];
            this.firstName = obj1.name;
            this.lastName = obj1.surname;
            this.idnNum = obj1.idnum;
            this.tittle = obj1.role;
            this.pic = obj1.pic;
            
            if(data.name != null &&  data.name != ''){
              this.firstName = data.name;
            }else {
              this.firstName = obj1.name;
            }

            if( data.surname != null && data.surname != '' ){
              this.lastName = data.surname;
            }else {
              this.lastName = obj1.surname;
            }

            if(data.idnum != null && data.idnum != ''){
              this.idnNum = data.idnum;
            }else {
              this.idnNum = obj1.idnum;
            }

            if(data.role != null && data.role != ''){
              this.tittle = data.role;
            }else {
              this.tittle = obj1.role;
            }

            if(data.picture != null && data.picture != ''){
              this.pic = url;
            }else {
              this.pic = obj1.picture;
            }
            
            let obj = new Employee(this.firstName,this.lastName,this.idnNum,this.tittle,this.pic);
            this.list[i] = obj;
          
          }
        }
      ]
    });
    prompt.present();
  }

  
}
export class Employee{
  name:string;
  surname:string;
  idnum:string;
  role:string;
  pic:string;

  constructor(name:string,surname:string,idnum:string,role:string,pic:string){
      this.name = name;
      this.surname = surname;
      this.idnum = idnum;
      this.role = role;
      this.pic = pic;
  }
}
