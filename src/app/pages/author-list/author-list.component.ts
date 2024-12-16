import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.scss'],
  standalone: true,
  imports: [NgFor, RouterModule]
})
export class AuthorListComponent {
  authors = [
    { id: 1, name: 'Patrick Rothfuss' },
    { id: 2, name: 'Brandon Sanderson' },
    { id: 3, name: 'Robert Jordan' },
    { id: 4, name: 'George R. R. Martin' },
    { id: 5, name: 'J.R.R. Tolkien' },
    { id: 6, name: 'Neil Gaiman' },
    { id: 7, name: 'Frank Herbert' },
    { id: 8, name: 'Mario Puzo' },
    { id: 9, name: 'Oscar Wilde' }
  ];
}
