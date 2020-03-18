import { generateJalaliConfig } from './jalali';
import generatePicker from 'antd/lib/date-picker/generatePicker';
var DatePicker = generatePicker(generateJalaliConfig);
export default DatePicker;
