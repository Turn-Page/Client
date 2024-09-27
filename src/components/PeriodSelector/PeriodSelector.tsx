import styled, { useTheme } from "styled-components";
import {
  UseFormClearErrors,
  UseFormSetError,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";
import { ConfigProvider, DatePicker } from "antd";
import dayjs from "dayjs";
import { IReportNewForm } from "../../pages/report/ReportNew/type";
import { IReportEditForm } from "../../pages/report/ReportEdit/type";

const PeriodSelector = ({
  setValue,
  clearErrors,
  setError,
  watch,
}: IPeriodSelectorProps) => {
  const { RangePicker } = DatePicker;

  const theme = useTheme();

  const handleChange = (_: any, dateStrings: [string, string]) => {
    // 날짜를 선택하지 않았다면 오류를 넣어줌
    if (dateStrings[0] === "" && dateStrings[1] === "")
      setError("startDate", { message: "* 독서 기간 미입력" });
    else {
      setValue("startDate", dateStrings[0]);
      setValue("endDate", dateStrings[1]);
      clearErrors("startDate");
    }
  };

  return (
    <Container>
      <label className="caption" htmlFor="period-selector">
        독서 기간
      </label>
      <ConfigProvider
        theme={{
          components: {
            DatePicker: {
              fontFamily: theme.fontFamily.light,
              colorBgContainer: theme.color.bg.bg2,
              activeBorderColor: theme.color.bg.bg2,
              colorPrimary: theme.color.icon.icon2,
              hoverBorderColor: theme.color.icon.icon2,
              activeShadow: `0 0 5px ${theme.color.icon.icon2}`,
              cellActiveWithRangeBg: theme.color.bg.bg3,
              colorTextPlaceholder: theme.color.text.text3,
              borderRadius: 10,
            },
          },
        }}
      >
        <RangePicker
          maxDate={dayjs()}
          placeholder={["읽기 시작한 날", "다 읽은 날"]}
          className="period-selector"
          id="period-selector"
          onChange={handleChange}
        />
      </ConfigProvider>
    </Container>
  );
};

export default PeriodSelector;

interface IPeriodSelectorProps {
  setValue: UseFormSetValue<IReportNewForm>;
  setError: UseFormSetError<IReportNewForm>;
  clearErrors: UseFormClearErrors<IReportNewForm>;
  watch: UseFormWatch<IReportEditForm>;
}

const Container = styled.div`
  position: relative;

  .caption {
    position: absolute;
    left: 10px;
    top: 6px;
    z-index: 3;
    font-size: 0.9rem;
    color: ${(p) => p.theme.color.text.text2};
  }

  .period-selector {
    width: 290px;
    padding-top: 24px;
    padding-bottom: 6px;

    input {
      text-align: center;
      cursor: pointer;
    }
  }
`;
