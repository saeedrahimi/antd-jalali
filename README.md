## And-Design Jalali DatePicker

```
npm i antd-jalali
```

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