import dayjs from "dayjs";
import jalaliday from "jalaliday";
import { noteOnce } from "rc-util/lib/warning";
import weekday from "dayjs/plugin/weekday";
import localeData from "dayjs/plugin/localeData";
import weekOfYear from "dayjs/plugin/weekOfYear";
import weekYear from "dayjs/plugin/weekYear";
import advancedFormat from "dayjs/plugin/advancedFormat";
import customParseFormat from "dayjs/plugin/customParseFormat";
import { default as faLocale } from "./locale";
dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
dayjs.extend(weekday);
dayjs.extend(localeData);
dayjs.extend(weekOfYear);
dayjs.extend(weekYear);
dayjs.extend(weekYear);
dayjs.extend(jalaliday);
dayjs.locale(faLocale, undefined, true);
var localeMap = {
    en_GB: "en-gb",
    en_US: "en",
    zh_CN: "zh-cn",
    zh_TW: "zh-tw",
    fa_IR: "fa"
};
var parseLocale = function (locale) {
    var mapLocale = localeMap[locale];
    return mapLocale || locale.split("_")[0];
};
var parseNoMatchNotice = function () {
    /* istanbul ignore next */
    noteOnce(false, "Not match any format. Please help to fire a issue about this.");
};
var generateJalaliConfig = {
    // get
    getNow: function () { return dayjs().calendar("jalali"); },
    getWeekDay: function (date) { return date.weekday(); },
    getYear: function (date) { return date.year(); },
    getMonth: function (date) { return date.month(); },
    getDate: function (date) { return date.date(); },
    getHour: function (date) { return date.hour(); },
    getMinute: function (date) { return date.minute(); },
    getSecond: function (date) { return date.second(); },
    // set
    addYear: function (date, diff) { return date.add(diff, "year"); },
    addMonth: function (date, diff) { return date.add(diff, "month"); },
    addDate: function (date, diff) { return date.add(diff, "day"); },
    setYear: function (date, year) { return date.year(year); },
    setMonth: function (date, month) { return date.month(month); },
    setDate: function (date, num) { return date.date(num); },
    setHour: function (date, hour) { return date.hour(hour); },
    setMinute: function (date, minute) { return date.minute(minute); },
    setSecond: function (date, second) { return date.second(second); },
    // Compare
    isAfter: function (date1, date2) { return date1.isAfter(date2); },
    isValidate: function (date) { return date.isValid(); },
    locale: {
        getWeekFirstDay: function (locale) {
            return dayjs()
                .locale(parseLocale(locale))
                .localeData()
                .firstDayOfWeek();
        },
        getWeek: function (locale, date) { return date.locale(parseLocale(locale)).week(); },
        getShortWeekDays: function (locale) {
            return dayjs()
                .locale(parseLocale(locale))
                .localeData()
                .weekdaysMin();
        },
        getShortMonths: function (locale) {
            return dayjs()
                .locale(parseLocale(locale))
                .localeData()
                .monthsShort();
        },
        format: function (locale, date, format) {
            return date.locale(parseLocale(locale)).format(format);
        },
        parse: function (locale, text, formats) {
            var localeStr = parseLocale(locale);
            for (var i = 0; i < formats.length; i += 1) {
                var format = formats[i];
                var formatText = text;
                if (format.includes("wo") || format.includes("Wo")) {
                    // parse Wo
                    var year = formatText.split("-")[0];
                    var weekStr = formatText.split("-")[1];
                    var firstWeek = dayjs(year, "YYYY")
                        .startOf("year")
                        .locale(localeStr);
                    for (var j = 0; j <= 52; j += 1) {
                        var nextWeek = firstWeek.add(j, "week");
                        if (nextWeek.format("Wo") === weekStr) {
                            return nextWeek;
                        }
                    }
                    parseNoMatchNotice();
                    return null;
                }
                var date = dayjs(formatText, format).locale(localeStr);
                if (date.isValid()) {
                    return date;
                }
            }
            parseNoMatchNotice();
            return null;
        }
    }
};
export default generateJalaliConfig;
