import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Message } from '../models/message.interface'; 

@Injectable({
  providedIn: 'root'
})
export class DataDbService {
   private contactCollection: AngularFirestoreCollection<Message>;

  constructor(private afs: AngularFirestore) { 
    this.contactCollection = afs.collection<Message> ('contacts');
  }

 saveMessage(newContact: Message): void {
   this.contactCollection.add(newContact);
 }

}
