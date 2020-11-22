import { Dayjs } from 'dayjs';
import * as React from 'react';
import { PickerTimeProps } from 'antd/lib/date-picker/generatePicker';
import { Omit } from 'antd/lib/_util/type';
export interface TimePickerProps extends Omit<PickerTimeProps<Dayjs>, 'picker'> {
}
declare const TimePicker: React.ForwardRefExoticComponent<TimePickerProps & React.RefAttributes<any>>;
export default TimePicker;
//# sourceMappingURL=TimePicker.d.ts.map