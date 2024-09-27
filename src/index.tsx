import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme/theme";
import GlobalStyle from "./theme/GlobalStyle";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from "./routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // 브라우저가 다시 포커스 될 때 모든 api를 재호출 하는 것을 방지 (서버비용 절감 위함)
      refetchOnWindowFocus: false,
    },
  },
});

root.render(
  <QueryClientProvider client={queryClient}>
    {/*  아직 theme 쓸 줄 모르므로 light로 고정하고 추후에 수정할 것 */}
    <ThemeProvider theme={lightTheme}>
      <RecoilRoot>
        <GlobalStyle />
        <RouterProvider router={router} />
      </RecoilRoot>
    </ThemeProvider>
  </QueryClientProvider>
);
