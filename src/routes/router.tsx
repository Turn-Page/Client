import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import BestSeller from "../pages/BestSeller/BestSeller";
import Sell from "../pages/Sell/BestSeller";
import BookDetail from "../pages/BookDetail/BookDetail";
import RedirectGoogle from "../pages/redirect/RedirectGoogle";
import RedirectKakao from "../pages/redirect/RedirectKakao";

const router = createBrowserRouter([
  {
    // 홈으로 접근하면 App과 Home을 보여줄것임, App에 Header 넣을것
    path: "",
    element: <App />,

    // outlet으로 Home부터 나머지 페이지 전부 보여주기
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "callback/oauth2/code/kakao",
        element: <RedirectKakao />,
      },
      {
        path: "callback/oauth2/code/google",
        element: <RedirectGoogle />,
      },
      {
        path: "best",
        element: <BestSeller />,
      },
      {
        path: "sell",
        element: <Sell />,
      },
      {
        path: "bookDetail/:bookId",
        element: <BookDetail />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;