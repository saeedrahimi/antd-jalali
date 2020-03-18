# And-Design Jalali DatePicker
A wrapper for ant-design date picker and calendar to support Jalali calendar type with [Day.js](https://github.com/iamkun/dayjs)
## Installation
```
npm i antd-jalali
```

## Usage

```diff
- import { DatePicker, Calendar } from 'antd';

+ import { DatePicker, Calendar } from 'antd-jalali';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;
<div>
    <DatePicker onChange={onChange} />
    <br />
    <MonthPicker onChange={onChange} placeholder="Select month" />
    <br />
    <RangePicker onChange={onChange} />
    <br />
    <WeekPicker onChange={onChange} placeholder="Select week" />
    </div>
    <Calendar onPanelChange={onPanelChange} />
</div>
```