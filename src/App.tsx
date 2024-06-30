import React from "react";
import { DatePicker, Space, Radio, ConfigProvider, Row, Col } from "antd";
import type { DirectionType } from "antd/lib/config-provider";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import { DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener } from "./index.ts";
import "./index.css";
import { RadioChangeEvent } from "antd/lib";

const App = () => {
  const [direction, setDirection] = React.useState<DirectionType>("rtl");
  const [locale, setLocale] = React.useState(fa_IR);

  const changeDirection = (e: RadioChangeEvent) => {
    const directionValue = e.target.value;
    setDirection(directionValue);
  };
  const changeLocale = (e: RadioChangeEvent) => {
    const localeValue = e.target.value;
    setLocale(localeValue);
  };

  return (
    <>
      <Row justify="center">
        <Col span={18}>
          <Space direction="vertical" size={12}>
            <h2> Ant-Design Jalali Date picker </h2>

            <Space direction="horizontal" size={12}>
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
              </div>
              <div style={{ marginBottom: 16 }}>
                <span style={{ marginRight: 16 }}>Change locale of components: </span>
                <Radio.Group defaultValue={locale} onChange={changeLocale}>
                  <Radio.Button key="en" value={en_US}>
                    EN
                  </Radio.Button>
                  <Radio.Button key="fa" value={fa_IR}>
                    FA_IR
                  </Radio.Button>
                </Radio.Group>
              </div>
            </Space>

            <ConfigProvider locale={locale} direction={direction}>
              <JalaliLocaleListener />
              <Space direction="vertical" size={12}>
                Gregorian: <DatePicker />
                Jalali: <DatePickerJalali direction="rtl" />
                Jalali RangePicker: <DatePickerJalali.RangePicker />
                <Calendar />
              </Space>
            </ConfigProvider>
          </Space>
        </Col>
      </Row>
    </>
  );
};

export default App;
