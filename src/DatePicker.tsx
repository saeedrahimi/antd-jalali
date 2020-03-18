import { Dayjs } from 'dayjs';
import {generateJalaliConfig} from './jalali';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';

const DatePicker = generatePicker<Dayjs>(generateJalaliConfig);

export default DatePicker;
