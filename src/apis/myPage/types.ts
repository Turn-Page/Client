export interface IUserInfo {
  name: string;
  email: string;
  profileImage: string;
  inviteCode: string;
  point: number;
  reportCount: number;
  saleCount: number;
  purchaseCount: number;
}

export interface IMyOrder {
  orderId: number;
  orderNumber: string;
  salePostInfo: {
    salePostId: number;
    bookInfo: {
      bookId: number;
      title: string;
      subTitle: string;

      cover: string;
    };
    title: string;
    price: number;
    grade: string;
    isSold: boolean;
    createdAt: string;
  };
  orderedAt: string;
}
export interface IFollowList {
  followingInfoList: [
    {
      followId: number;
      memberInfo: {
        memberId: number;
        name: string;
        profileImage: string;
      };
    }
  ];
  followerInfoList: [
    {
      followId: number;
      memberInfo: {
        memberId: number;
        name: string;
        profileImage: string;
      };
    }
  ];
  followingCount: number;
  followerCount: number;
}
