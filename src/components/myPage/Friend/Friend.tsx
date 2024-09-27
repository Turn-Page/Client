import { useState } from "react";
import FriendItem from "./FriendItem/FriendItem";
import * as Style from "./styles";
import AddFriendModal from "./AddFriendModal/AddFriendModal";
import { useRecoilValue } from "recoil";
import { accessTokenState } from "../../../recoil/accessTokenState";
import { apiGetFollowList } from "../../../apis/myPage/apiGetFollowList";
import { useQuery } from "@tanstack/react-query";

const Friend = () => {
  const [modalToggle, setModalToggle] = useState(false);
  const [followTab, setFollowTab] = useState<"following" | "follower">(
    "following"
  );

  const accessToken = useRecoilValue(accessTokenState);

  const { data: followList, refetch: refetchFollowingList } = useQuery({
    queryKey: ["followList", accessToken],
    queryFn: () => apiGetFollowList(accessToken as string),
  });

  return (
    <Style.Container>
      <AddFriendModal
        modalToggle={modalToggle}
        setModalToggle={setModalToggle}
        refetchFollowingList={refetchFollowingList}
      />

      <Style.Header>
        <Style.FollowTabWrap isActive={followTab}>
          <div
            className="following-btn"
            onClick={() => setFollowTab("following")}
          >
            팔로잉 <span>{followList?.followingCount}명</span>
          </div>
          <div
            className="follower-btn"
            onClick={() => setFollowTab("follower")}
          >
            팔로워 <span>{followList?.followerCount}명</span>
          </div>
        </Style.FollowTabWrap>

        <button className="add-friend" onClick={() => setModalToggle(true)}>
          팔로우
        </button>
      </Style.Header>
      <Style.List>
        {followTab === "following" &&
          followList?.followingInfoList.map((it) => (
            <FriendItem
              key={it.followId}
              img={it.memberInfo.profileImage}
              name={it.memberInfo.name}
              followId={it.followId}
              mode="following"
              refetchFollowingList={refetchFollowingList}
            />
          ))}
        {followTab === "follower" &&
          followList?.followerInfoList.map((it) => (
            <FriendItem
              key={it.followId}
              img={it.memberInfo.profileImage}
              name={it.memberInfo.name}
              followId={it.followId}
              mode="follower"
              refetchFollowingList={refetchFollowingList}
            />
          ))}
      </Style.List>
    </Style.Container>
  );
};

export default Friend;
