export const MONTHS_IN_YEAR = 12;
export const DAYS_IN_YEAR = 365;
export const DAYS_IN_LEAP_YEAR = 366;
export const DAYS_IN_WEEK = 7;
export const HOURS_IN_DAY = 24;
export const MINUTES_IN_HOUR = 60;
export const SECONDS_IN_MINUTE = 60;
export const MILLISECONDS_IN_SECOND = 1000;
export const MICROSECONDS_IN_MILLISECOND = 1000;
export const NANOSECONDS_IN_MICROSECOND = 1000;

export enum Days {
  Unknown = 0,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

export function Days_daysToIdx(day: Days): number;
export function Days_idxToDays(idx: number): Days;
export function Days_nextDays(days: Days): Days;
export function Days_prevDays(days: Days): Days;
export function Days_nextDaysIdx(idx: number): number;
export function Days_prevDaysIdx(idx: number): number;
export function Days_daysToName(days: Days): string;
export function Days_nameToDays(value: string): Days;

export enum Months {
  Unknown = 0,
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export function Months_monthsToIdx(months: Months): number;
export function Months_idxToMonths(value: number): Months;
export function Months_nextMonths(months: Months): Months;
export function Months_prevMonths(months: Months): Months;
export function Months_nextMonthsIdx(idx: number): number;
export function Months_prevMonthsIdx(idx: number): number;
export function Months_monthsToName(month: Months): string;
export function Months_nameToMonths(value: string): Months;

export enum TimeZone {
  UTC = 0,
  Local,
}

export class Timedelta {
  public years: number;
  public months: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  public milliseconds: number;
  public microseconds: number;
  public timezone: TimeZone;

  constructor(
    years: number,
    months: Months,
    days: Days,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
    microseconds: number,
    timezone: TimeZone
  );
}

export const timedeltaZero: Timedelta;
export const timedeltaZeroZulu: Timedelta;

export interface DateTimePreload {
  timedelta: Timedelta;
  timestamp: number;
  weekday: number;
  microseconds: number;
  timezone: TimeZone;
}

export const TIME_DELTA_SEEDS: DateTimePreload[];

export function Timedelta_copy(timedelta: Timedelta): Timedelta;

export function Timedelta_isLeapYear(years: number): boolean;

export function Timedelta_daysInYears(years: number): number;
export function Timedelta_daysInFebruary(years: number): number;
export function Timedelta_daysInMonths(years: number, months: Months): number;

export function Timedelta_millisInSeconds(seconds: number): number;
export function Timedelta_millisInMinutes(minutes: number): number;
export function Timedelta_millisInHours(hours: number): number;
export function Timedelta_millisInDays(days: number): number;

export function Timedelta_equals(a: Timedelta, b: Timedelta): boolean;
export function Timedelta_lessThan(a: Timedelta, b: Timedelta): boolean;
export function Timedelta_lessThanEquals(a: Timedelta, b: Timedelta): boolean;
export function Timedelta_greaterThan(a: Timedelta, b: Timedelta): boolean;
export function Timedelta_greaterThanEquals(a: Timedelta, b: Timedelta): boolean;

export function Timedelta_daysCounterInYears(timedelta: Timedelta): number;
export function Timedelta_datetimeNormInYears(timedelta: Timedelta): void;

export function Timedelta_addYears(timedelta: Timedelta, years: number): void;
export function Timedelta_addMonths(timedelta: Timedelta, months: number): void;
export function Timedelta_dateNormInYears(timedelta: Timedelta): void;
export function Timedelta_timeNormInYears(timedelta: Timedelta): void;
export function Timedelta_addDays(timedelta: Timedelta, days: number): void;
export function Timedelta_addHours(timedelta: Timedelta, hours: number): void;
export function Timedelta_addMinutes(timedelta: Timedelta, minutes: number): void;
export function Timedelta_addSeconds(timedelta: Timedelta, seconds: number): void;
export function Timedelta_addMilliseconds(timedelta: Timedelta, milliseconds: number): void;
export function Timedelta_addMicroseconds(timedelta: Timedelta, microseconds: number): void;

export function Timedelta_preload(timedelta: Timedelta): DateTimePreload;
export function Timedelta_addition(currentTimedelta: Timedelta, timedelta: Timedelta): void;
export function Timedelta_subtraction(currentTimedelta: Timedelta, timedelta: Timedelta): void;

export interface DateTimeImpl {
  weekday(): number;
  isLeapYear(year: number): boolean;
  equals(timedelta: Timedelta): boolean;
  lessThan(timedelta: Timedelta): boolean;
  lessThanEquals(timedelta: Timedelta): boolean;
  greaterThan(timedelta: Timedelta): boolean;
  greaterThanEquals(timedelta: Timedelta): boolean;
  getTimedelta(): Timedelta;
  getYears(): number;
  getMonths(): number;
  getDays(): number;
  getHours(): number;
  getMinutes(): number;
  getSeconds(): number;
  getMicroseconds(): number;
  addTimedelta(timedelta: Timedelta): void;
  addYears(years: number): void;
  addMonths(months: number): void;
  addDays(days: number): void;
  addHours(hours: number): void;
  addMinutes(minutes: number): void;
  addSeconds(seconds: number): void;
  addMicroseconds(microseconds: number): void;
  subTimedelta(timedelta: Timedelta): void;
  toTimestamp(): number;
  copy(): DateTimeImpl;
}

export class DateTime implements DateTimeImpl {
  private datetimeCache: DateTimePreload;
  private timedelta: Timedelta;
  constructor(timedelta: Timedelta);
  preload(): void;
  weekday(): number;
  isLeapYear(year: number): boolean;
  equals(timedelta: Timedelta): boolean;
  lessThan(timedelta: Timedelta): boolean;
  lessThanEquals(timedelta: Timedelta): boolean;
  greaterThan(timedelta: Timedelta): boolean;
  greaterThanEquals(timedelta: Timedelta): boolean;
  getTimedelta(): Timedelta;
  getYears(): number;
  getMonths(): number;
  getDays(): number;
  getHours(): number;
  getMinutes(): number;
  getSeconds(): number;
  getMicroseconds(): number;
  addTimedelta(timedelta: Timedelta): void;
  addYears(years: number): void;
  addMonths(months: number): void;
  addDays(days: number): void;
  addHours(hours: number): void;
  addMinutes(minutes: number): void;
  addSeconds(seconds: number): void;
  addMicroseconds(microseconds: number): void;
  subTimedelta(timedelta: Timedelta): void;
  toTimestamp(): number;
  copy(): DateTimeImpl;
}
