export interface BookDetails {
  name: string;
  stock: number;
}

export interface BookRented {
  book: BookDetails;
  renterName: string;
  days: number;
}