import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  return (
    <div className="App">
      <Header />

      {/* Header 아래에서 부터 스크롤을 적용하기 위한 div */}
      <div className="content">
        <Outlet />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </div>
  );
}

export default App;
