import { useRecoilValue } from "recoil";
import * as style from "./styles";
import { IFriendItemProps } from "./types";
import { AiOutlineUserDelete } from "react-icons/ai";
import { accessTokenState } from "../../../../recoil/accessTokenState";
import { apiDeleteUnfollow } from "../../../../apis/myPage/apiDeleteUnfollow";
const FriendItem = ({
  img,
  name,
  mode,
  followId,
  refetchFollowingList,
}: IFriendItemProps) => {
  const accessToken = useRecoilValue(accessTokenState);

  const handleUnfollow = () => {
    window.confirm(`${name}님을 언팔로우 하시겠습니까?`) &&
      apiDeleteUnfollow(accessToken as string, followId)
        .then(() => {
          alert("성공적으로 언팔로우 하였습니다.");
          refetchFollowingList();
        })
        .catch((err) =>
          err.response.status === 404
            ? alert("팔로우하고 있지 않은 회원입니다.")
            : alert("잘못된 접근입니다.")
        );
  };

  return (
    <style.Container>
      <div>
        <img src={img} className="profile-img" />
      </div>
      <div className="name">{name}</div>
      {mode === "following" && (
        <AiOutlineUserDelete
          size={30}
          style={{ cursor: "pointer" }}
          onClick={handleUnfollow}
        />
      )}
    </style.Container>
  );
};

export default FriendItem;
