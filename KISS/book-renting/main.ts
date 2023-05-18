import Library from "./Library";
import { BookDetails } from "./book.interface";

const bookDetails: BookDetails = { name: 'How to win friends and influence people', stock: 6 };
const book1: BookDetails = { name: 'Book1', stock: 0 };
const book2: BookDetails = { name: 'Book 2', stock: 4 };
const book3: BookDetails = { name: 'Another book', stock: 21 };
const books: BookDetails[] = [book1, book2, book3];

const library = new Library(books);

library.rent(bookDetails.name, 'Jimmy', 4);
