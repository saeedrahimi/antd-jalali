import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "./index.css";
import {
  DatePicker, Space,
  Radio, ConfigProvider
} from "antd";
import fa_IR from 'antd/lib/locale/fa_IR';
import en_US from 'antd/lib/locale/en_US';
import { DatePicker as DatePickerJalali, Calendar } from "./dist/index";

const { RangePicker } = DatePicker;

const App = () => {
  const [direction, setDirection] = React.useState("rtl");
  const [locale, setLocale] = React.useState(fa_IR);

  const changeDirection = e => {
    const directionValue = e.target.value;
    setDirection(directionValue);
  };
  const changeLocale = e => {
    const localeValue = e.target.value;
    setLocale(localeValue);
  };
  function onOk(value) {
    console.log("onOk: ", value);
  }

  return (<>
    <Space direction="vertical" size={12}>
      <div style={{ marginBottom: 16 }}>
        <span style={{ marginRight: 16 }}>Change direction of components: </span>
        <Radio.Group defaultValue={direction} onChange={changeDirection}>
          <Radio.Button key="ltr" value="ltr">
            LTR
            </Radio.Button>
          <Radio.Button key="rtl" value="rtl">
            RTL
            </Radio.Button>
        </Radio.Group>
        <Radio.Group defaultValue={locale} onChange={changeLocale}>
          <Radio.Button key="en" value={en_US}>
            EN
            </Radio.Button>
          <Radio.Button key="fa" value={fa_IR}>
            FA_IR
            </Radio.Button>
        </Radio.Group>
      </div>
      <ConfigProvider locale={locale} direction={direction}>
        <DatePicker />
        Jalali: <DatePickerJalali direction="rtl" />
        Jalali RangePicker: <DatePickerJalali.RangePicker />
        <br />
        <br />
        <Calendar />
      </ConfigProvider>
    </Space>
  </>)
}
ReactDOM.render(
  <App />,
  document.getElementById("container")
);
