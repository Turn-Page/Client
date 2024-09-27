import { useRecoilValue } from "recoil";
import * as Style from "./styles";
import { useQuery } from "@tanstack/react-query";
import { accessTokenState } from "../../../recoil/accessTokenState";
import { apiGetUserInfo } from "../../../apis/myPage/apiGetUserInfo";
import { IUserInfo } from "../../../apis/myPage/types";
import PointCharge from "../../PointCharge/PointCharge";

const Profile = () => {
  const accessToken = useRecoilValue(accessTokenState);

  const { data: userInfo, refetch } = useQuery<IUserInfo>({
    queryKey: ["userInfo", accessToken],
    queryFn: () => apiGetUserInfo(accessToken as string),
  });

  return (
    <Style.Container>
      {/* <button className="profile-btn edit-profile-btn">프로필 수정</button> */}
      <Style.Col1>
        <img src={userInfo?.profileImage} />
        {/* <button className="profile-btn edit-img-btn">프로필 이미지 변경</buttn> */}
      </Style.Col1>
      <Style.Col2>
        <h1>{userInfo?.name}</h1>
        <h2>{userInfo?.email}</h2>
        <h2>
          내 포인트 :{" "}
          {userInfo?.point
            .toString()
            .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")}{" "}
          P
        </h2>
        <PointCharge refetch={refetch} />
      </Style.Col2>
      <Style.Col3>
        <h1>
          내 독서 기록 수<span>{userInfo?.reportCount}</span>
        </h1>
        <h1>
          내 판매 도서 수<span>{userInfo?.saleCount}</span>
        </h1>
        <h1>
          내 구매 도서 수<span>{userInfo?.purchaseCount}</span>
        </h1>
      </Style.Col3>
    </Style.Container>
  );
};

export default Profile;
