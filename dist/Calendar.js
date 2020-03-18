import { generateJalaliConfig } from './jalali';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
var Calendar = generateCalendar(generateJalaliConfig);
export default Calendar;
