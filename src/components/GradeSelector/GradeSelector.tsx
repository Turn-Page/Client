import React, { useEffect, useState } from "react";
import { DownOutlined, UserOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Button, ConfigProvider, Dropdown, message, Space } from "antd";
import { useTheme } from "styled-components";
import { ISellNewForm } from "../../pages/sell/SellNew/type";
import {
  UseFormClearErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

const GradeSelector = ({
  setValue,
  watch,
  clearErrors,
}: IGradeSelectorProps) => {
  const theme = useTheme();

  const items: MenuProps["items"] = [
    {
      label: "최상",
      key: "최상",
    },
    {
      label: "상",
      key: "상",
    },
    {
      label: "중",
      key: "중",
    },
    {
      label: "하",
      key: "하",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    setValue("grade", e.key);
    if (watch("grade") !== "-") clearErrors("grade");
  };
  const menuProps = {
    items,
    onClick: handleMenuClick,
  };

  return (
    <ConfigProvider
      theme={{
        components: {
          Dropdown: {
            colorText: theme.color.text.text2,
            fontFamily: theme.fontFamily.light,
            controlItemBgHover: theme.color.bg.bg3,
          },
          Button: {
            colorText:
              watch("grade") === "-"
                ? theme.color.text.text3
                : theme.color.text.text2,
            fontFamily: theme.fontFamily.medium,
            colorBgContainer: theme.color.bg.bg2,
            defaultHoverBorderColor: theme.color.bg.bg3,
            defaultHoverColor: theme.color.btn.bg2,
            defaultActiveColor: theme.color.btn.bg2,
            defaultActiveBorderColor: theme.color.bg.bg3,
            defaultBorderColor: theme.color.btn.bg1,
          },
        },
      }}
    >
      <Dropdown menu={menuProps} trigger={["click"]}>
        <Button style={{ height: 36, borderRadius: 10 }}>
          <Space>
            {watch("grade")}
            <DownOutlined />
          </Space>
        </Button>
      </Dropdown>
    </ConfigProvider>
  );
};

export default GradeSelector;

interface IGradeSelectorProps {
  setValue: UseFormSetValue<ISellNewForm>;
  watch: UseFormWatch<ISellNewForm>;
  clearErrors: UseFormClearErrors<ISellNewForm>;
}
