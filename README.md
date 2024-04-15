
# Ant-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs) and [jalaliday](https://github.com/alibaba-aero/jalaliday)

#### Note:
antd-jalali-plus is a forked and upgraded version of [antd-jalali](https://www.npmjs.com/package/antd-jalali), which was a valuable tool but is no longer maintained.

#### Purpose:
The primary goal of antd-jalali-plus is to ensure that users who rely on the functionality of antd-jalali continue to have access to a reliable and supported solution with latest version of [Ant design](https://ant.design/). By taking over maintenance responsibilities, We are committed to providing timely updates, bug fixes, and improvements to enhance the overall usability and stability of the package.

## Ant version 5.x.x
```
npm i antd-jalali-plus@v1.4.x
```

## Ant version 4.x.x
```
npm i antd-jalali-plus@v1.3.x
```

## Installation
```
npm i antd-jalali-plus
```

## Usage

```ts
import React from "react";
import ReactDOM from "react-dom";
import { DatePicker, ConfigProvider } from "antd";
import { DatePicker as DatePickerJalali, Calendar, JalaliLocaleListener } from "antd-jalali-plus";
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
import { DatePicker as DatePickerJalali, Calendar as CalendarJalali, useJalaliLocaleListener } from "antd-jalali-plus";

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
