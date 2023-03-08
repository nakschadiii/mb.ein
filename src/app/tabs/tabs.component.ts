import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { items } from '../data';


@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss']
})
export class TabsComponent implements OnInit {
  id: number = 0; // Initialisation avec une valeur par défaut

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // Récupérer l'ID de la route
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  items = items;
}
