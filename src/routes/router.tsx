import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/Login/Login";
import BestSeller from "../pages/BestSeller/BestSeller";
import BookDetail from "../pages/BookDetail/BookDetail";
import RedirectGoogle from "../pages/redirect/RedirectGoogle";
import RedirectKakao from "../pages/redirect/RedirectKakao";
import MyPage from "../pages/MyPage/MyPage";
import ReportNew from "../pages/report/ReportNew/ReportNew";
import SellNew from "../pages/sell/SellNew/SellNew";
import ReportDetail from "../pages/report/ReportDetail/ReportDetail";
import SellDetail from "../pages/sell/SellDetail/SellDetail";
import ReportList from "../pages/report/ReportList/ReportList";
import SellList from "../pages/sell/SellList/SellList";
import ReportEdit from "../pages/report/ReportEdit/ReportEdit";
import SellEdit from "../pages/sell/SellEdit/SellEdit";
import Order from "../pages/Order/Order";

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
        element: <SellList />,
      },
      {
        path: "sell/new",
        element: <SellNew />,
      },
      {
        path: "sell/edit",
        element: <SellEdit />,
      },
      {
        path: "sell/detail/:sellId",
        element: <SellDetail />,
      },
      {
        path: "report",
        element: <ReportList />,
      },
      {
        path: "report/new",
        element: <ReportNew />,
      },
      {
        path: "report/edit",
        element: <ReportEdit />,
      },
      {
        path: "report/detail/:reportId",
        element: <ReportDetail />,
      },
      {
        path: "book/:bookId",
        element: <BookDetail />,
      },

      {
        path: "mypage",
        element: <MyPage />,
      },

      {
        path: "order",
        element: <Order />,
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
