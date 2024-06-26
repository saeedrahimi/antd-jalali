import { Dayjs } from "dayjs";
import * as React from "react";
import DatePicker from "../date-picker/DatePicker";
import type { PickerProps } from "antd/es/date-picker/generatePicker";

export interface TimePickerProps extends Omit<PickerProps<Dayjs>, "picker"> {}

const TimePicker = React.forwardRef<any, TimePickerProps>((props, ref) => {
  return <DatePicker {...props} picker="time" mode={undefined} ref={ref} />;
});

TimePicker.displayName = "TimePicker";

export default TimePicker;
