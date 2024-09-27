export interface IReportDetail {
  reportId: number;
  title: string;
  content: string;
  startDate: string;
  endDate: string;
  createdAt: string; // 독후감 등록 날짜
  isMine: boolean;

  bookInfo: {
    // 독후감 대상 독서에 관한 정보
    bookId: number;
    title: string;
    author: string;
    cover: string;
    publisher: string;
    publicationDate: string; // Date 타입
    rank: number;
    star: number;
  };

  memberInfo: {
    // 작성자 정보
    memberId: number;
    name: string;
    profileImage: string;
  };
}
