# And-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs) and [jalaliday](https://github.com/alibaba-aero/jalaliday)

## Installation
```
npm i antd-jalali
```

## Usage

```ts
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali } from "antd-jalali";
import fa_IR from "antd/lib/locale-provider/fa_IR";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
    <div className="App">
        Gregorian: <DatePicker />
        <br />
        <br />
        <ConfigProvider locale={fa_IR}  direction="rtl">
        Jalali: <DatePickerJalali />
        </ConfigProvider>
    </div>,
  document.getElementById("root")
);
```