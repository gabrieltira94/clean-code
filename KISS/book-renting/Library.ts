import { BookDetails, BookRented } from "./book.interface";

export default class Library {
  private rentedBooks: BookRented[] = [];

  constructor(public books: BookDetails[]) { }

  rent(bookName: string, renterName: string, days: number) {
    const book = this.getBook(bookName);

    if (!book)
      return console.log(`We do not have the ${bookName}!`);

    if (this.hasStock(book))
      return console.log(`We do not have enough stock for ${bookName}!`);

    this.addToRented(book, renterName, days);
  }

  private getBook(bookName: string): BookDetails | undefined {
    return this.books.find(book => book.name === bookName);
  }

  private hasStock(book: BookDetails): boolean {
    return book.stock === 0;
  }

  private addToRented(book: BookDetails, renterName: string, days: number): void {
    this.rentedBooks.push({ book, renterName, days });

    console.log('Book rented!');
  }
}
