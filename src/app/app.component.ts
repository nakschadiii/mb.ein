import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ronaly';
  items = [
    {
      title: 'Projet 1',
      description: 'Description du projet 1.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Projet+1',
      link: 'https://example.com/projet-1'
    },
    {
      title: 'Projet 2',
      description: 'Description du projet 2.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Projet+2',
      link: 'https://example.com/projet-2'
    },
    {
      title: 'Projet 3',
      description: 'Description du projet 3.',
      imageUrl: 'https://via.placeholder.com/400x250?text=Projet+3',
      link: 'https://example.com/projet-3'
    }
  ];
}
