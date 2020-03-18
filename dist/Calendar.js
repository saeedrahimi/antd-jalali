import { generateJalaliConfig } from './jalali';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import 'antd/es/calendar/style';
var Calendar = generateCalendar(generateJalaliConfig);
export default Calendar;
