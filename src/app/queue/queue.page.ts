import { Component, OnInit, NgModule, Input } from '@angular/core';


import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.page.html',
  styleUrls: ['./queue.page.scss'],
})
export class QueuePage implements OnInit {

  itemCollection: AngularFirestoreCollection<any>;
  items: any;



  constructor(private firestore: AngularFirestore, public alertController: AlertController) {
    this.itemCollection = firestore.collection<any>('patthai', ref => ref.orderBy('token'));
    this.items = this.itemCollection.valueChanges();
  }

  remove(id: string) {
    this.itemCollection.doc(id).delete()
  }


  // 

  ngOnInit() {
    console.log(this.items)
  }

}
