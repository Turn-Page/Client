import { useTheme } from "styled-components";
import * as Style from "./styles";
import { ConfigProvider, Segmented } from "antd";
import { MdMenuBook } from "react-icons/md";
import { IoMdPaper } from "react-icons/io";
import { IoCartSharp } from "react-icons/io5";

const MyPageTabBtn = ({ setTab }: IMyPageTabBtnProps) => {
  const theme = useTheme();
  return (
    <Style.Container>
      <ConfigProvider
        theme={{
          components: {
            Segmented: {
              itemColor: theme.color.text.text1,
              itemSelectedBg: theme.color.btn.bg2,
              itemSelectedColor: theme.color.btn.text2,
            },
          },
        }}
      >
        <Segmented
          defaultValue="myReport"
          options={[
            {
              label: (
                <div className="tab-box">
                  <MdMenuBook className="icon" />
                  <span>내 독후감</span>
                </div>
              ),
              value: "myReport",
            },
            {
              label: (
                <div className="tab-box">
                  <IoMdPaper className="icon" />
                  <span>내 판매글</span>
                </div>
              ),
              value: "mySell",
            },
            {
              label: (
                <div className="tab-box">
                  <IoCartSharp className="icon" />
                  <span>구매내역</span>
                </div>
              ),
              value: "myOrder",
            },
          ]}
          onChange={(value: "myReport" | "mySell" | "myOrder") => {
            setTab(value);
          }}
        />
      </ConfigProvider>
    </Style.Container>
  );
};

export default MyPageTabBtn;

interface IMyPageTabBtnProps {
  setTab: React.Dispatch<
    React.SetStateAction<"myReport" | "mySell" | "myOrder">
  >;
}
