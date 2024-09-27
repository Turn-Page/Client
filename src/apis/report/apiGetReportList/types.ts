export interface IReport {
  reportId: number;
  title: string;
  content: string;
  bookInfo: {
    bookId: number;
    title: string;
    subTitle: string;
    author: string;
    cover: string;
    publisher: string;
    publicationDate: string;
    rank: number;
    star: number;
  };
  memberInfo: {
    memberId: number;
    name: string;
    profileImage: string;
  };
  createdAt: string;
}
