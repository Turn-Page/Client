export interface IPostSellNew {
  title: string;
  description: string;
  grade: string;
  price: number;
  bookInfo: {
    itemId: number;
    title: string;
    author: string;
    cover: string;
    isbn: string;
    publisher: string;
    publicationDate: string;
    description: string;
    rank: null;
  };
}
