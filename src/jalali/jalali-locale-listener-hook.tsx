import React, { useContext } from "react";
import { ConfigProvider } from "antd";
import dayjs from "dayjs";
import jalaliday from "jalaliday";
import calendar from "dayjs/plugin/calendar";

/**
 * Subscribes to the ConfigProvider locale changes and updates the dayjs calendar based on current locale.
 */
const useJalaliLocaleListener = () => {
  dayjs.extend(calendar);
  dayjs.extend(jalaliday);
  const { locale } = useContext(ConfigProvider.ConfigContext);
  React.useEffect(() => {
    if (locale?.locale == "fa") {
      dayjs["calendar"]?.("jalali");
      console.log(locale);
    } else {
      dayjs["calendar"]?.(undefined);
    }
  }, [locale]);
};

export default useJalaliLocaleListener;
