[![npm (scoped with tag)](https://img.shields.io/npm/v/antd-jalali/latest.svg?style=flat-square)](https://npmjs.com/package/antd-jalali)
[![npm](https://img.shields.io/npm/dt/antd-jalali.svg?style=flat-square)](https://npmjs.com/package/antd-jalali)

# Ant-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs) and [jalaliday](https://github.com/alibaba-aero/jalaliday)

## Demo
[Codesandbox](https://codesandbox.io/s/antd-jalali-demo-mymrq)

## Installation
```
npm i antd-jalali
```

## Usage

```ts
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali, Calendar } from "antd-jalali";
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
        <br />
        <br />
         <Calendar />
        </ConfigProvider>
    </div>,
  document.getElementById("root")
);
```