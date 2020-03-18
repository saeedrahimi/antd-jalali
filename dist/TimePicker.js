var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import DatePicker from './DatePicker';
var TimePicker = React.forwardRef(function (props, ref) {
    return React.createElement(DatePicker, __assign({}, props, { picker: "time", mode: undefined, ref: ref }));
});
TimePicker.displayName = 'TimePicker';
export default TimePicker;
