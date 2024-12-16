import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-book-detail',
  standalone: true,
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent {
  book: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const bookId = this.route.snapshot.paramMap.get('id');
    this.fetchBookDetails(bookId);
  }
  navigateToBooks(): void {
    this.router.navigate(['/books']); // Navigate to the books route
  }
  

  fetchBookDetails(bookId: string | null) {
    const books = [
      { 
        id: '1', 
        title: 'The Name of the Wind', 
        author: 'Patrick Rothfuss', 
        description: 'Follow the journey of Kvothe, a gifted young man who becomes a legend. His story reveals his life as a wandering musician, a powerful magician, and a feared assassin, all while seeking to uncover the mystery behind his family\'s murder.',
        image: 'https://m.media-amazon.com/images/I/611iKJa7a-L._AC_UF894,1000_QL80_.jpg'
      },
      { 
        id: '2', 
        title: 'The Wise Man\'s Fear', 
        author: 'Patrick Rothfuss', 
        description: 'In this sequel to "The Name of the Wind," Kvothe continues his journey of discovery and adventure as he learns more about the world, his abilities, and the dark forces that threaten him.',
        image: 'https://m.media-amazon.com/images/I/81Z7bu0I0iL._AC_UF894,1000_QL80_.jpg'
      },
      { 
        id: '3', 
        title: 'Mistborn: The Final Empire', 
        author: 'Brandon Sanderson', 
        description: 'In a world where ash falls from the sky and mist dominates the night, a young street urchin named Vin discovers her unique powers and joins a group of rebels planning to overthrow the oppressive Lord Ruler.',
        image: 'https://m.media-amazon.com/images/I/91U6rc7u0yL._UF1000,1000_QL80_.jpg'
      },
      { 
        id: '4', 
        title: 'The Well of Ascension', 
        author: 'Brandon Sanderson', 
        description: 'The story continues as Vin and her allies struggle to establish a new government while facing new enemies, political intrigue, and the threat of a powerful force rising from the depths of the earth.',
        image: 'https://m.media-amazon.com/images/I/81xlbMTiLwL._AC_UF1000,1000_QL80_.jpg'
      },
      { 
        id: '5', 
        title: 'The Eye of the World', 
        author: 'Robert Jordan', 
        description: 'The first book in "The Wheel of Time" series, this epic fantasy follows Rand al\'Thor and his friends as they are swept into a battle against the Dark One, exploring a richly detailed world filled with magic, destiny, and adventure.',
        image: 'https://m.media-amazon.com/images/I/713IC5gq6jL._AC_UF1000,1000_QL80_.jpg'
      },
      { 
        id: '6', 
        title: 'The Great Hunt', 
        author: 'Robert Jordan', 
        description: 'Rand al\'Thor must confront his destiny as the Dragon Reborn. As he takes on a perilous quest, alliances are formed and battles are fought, with the fate of the world hanging in the balance.',
        image: 'https://m.media-amazon.com/images/I/91tAGFfV1OL._UF1000,1000_QL80_.jpg'
      },
      { 
        id: '7', 
        title: 'A Game of Thrones', 
        author: 'George R. R. Martin', 
        description: 'The first book in the "A Song of Ice and Fire" series introduces the reader to the Seven Kingdoms of Westeros, where noble families vie for power, loyalty is fleeting, and winter is coming.',
        image: 'https://i.harperapps.com/hcanz/covers/9780007459483/y648.jpg'
      },
      { 
        id: '8', 
        title: 'A Clash of Kings', 
        author: 'George R. R. Martin', 
        description: 'As the war for the Iron Throne escalates, various factions engage in a brutal power struggle, leading to unexpected alliances and betrayals in a land where honor is often sacrificed for survival.',
        image: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1359918997i/822995.jpg'
      },
      { 
        id: '9', 
        title: 'The Hobbit', 
        author: 'J.R.R. Tolkien', 
        description: 'Join Bilbo Baggins on his unexpected adventure with a group of dwarves and the wizard Gandalf as they journey to reclaim the Lonely Mountain from the dragon Smaug, discovering bravery and friendship along the way.',
        image: 'https://m.media-amazon.com/images/I/71jD4jMityL._AC_UF894,1000_QL80_.jpg'
      },
      { 
        id: '10', 
        title: 'The Fellowship of the Ring', 
        author: 'J.R.R. Tolkien', 
        description: 'The first part of "The Lord of the Rings" trilogy follows Frodo Baggins as he embarks on a quest to destroy the One Ring, facing perilous challenges and forming a fellowship with diverse allies.',
        image: 'https://m.media-amazon.com/images/I/71Ep7UNeTtL.jpg'
      },
      { 
        id: '11', 
        title: 'Good Omens', 
        author: 'Neil Gaiman', 
        description: 'A comedic take on the apocalypse, this novel follows an angel and a demon who team up to prevent the coming of the Antichrist, navigating through a series of hilarious misadventures.',
        image: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1615552073l/12067.jpg'
      },
      { 
        id: '12', 
        title: 'American Gods', 
        author: 'Neil Gaiman', 
        description: 'Shadow Moon becomes embroiled in a conflict between the old gods of mythology and the new gods of modern society, leading to a journey that explores the nature of belief, culture, and identity.',
        image: 'https://m.media-amazon.com/images/I/716LpMKQ3iL.jpg'
      },
      { 
        id: '13', 
        title: 'Dune', 
        author: 'Frank Herbert', 
        description: 'Set in a distant future, this sci-fi epic follows Paul Atreides as he navigates political intrigue and ecological challenges on the desert planet of Arrakis, the only source of the universe\'s most valuable substance: spice.',
        image: 'https://m.media-amazon.com/images/I/81TmnPZWb0L._AC_UF894,1000_QL80_.jpg'
      },
      { 
        id: '14', 
        title: 'The Godfather', 
        author: 'Mario Puzo', 
        description: 'A gripping tale of power and loyalty, this novel follows the Corleone family as they navigate the world of organized crime, exploring themes of family, betrayal, and the American Dream.',
        image: 'https://m.media-amazon.com/images/I/61zAyF3qLnL._AC_UF1000,1000_QL80_.jpg'
      },
      { 
        id: '15', 
        title: 'The Picture of Dorian Gray', 
        author: 'Oscar Wilde', 
        description: 'This classic novel tells the story of Dorian Gray, a young man who remains eternally youthful while his portrait ages, exploring themes of vanity, moral corruption, and the nature of beauty.',
        image: 'https://m.media-amazon.com/images/I/71fm0Ap7JcL._AC_UF1000,1000_QL80_.jpg'
      }
    ]; 
    
    this.book = books.find(b => b.id === bookId);
  }
}
