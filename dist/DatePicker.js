import { generateJalaliConfig } from './jalali';
import generatePicker from 'antd/es/date-picker/generatePicker';
import 'antd/es/date-picker/style/index';
var DatePicker = generatePicker(generateJalaliConfig);
export default DatePicker;
