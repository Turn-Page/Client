import { useEffect } from "react";
import * as Style from "./styles";
import { useLocation } from "react-router-dom";
import KakaoLoginBtn from "../../components/login/KakaoBtn/KakaoLoginBtn";
import GoogleLoginBtn from "../../components/login/GoogleBtn/GoogleLoginBtn";

const Login = () => {
  const _prePagePath = useLocation().state?.prePagePath;

  useEffect(() => {
    // 로그인 페이지로 이동하기 이전 페이지를 로컬스토리지에 저장
    localStorage.setItem("prePagePath", _prePagePath);
  }, []);

  return (
    <Style.Container>
      <Style.ColContainer>
        <Style.Row>
          <img src={`${process.env.PUBLIC_URL}/assets/loginLogo.png`} />
          <Style.btnWrap>
            <KakaoLoginBtn />
            <GoogleLoginBtn />
          </Style.btnWrap>
        </Style.Row>
      </Style.ColContainer>
    </Style.Container>
  );
};

export default Login;
