/**
 * datetime2-locale-en
 * Version: 2.0.3
 * License: MIT
 * https://github.com/datetime-js/datetime-locale
 */
;(function(root, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
    ? define(factory)
    : (root['datetime2-locale-en'] = factory());
}(this, function () {
  'use strict'

  return {
    formats: [
      'M/D/YYYY, h:mm:ss A'
    ],
    mondayFirst: false,
    monthNames: [
      ['January', 'January'],
      ['February', 'February'],
      ['March', 'March'],
      ['April', 'April'],
      ['May', 'May'],
      ['June', 'June'],
      ['July', 'July'],
      ['August', 'August'],
      ['September', 'September'],
      ['October', 'October'],
      ['November', 'November'],
      ['December', 'December']
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec'
    ],
    ordinal: ['st', 'nd', 'rd', 'th'],
    ordinal2: ['st', 'nd', 'rd', 'th'],
    weekDayNames: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    weekDayNamesShort: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat'
    ],
    weekDayNamesShortest: [
      'Su',
      'Mo',
      'Tu',
      'We',
      'Th',
      'Fr',
      'Sa'
    ]
  };
}));
