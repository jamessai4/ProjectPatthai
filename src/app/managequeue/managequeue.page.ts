import { Component, OnInit } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-managequeue',
  templateUrl: './managequeue.page.html',
  styleUrls: ['./managequeue.page.scss'],
})
export class ManagequeuePage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: any;



  constructor(private firestore: AngularFirestore) {
    this.itemCollection = firestore.collection<any>('patthai', ref => ref.orderBy('token'));
    this.items = this.itemCollection.valueChanges();
  }

  ngOnInit() {

  }

  pass="1234";
  password:string;
  hide: boolean = true;

  ok() {
    if (this.hide === true ) {
      this.hide = false;
      document.getElementById("queue").hidden = true;
    } else if (this.hide === false) {

      this.hide = true;
      document.getElementById("queue").hidden = false;
    }
  }

  test(){
  }



  remove(id: string) {
    this.itemCollection.doc(id).delete()
  }

}
