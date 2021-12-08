import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-managequeue',
  templateUrl: './managequeue.page.html',
  styleUrls: ['./managequeue.page.scss'],
})
export class ManagequeuePage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: any;



  constructor(
    private firestore: AngularFirestore,
    private nav:NavController,
    public alertController: AlertController
    ) {
    this.itemCollection = firestore.collection<any>('patthai', ref => ref.orderBy('token'));
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {
    
  }

  check="1234"
  pass:string;
  password:string;
  hide: boolean = true;

  async ok() {
    console.log("check")
    if (this.pass === this.check) {
      console.log("nice1")
      document.getElementById("queue").hidden = false;
      document.getElementById("passinput").hidden = true;
    }else{
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        message: 'กรูณากรอกรหัสผ่านให้ถูกต้อง',
        buttons: ['OK'],
      });
  
      await alert.present();
  
      const { role } = await alert.onDidDismiss();
      console.log('onDidDismiss resolved with role', role);
    }
    // if (this.pass === this.check ) {
    //   document.getElementById("queue").hidden = false;
    // } else {

    //   this.hide = true;
    //   document.getElementById("queue").hidden = true;
    // }
  }

  back(){
    this.nav.navigateRoot('/home')
  }



  remove(id: string) {
    this.itemCollection.doc(id).delete()
  }

}
