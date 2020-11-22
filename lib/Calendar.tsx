import { Dayjs } from 'dayjs';
import {generateJalaliConfig} from './jalali';
import generateCalendar from 'antd/es/calendar/generateCalendar';
import 'antd/lib/calendar/style';

const Calendar = generateCalendar<Dayjs>(generateJalaliConfig);

export default Calendar;