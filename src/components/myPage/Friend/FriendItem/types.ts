import { RefetchOptions, QueryObserverResult } from "@tanstack/react-query";
import { IFollowList } from "../../../../apis/myPage/types";

export interface IFriendItemProps {
  img: string;
  name: string;
  mode: "following" | "follower";
  followId: number;
  refetchFollowingList: (
    options?: RefetchOptions | undefined
  ) => Promise<QueryObserverResult<IFollowList, Error>>;
}
