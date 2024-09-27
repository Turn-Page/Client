import { ConfigProvider, FloatButton } from "antd";
import { FaPencilAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useTheme } from "styled-components";

const FloatingBtn = ({ path }: { path: string }) => {
  const theme = useTheme();
  const navigate = useNavigate();

  return (
    <ConfigProvider
      theme={{
        token: {
          colorBgBase: theme.color.icon.icon2,
          colorTextBase: "#fff",
          colorBorder: theme.color.icon.icon1,
        },
      }}
    >
      <FloatButton icon={<FaPencilAlt />} onClick={() => navigate(path)} />
    </ConfigProvider>
  );
};
export default FloatingBtn;
