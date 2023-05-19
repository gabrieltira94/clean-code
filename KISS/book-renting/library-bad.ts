import { BookDetails, BookRented } from "./book.interface";

/**
 * This example is a bad practice, we should keep logic for each action in a separate function
 */
class BadLibrary {
  private rentedBooks: BookRented[] = [];

  constructor(public books: BookDetails[]) { }

  rent(bookName: string, renterName: string, days: number) {
    const book = this.books.find(book => book.name === bookName);

    if (!book)
      return console.log(`We do not have ${bookName}!`);
    if (book.stock === 0)
      return console.log(`We do not have enough stock for ${bookName}!`);

    this.rentedBooks.push({ book, renterName, days });

    console.log('Book rented!');
  }
}
