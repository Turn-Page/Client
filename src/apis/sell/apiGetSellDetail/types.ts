export interface ISellDetail {
  salePostId: number;
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
  title: string;
  price: number;
  grade: string;
  description: string;
  isSold: boolean;
  isMine: boolean;
  createdAt: string;
}
