import { Dayjs } from 'dayjs';
import {generateJalaliConfig} from './jalali';
import generateCalendar from 'antd/lib/calendar/generateCalendar';
import 'antd/es/calendar/style';

const Calendar = generateCalendar<Dayjs>(generateJalaliConfig);

export default Calendar;