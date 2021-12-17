import { tokenName } from '@angular/compiler';
import { TokenService } from './../token.service';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  worksCollection: AngularFirestoreCollection<any>;

  constructor(
    private nav: NavController,
    private firestore: AngularFirestore,
    public alertController: AlertController,
    private tok: TokenService
  ) {
    this.worksCollection = firestore.collection<any>('patthai')
  }

  status = "กำลังทำ"
  patthai: number;
  hoythord: number;
  ordername: string;
  
  

  ngOnInit() {
    this.patthai = 0;
    this.hoythord = 0;
    console.log(this.tok.token)
  }

  minuspatthai() {
    if (this.patthai > 0) {
      this.patthai = this.patthai - 1;
      console.log(this.patthai)
    }
  }
  addpatthai() {
    this.patthai = this.patthai + 1;
  }

  minushoythord() {
    if (this.hoythord > 0) {
      this.hoythord = this.hoythord - 1;
      console.log(this.hoythord)
    }
  }
  addhoythord() {
    this.hoythord = this.hoythord + 1;
  }



  cancel() {
    this.patthai = 0;
    this.hoythord = 0;
    this.ordername = "";
  }

  async order() {
    if (this.ordername !== "") {
      console.log("complete")
      const id = this.firestore.createId();
      const orders = {
        id: id,
        name: this.ordername,
        hoythord: this.hoythord,
        patthai: this.patthai,
        token: this.tok.token
      }
      this.worksCollection.doc(id).set(orders)
        .then(() => {
          this.tok.token = this.tok.token + 1
          this.patthai = 0;
          this.hoythord = 0;
          this.ordername = "";

          // this.nav.navigateBack("/queue");
        })
    }


  }
}


