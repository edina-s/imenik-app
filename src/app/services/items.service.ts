
import { Injectable } from '@angular/core';
import Imenik from 'src/app/model/imenik';
import ImenikItem from 'src/app/model/imenikItem';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  imenik: Imenik;

  constructor() {
    this.imenik = new Imenik;
   }

   addItem(ime:string, broj:string){
     
    let item = new ImenikItem(ime, broj);
    this.imenik.add(item);

   }

   deleteItem(item:any) {
     this.imenik.delete(item);
   }

   changeItemStatus(item: any) {
    this.imenik.changeState(item);
  }


}
