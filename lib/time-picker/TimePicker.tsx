import { Dayjs } from "dayjs";
import * as React from "react";
import DatePicker from "../date-picker/DatePicker";
import { PickerTimeProps } from "antd/lib/date-picker/generatePicker";
import { Omit } from "antd/lib/_util/type";

export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, "picker"> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
