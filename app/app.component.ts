import { Component } from '@angular/core';
import { FirebaseApp } from 'angularfire2';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { HeaderComponent } from './header/header.component';
export interface Item { name: string; id: string }
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  private cardsCollection: AngularFirestoreCollection<Item>;
  cards: Observable<Item[]>;
  constructor(private afs: AngularFirestore) {
    this.cardsCollection = afs.collection<Item>('items',ref => ref.where('name' ,'==','whatever'));
    this.cards = this.cardsCollection.valueChanges();
  }
  addItem(event) {
    const id = this.afs.createId();
    const allText = ['Some quick example text', 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'];

    this.cardsCollection.doc(id).set({ id: id, name: 'whatever', text: allText[event] });
  }
  delete(item: Item) {
    this.cardsCollection.doc(item.id).delete();
  }
}
