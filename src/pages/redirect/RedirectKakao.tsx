import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { apiGetKakaoLoginToken } from "../../apis/login/apiGetKakaoLoginToken";
import { accessTokenState } from "../../recoil/accessTokenState";
import { useSetRecoilState } from "recoil";

// 1. 쿼리스트링에서 인가코드 받아와서 백엔드로 넘기기
// 2. 백엔드에서 토큰 받아와서 localstorage에 저장한 후 페이지 이동

const RedirectKakao = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const setAccessToken = useSetRecoilState(accessTokenState);

  const authCode = searchParams.get("code");
  const authState = searchParams.get("state");

  useEffect(() => {
    apiGetKakaoLoginToken(authCode as string, authState as string).then(
      (data) => {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        setAccessToken(data.accessToken);

        // 로그인하기 직전 페이지로 이동
        const prePagePath = localStorage.getItem("prePagePath") || "/";
        navigate(prePagePath);
      }
    );
  }, []);
  return <>로그인 중..</>;
};

export default RedirectKakao;
