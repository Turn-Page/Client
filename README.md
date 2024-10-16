# 📚 턴페이지 - 중고 도서 거래 플랫폼

- 중고 도서를 거래할 수 있는 서비스입니다.
- 독후감을 작성하고 팔로워들과 공유할 수 있습니다.
- 베스트셀러를 조회하고 마음에 드는 도서를 중고로 구매할 수 있습니다.

<br />
<br />
<br />

## 🛠️ 기술 스택

<div>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=TypeScript&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/ReactQuery-FF4154?style=for-the-badge&logo=react-query&logoColor=white">
<img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>

<div>
<img src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"> 
<img src="https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white">
<img src="https://img.shields.io/badge/Github%20Actions-2088FF?style=for-the-badge&logo=Github%20Actions&logoColor=white">
</div>

<br />
<br />
<br />

## 👥 팀원 구성



|                                                                 **FE**                                                                  |                                                                    **BE**                                                                    |                                                                     **BE**                                                                      |
| :-------------------------------------------------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------: |
|                                                               **이태혁**                                                                |                                                                  **김강연**                                                                  |                                                                   **김수민**                                                                    |
| [<img src="https://avatars.githubusercontent.com/u/102576089?v=4" height = "100" width = "100"> <br/> @thgee](https://github.com/thgee) | [<img src="https://avatars.githubusercontent.com/u/67828333?v=4"  height = "100" width = "100" > <br/> @bflykky](https://github.com/bflykky) | [<img src="https://avatars.githubusercontent.com/u/83461362?v=4"  height = "100" width = "100"> <br/> @tnals2384](https://github.com/tnals2384) |

</div>

<br />
<br />
<br />

## 📖 페이지별 기능





<br>


| 홈 화면 |
|----------|
| <img src="https://github.com/user-attachments/assets/95554519-3040-4117-bce1-9961bfa6dd44" width = "600" /> |


<br />

| 베스트셀러 |
| ---------------------------------- |
|  <img src="https://github.com/user-attachments/assets/e95a59a2-beb4-4403-a499-10f739d085a9" width = "600" />  |


<br />


| 마이 페이지 |
|----------------|
| <img src="https://github.com/user-attachments/assets/edf364f0-588e-477e-9bce-33283d7844e5" width = "600" />  |



<br />

| 도서 상세 페이지 |
| ---------------------------------- |
|  <img src="https://github.com/user-attachments/assets/8e5a05db-5b04-46ed-8311-801711717237" width = "600" />  |


<br />

| 도서 판매글 작성 |
| ---------------------------------- |
|  <img src="https://github.com/user-attachments/assets/d21296e3-1ec0-47f8-8c0b-2f838765d5e5" width = "600" />  |


<br />

| 독후감 작성 |
| ---------------------------------- |
|  <img src="https://github.com/user-attachments/assets/2ed56fae-d29f-44f2-a266-9886b8cc9fcc" width = "600" />  |



<br />
<br />
<br />

## 💭 프로젝트 주요 고려 사항, 알게 된 점

- React, TypeScript로 페이지가 많은 프로젝트를 처음 개발해보며 라우팅 개념에 대하여 학습했습니다.

- 소셜로그인을 구현해보며 로그인한 유저를 관리하는 방법에 대하여 학습했습니다.

- React-query 를 사용하여 같은 데이터를 다시 로딩하는 것을 캐싱하였고, 서버 부하를 줄이는 동시에 렌더링 속도를 증가시켰습니다.

- 독후감 작성 등과 같이 입력 폼이 많은 페이지에서 React-hook-form 을 사용하여 입력 상태값을 관리하였습니다.

- 도서 검색 과정에서 검색어를 입력할 때 마다 API가 과도하게 호출되어 서버에 가해지는 부하를 줄이기 위해 Debounce 를 사용했습니다. 이 과정에서 Debounce 와 Throttle 의 개념을 공부하였습니다.
