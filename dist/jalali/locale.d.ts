declare const locale: {
    name: string;
    weekdays: string[];
    weekdaysShort: string[];
    weekdaysMin: string[];
    weekStart: number;
    months: string[];
    monthsShort: string[];
    ordinal: (n: any) => any;
    formats: {
        LT: string;
        LTS: string;
        L: string;
        LL: string;
        LLL: string;
        LLLL: string;
    };
    relativeTime: {
        future: string;
        past: string;
        s: string;
        m: string;
        mm: string;
        h: string;
        hh: string;
        d: string;
        dd: string;
        M: string;
        MM: string;
        y: string;
        yy: string;
    };
};
export default locale;
//# sourceMappingURL=locale.d.ts.map