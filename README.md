[![npm (scoped with tag)](https://img.shields.io/npm/v/antd-jalali/latest.svg?style=flat-square)](https://npmjs.com/package/antd-jalali)
[![npm](https://img.shields.io/npm/dt/antd-jalali.svg?style=flat-square)](https://npmjs.com/package/antd-jalali)

# Ant-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs) and [jalaliday](https://github.com/alibaba-aero/jalaliday)

## Demo
[https://saeedrahimi.github.io/antd-jalali/](https://saeedrahimi.github.io/antd-jalali/)

### Next.js example
Repo: https://github.com/saeedrahimi/nextjs-antd-jalali-example
Live Demo: https://nextjs-antd-jalali-example.vercel.app/

## Installation
```
npm i antd-jalali
```

## Usage

```ts
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener } from "antd-jalali";
import fa_IR from "antd/lib/locale/fa_IR";
import en_US from "antd/lib/locale/en_US";
import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
    <div className="App">
        Gregorian: <DatePicker />
        <br />
        <br />
        <ConfigProvider locale={fa_IR}  direction="rtl">
          <JalaliLocaleListener/>
           Jalali: <DatePickerJalali />
           Jalali RangePicker: <DatePickerJalali.RangePicker />
           <br />
           <br />
           <Calendar />
        </ConfigProvider>
    </div>,
  document.getElementById("root")
);
```
### How to set value  
You should pass dayjs object with [jalali calendar](https://github.com/alibaba-aero/jalaliday)

```jsx
import dayjs from 'dayjs'
import { DatePicker as DatePickerJalali, Calendar as CalendarJalali, useJalaliLocaleListener } from "antd-jalali";

// You should call this hook in child component of <ConfigProvider>
// You can also use component helper for this hook <JalaliLocaleListener> 
useJalaliLocaleListener();

// If you want to all new instanses of dayjs use jalali calendar (no matter what is the locale), 
// you can set default calendar for dayjs and remove useJalaliLocaleListener hook.
dayjs.calendar('jalali');

const date = dayjs("1399-01-01", {jalali:true});

<DatePickerJalali defaultValue={date}/>
<CalendarJalali  value={date}/>
```
also you can create a jalali date without changing default calendar

```js
const date = dayjs()
const jalaliDate = date.calendar('jalali')
```

You can read more information about daysjs jalali on [jalaliday repo](https://github.com/alibaba-aero/jalaliday).
