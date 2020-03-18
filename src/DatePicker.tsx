import { Dayjs } from 'dayjs';
import {generateJalaliConfig} from './jalali';
import generatePicker from 'antd/lib/date-picker/generatePicker';

const DatePicker = generatePicker<Dayjs>(generateJalaliConfig);

export default DatePicker;
