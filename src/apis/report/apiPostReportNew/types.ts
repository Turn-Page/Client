export interface IPostReportNew {
  title: string;
  content: string;
  startDate: string;
  endDate: string;
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
