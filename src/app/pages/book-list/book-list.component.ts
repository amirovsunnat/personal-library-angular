import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
  standalone: true, // Mark as standalone
  imports: [RouterModule, NgFor] // Import RouterModule
})
export class BookListComponent {
  books = [
    { id: 1, title: 'The Name of the Wind', author: 'Patrick Rothfuss', authorId: 1, image: 'https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF894,1000_QL80_.jpg' },
    { id: 2, title: 'The Wise Man\'s Fear', author: 'Patrick Rothfuss', authorId: 1, image: 'https://m.media-amazon.com/images/I/81Z7bu0I0iL._AC_UF894,1000_QL80_.jpg' },
    { id: 3, title: 'Mistborn: The Final Empire', author: 'Brandon Sanderson', authorId: 2, image: 'https://m.media-amazon.com/images/I/91U6rc7u0yL._UF1000,1000_QL80_.jpg' },
    { id: 4, title: 'The Well of Ascension', author: 'Brandon Sanderson', authorId: 2, image: 'https://m.media-amazon.com/images/I/81xlbMTiLwL._AC_UF1000,1000_QL80_.jpg' },
    { id: 5, title: 'The Eye of the World', author: 'Robert Jordan', authorId: 3, image: 'https://m.media-amazon.com/images/I/713IC5gq6jL._AC_UF1000,1000_QL80_.jpg' },
    { id: 6, title: 'The Great Hunt', author: 'Robert Jordan', authorId: 3, image: 'https://m.media-amazon.com/images/I/91tAGFfV1OL._UF1000,1000_QL80_.jpg' },
    { id: 7, title: 'A Game of Thrones', author: 'George R. R. Martin', authorId: 4, image: 'https://i.harperapps.com/hcanz/covers/9780007459483/y648.jpg' },
    { id: 8, title: 'A Clash of Kings', author: 'George R. R. Martin', authorId: 4, image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1359918997i/822995.jpg' },
    { id: 9, title: 'The Hobbit', author: 'J.R.R. Tolkien', authorId: 5, image: 'https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF894,1000_QL80_.jpg' },
    { id: 10, title: 'The Fellowship of the Ring', author: 'J.R.R. Tolkien', authorId: 5, image: 'https://m.media-amazon.com/images/I/71Ep7UNeTtL.jpg' },
    { id: 11, title: 'Good Omens', author: 'Neil Gaiman', authorId: 6, image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1615552073l/12067.jpg' },
    { id: 12, title: 'American Gods', author: 'Neil Gaiman', authorId: 6, image: 'https://m.media-amazon.com/images/I/716LpMKQ3iL.jpg' },
    { id: 13, title: 'Dune', author: 'Frank Herbert', authorId: 7, image: 'https://m.media-amazon.com/images/I/81TmnPZWb0L._AC_UF894,1000_QL80_.jpg' },
    { id: 14, title: 'The Godfather', author: 'Mario Puzo', authorId: 8, image: 'https://m.media-amazon.com/images/I/61zAyF3qLnL._AC_UF1000,1000_QL80_.jpg' },
    { id: 15, title: 'The Picture of Dorian Gray', author: 'Oscar Wilde', authorId: 9, image: 'https://m.media-amazon.com/images/I/71fm0Ap7JcL._AC_UF1000,1000_QL80_.jpg' }
  ];
}
