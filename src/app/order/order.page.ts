import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';


@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss'],
})
export class OrderPage implements OnInit {

  worksCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore,) {
    this.worksCollection = firestore.collection<any>('patthai')
  }

  status="กำลังทำ"
  patthai: number;
  hoythord: number;
  ordername: string;
  token=1;

  ngOnInit() {
    this.patthai = 0;
    this.hoythord = 0;
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


  cancel() {
    this.patthai = 0;
    this.hoythord = 0;
    this.ordername = "";
  }

  order() {
    const id = this.firestore.createId();
    const orders = {
      id: id,
      name: this.ordername,
      hoythord: this.hoythord,
      patthai: this.patthai,
      token: this.token,
      status:this.status
    }
    this.worksCollection.doc(id).set(orders)
      .then(() => {
        this.token = this.token+1;
        this.patthai = 0;
        this.hoythord = 0;
        this.ordername = "";
      })
  }

}
