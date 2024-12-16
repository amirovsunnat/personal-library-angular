import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.scss'],
  standalone: true,
  imports: [RouterModule, NgFor] // Add RouterModule here
})
export class AuthorDetailComponent {
  author: any; // Author object; replace with a proper interface if needed
  books: any[] = []; // Array to hold books for the selected author

  constructor(private route: ActivatedRoute) {
    const authorId = this.route.snapshot.paramMap.get('id');
    this.fetchAuthorDetails(authorId);
  }

  fetchAuthorDetails(authorId: string | null) {
    const allBooks = [
      { id: 1, title: 'The Name of the Wind', authorId: 1 },
      { id: 2, title: 'The Wise Man\'s Fear', authorId: 1 },
      { id: 3, title: 'Mistborn: The Final Empire', authorId: 2 },
      { id: 4, title: 'The Well of Ascension', authorId: 2 },
      { id: 5, title: 'The Eye of the World', authorId: 3 },
      { id: 6, title: 'The Great Hunt', authorId: 3 },
      { id: 7, title: 'A Game of Thrones', authorId: 4 },
      { id: 8, title: 'A Clash of Kings', authorId: 4 },
      { id: 9, title: 'The Hobbit', authorId: 5 },
      { id: 10, title: 'The Fellowship of the Ring', authorId: 5 },
      { id: 11, title: 'Good Omens', authorId: 6 },
      { id: 12, title: 'American Gods', authorId: 6 },
      { id: 13, title: 'Dune', authorId: 7 },
      { id: 14, title: 'The Godfather', authorId: 8 },
      { id: 15, title: 'The Picture of Dorian Gray', authorId: 9 }
    ];

    const authors = [
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

    this.author = authors.find(a => a.id === Number(authorId));
    this.books = allBooks.filter(b => b.authorId === Number(authorId));
  }
}
