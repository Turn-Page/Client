const KakaoLoginBtn = ({ className }: { className?: string }) => {
  const handleLogin = () => {
    const queryString = new URLSearchParams({
      response_type: "code",
      client_id: `${process.env.REACT_APP_KAKAO_API_KEY}`,
      redirect_uri: `${process.env.REACT_APP_CLIENT_DOMAIN}/callback/oauth2/code/kakao`,
      state: generateRandomString(20),
    });
    window.location.href = `https://kauth.kakao.com/oauth/authorize?${queryString}`;
  };
  return (
    <>
      <img
        className={className}
        src={`${process.env.PUBLIC_URL}/assets/kakaoBtn.png`}
        onClick={handleLogin}
        style={{ cursor: "pointer" }}
      />
    </>
  );
};

export default KakaoLoginBtn;

// 랜덤문자열 생성
function generateRandomString(length: number) {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let randomString = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    randomString += charset[randomIndex];
  }
  return randomString;
}
