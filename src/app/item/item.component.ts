import { ItemsService } from './../services/items.service';
import ImenikItem from '../model/imenikItem';

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item!: ImenikItem;

  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}
