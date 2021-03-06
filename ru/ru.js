/**
 * datetime2-locale-ru
 * Version: 2.0.3
 * License: MIT
 * https://github.com/datetime-js/datetime-locale
 */
;(function(root, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (root['datetime2-locale-ru'] = factory());
}(this, function () {
  'use strict'

  return {
    formats: [
      'DD.MM.YYYY, HH:mm:ss'
    ],
    mondayFirst: true,
    monthNames: [
      ['январь', 'января'],
      ['февраль', 'февраля'],
      ['март', 'марта'],
      ['апрель', 'апреля'],
      ['май', 'мая'],
      ['июнь', 'июня'],
      ['июль', 'июля'],
      ['август', 'августа'],
      ['сентябрь', 'сентября'],
      ['октябрь', 'октября'],
      ['ноябрь', 'ноября'],
      ['декабрь', 'декабря']
    ],
    monthNamesShort: [
      'янв',
      'фев',
      'мар',
      'апр',
      'май',
      'июн',
      'июл',
      'авг',
      'сен',
      'окт',
      'ноя',
      'дек'
    ],
    ordinal: ['-е', '-е', '-е', '-е'],
    ordinal2: ['-я', '-я', '-я', '-я'],
    weekDayNames: [
      'понедельник',
      'вторник',
      'среда',
      'четверг',
      'пятница',
      'суббота',
      'воскресенье'
    ],
    weekDayNamesShort: [
      'пон',
      'втн',
      'срд',
      'чет',
      'пят',
      'суб',
      'вск'
    ],
    weekDayNamesShortest: [
      'пн',
      'вт',
      'ср',
      'чт',
      'пт',
      'сб',
      'вс'
    ]
  };
}));
