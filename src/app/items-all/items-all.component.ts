import { ItemsService } from './../services/items.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-items-all',
  templateUrl: './items-all.component.html',
  styleUrls: ['./items-all.component.css']
})
export class ItemsAllComponent implements OnInit {

  constructor(public itemsService: ItemsService) { }

  ngOnInit(): void {
  }

}
