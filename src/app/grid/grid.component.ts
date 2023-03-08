import { Component, OnInit } from '@angular/core';
import { items } from '../data';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss']
})
export class GridComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  items = items;
}
  