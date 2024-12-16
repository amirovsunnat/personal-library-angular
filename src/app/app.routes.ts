import { Routes } from '@angular/router';

// Importing Standalone Components
import { HomeComponent } from './pages/home/home.component';
import { BookListComponent } from './pages/book-list/book-list.component';
import { BookDetailComponent } from './pages/book-detail/book-detail.component';
import { AuthorListComponent } from './pages/author-list/author-list.component';
import { AuthorDetailComponent } from './pages/author-detail/author-detail.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

// Define your application routes
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BookListComponent },
  { path: 'books/:id', component: BookDetailComponent },
  { path: 'authors', component: AuthorListComponent },
  { path: 'authors/:id', component: AuthorDetailComponent },
  { path: '**', component: NotFoundComponent }, // Wildcard route for a 404 page
];
