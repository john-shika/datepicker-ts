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

// typedef int64_t duration_years_t;
// typedef int64_t duration_months_t;
// typedef int64_t duration_weekdays_t;
// typedef int64_t duration_days_t;
// typedef int64_t duration_hours_t;
// typedef int64_t duration_minutes_t;
// typedef int64_t duration_seconds_t;
// typedef int64_t duration_ms_t;
// typedef int64_t duration_us_t;
// typedef int64_t duration_ns_t;

/*
 * Weekday Indexes
 * mon tue wed thu fri sat sun
 * 0: Monday
 * 1: Tuesday
 * 2: Wednesday
 * 3: Thursday
 * 4: Friday
 * 5: Saturday
 * 6: Sunday
 * */

export enum Weekdays {
  Unknown = 0,
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

/*
 * Days of the Week (Weekday Indexes)
 * 1 Jan, 1970 start at Thursday
 * Python equivalent weekday index start at 3 (datetime)
 * Python `datetime.date(1970, 1, 4).weekday()` equals to 6 (Sunday)
 * Python `datetime.date(1970, 1, 5).weekday()` equals to 0 (Monday)
 * */

export function Weekdays_daysToIdx(day: Weekdays): number {
  switch (day) {
    case Weekdays.Monday:
      return 0;
    case Weekdays.Tuesday:
      return 1;
    case Weekdays.Wednesday:
      return 2;
    case Weekdays.Thursday:
      return 3;
    case Weekdays.Friday:
      return 4;
    case Weekdays.Saturday:
      return 5;
    case Weekdays.Sunday:
      return 6;
    default:
      throw new Error("Invalid Days");
  }
}

export function Weekdays_idxToDays(idx: number): Weekdays {
  switch (idx) {
    case 0:
      return Weekdays.Monday;
    case 1:
      return Weekdays.Tuesday;
    case 2:
      return Weekdays.Wednesday;
    case 3:
      return Weekdays.Thursday;
    case 4:
      return Weekdays.Friday;
    case 5:
      return Weekdays.Saturday;
    case 6:
      return Weekdays.Sunday;
    default:
      throw new Error("Invalid Days");
  }
}

export function Weekdays_nextDays(days: Weekdays): Weekdays {
  return Weekdays_idxToDays(Weekdays_nextDaysIdx(Weekdays_daysToIdx(days)));
}

export function Weekdays_prevDays(days: Weekdays): Weekdays {
  return Weekdays_idxToDays(Weekdays_prevDaysIdx(Weekdays_daysToIdx(days)));
}

/*
 * using this function consider the following
 * Days Indexes by Python equivalent (datetime) module
 * where:
 * - Monday is the first, start at 0
 * - Tuesday is the seconds, index at 1
 * - Sunday is the last, index at 6
 * */

export function Weekdays_nextDaysIdx(idx: number): number {
  let val = idx + 1;
  if (val > 6) val += -7;
  return val;
}

export function Weekdays_prevDaysIdx(idx: number): number {
  let val = idx - 1;
  if (val < 0) val += 7;
  return val;
}

export function Weekdays_daysToName(days: Weekdays): string {
  switch (days) {
    case Weekdays.Sunday:
      return "Sunday";
    case Weekdays.Monday:
      return "Monday";
    case Weekdays.Tuesday:
      return "Tuesday";
    case Weekdays.Wednesday:
      return "Wednesday";
    case Weekdays.Thursday:
      return "Thursday";
    case Weekdays.Friday:
      return "Friday";
    case Weekdays.Saturday:
      return "Saturday";
    default:
      return "Unknown";
  }
}

export function Weekdays_nameToDays(value: string): Weekdays {
  switch (value.toLowerCase()) {
    case "sun":
    case "sunday":
      return Weekdays.Sunday;
    case "mon":
    case "monday":
      return Weekdays.Monday;
    case "tue":
    case "tues":
    case "tuesday":
      return Weekdays.Tuesday;
    case "wed":
    case "wednes":
    case "wednesday":
      return Weekdays.Wednesday;
    case "thu":
    case "thurs":
    case "thursday":
      return Weekdays.Thursday;
    case "fri":
    case "friday":
      return Weekdays.Friday;
    case "sat":
    case "satur":
    case "saturday":
      return Weekdays.Saturday;
    default:
      return Weekdays.Unknown;
  }
}

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

export function Months_monthsToIdx(months: Months): number {
  switch (months) {
    case Months.January:
      return 1;
    case Months.February:
      return 2;
    case Months.March:
      return 3;
    case Months.April:
      return 4;
    case Months.May:
      return 5;
    case Months.June:
      return 6;
    case Months.July:
      return 7;
    case Months.August:
      return 8;
    case Months.September:
      return 9;
    case Months.October:
      return 10;
    case Months.November:
      return 11;
    case Months.December:
      return MONTHS_IN_YEAR;
    default:
      throw new Error("Invalid Months");
  }
}

export function Months_idxToMonths(value: number): Months {
  switch (value) {
    case 1:
      return Months.January;
    case 2:
      return Months.February;
    case 3:
      return Months.March;
    case 4:
      return Months.April;
    case 5:
      return Months.May;
    case 6:
      return Months.June;
    case 7:
      return Months.July;
    case 8:
      return Months.August;
    case 9:
      return Months.September;
    case 10:
      return Months.October;
    case 11:
      return Months.November;
    case MONTHS_IN_YEAR:
      return Months.December;
    default:
      return Months.Unknown;
  }
}

export function Months_nextMonths(months: Months): Months {
  return Months_idxToMonths(Months_nextMonths(Months_monthsToIdx(months)));
}

export function Months_prevMonths(months: Months): Months {
  return Months_idxToMonths(Months_prevMonthsIdx(Months_monthsToIdx(months)));
}

/*
 * using this function consider the following
 * Months with numerical values start at 1
 * where:
 * - January is the first, start at 1
 * - February is the seconds, value at 2
 * - December is the last, value at MONTHS_IN_YEAR
 * */

export function Months_nextMonthsIdx(idx: number): number {
  let val = idx + 1;
  if (val > MONTHS_IN_YEAR) val += -MONTHS_IN_YEAR;
  return val;
}

export function Months_prevMonthsIdx(idx: number): number {
  let val = idx - 1;
  if (val < 1) val += MONTHS_IN_YEAR;
  return val;
}

export function Months_monthsToName(month: Months): string {
  switch (month) {
    case Months.January:
      return "January";
    case Months.February:
      return "February";
    case Months.March:
      return "March";
    case Months.April:
      return "April";
    case Months.May:
      return "May";
    case Months.June:
      return "June";
    case Months.July:
      return "July";
    case Months.August:
      return "August";
    case Months.September:
      return "September";
    case Months.October:
      return "October";
    case Months.November:
      return "November";
    case Months.December:
      return "December";
    default:
      return "Unknown";
  }
}

export function Months_nameToMonths(value: string): Months {
  switch (value.toLowerCase()) {
    case "jan":
    case "january":
      return Months.January;
    case "feb":
    case "february":
      return Months.February;
    case "mar":
    case "march":
      return Months.March;
    case "apr":
    case "april":
      return Months.April;
    case "may":
      return Months.May;
    case "jun":
    case "june":
      return Months.June;
    case "jul":
    case "july":
      return Months.July;
    case "aug":
    case "august":
      return Months.August;
    case "sep":
    case "september":
      return Months.September;
    case "oct":
    case "october":
      return Months.October;
    case "nov":
    case "november":
      return Months.November;
    case "dec":
    case "december":
      return Months.December;
    default:
      return Months.Unknown;
  }
}

export enum TimeZone {
  UTC = 0,
  Local,
}

/*
 * Timestamp 0
 * Year: 1970
 * Month: January
 * Day: 1
 * Hour: 00
 * Minute: 00
 * Second: 00
 * Millisecond: 000
 * */

export interface TimedeltaImpl {
  years: number;
  months: number;
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
  microseconds: number;
  timezone: TimeZone;
}

export class Timedelta implements TimedeltaImpl {
  public years: number;
  public months: number;
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;
  public milliseconds: number;
  public microseconds: number;
  public timezone: TimeZone;

  // public weekday: number;

  constructor(
    years: number,
    months: Months,
    days: Weekdays,
    hours: number,
    minutes: number,
    seconds: number,
    milliseconds: number,
    microseconds: number,
    timezone: TimeZone = TimeZone.UTC
  ) {
    this.years = years;
    this.months = months;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
    this.microseconds = microseconds;
    this.timezone = timezone;
  }
}

/*
 * timedeltaZero
 * Start At 0
 * */

export const timedeltaZero: Timedelta = new Timedelta(0, 0, 0, 0, 0, 0, 0, 0, TimeZone.UTC);

/*
 * timedeltaZeroZulu
 * Start At 1 (Thursday), January 1970
 * */

export const timedeltaZeroZulu: Timedelta = new Timedelta(1970, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC);

/*
 * timedelta seeds
 * Start At 1970, End At 2020
 * Why not 2024? Invest! Keep my jobs! Evil Laugh (0_0 )
 * */

export interface DateTimePreload {
  timedelta: Timedelta;
  timestamp: number;
  weekday: number;
  microseconds: number;
  timezone: TimeZone;
}

export const TIMEDELTA_SEEDS: DateTimePreload[] = [
  {
    timedelta: new Timedelta(2020, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 1577836800000,
    weekday: 2,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
  {
    timedelta: new Timedelta(2010, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 1262304000000,
    weekday: 4,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
  {
    timedelta: new Timedelta(2000, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 946684800000,
    weekday: 5,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
  {
    timedelta: new Timedelta(1990, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 631152000000,
    weekday: 0,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
  {
    timedelta: new Timedelta(1980, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 315532800000,
    weekday: 1,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
  {
    timedelta: new Timedelta(1970, 1, 1, 0, 0, 0, 0, 0, TimeZone.UTC),
    timestamp: 0,
    weekday: 3,
    microseconds: 0,
    timezone: TimeZone.UTC,
  },
];

export function Timedelta_copy(timedelta: Timedelta): Timedelta {
  return new Timedelta(
    timedelta.years,
    timedelta.months,
    timedelta.days,
    timedelta.hours,
    timedelta.minutes,
    timedelta.seconds,
    timedelta.milliseconds,
    timedelta.microseconds,
    timedelta.timezone
  );
}

/*
 * Days in Months
 * January: 31 days
 * February: 28 days (29 days in a leap year)
 * March: 31 days
 * April: 30 days
 * May: 31 days
 * June: 30 days
 * July: 31 days
 * August: 31 days
 * September: 30 days
 * October: 31 days
 * November: 30 days
 * December: 31 days
 * */

export function Timedelta_isLeapYear(years: number): boolean {
  if (years % 4 !== 0) return false;
  if (years % 100 !== 0 || years % 400 === 0) return true;
  return false;
}

export function Timedelta_daysInYear(years: number): number {
  if (Timedelta_isLeapYear(years)) return DAYS_IN_LEAP_YEAR;
  return DAYS_IN_YEAR;
}

export function Timedelta_daysInFebruary(years: number): number {
  if (Timedelta_isLeapYear(years)) return 29;
  return 28;
}

export function Timedelta_daysInMonths(years: number, months: Months): number {
  switch (months) {
    case Months.January:
    case Months.March:
    case Months.May:
    case Months.July:
    case Months.August:
    case Months.October:
    case Months.December:
      return 31;
    case Months.February:
      return Timedelta_daysInFebruary(years);
    default:
      return 30;
  }
}

export function Timedelta_millisInSeconds(seconds: number): number {
  return seconds * MILLISECONDS_IN_SECOND;
}

export function Timedelta_millisInMinutes(minutes: number): number {
  return Timedelta_millisInSeconds(minutes * SECONDS_IN_MINUTE);
}

export function Timedelta_millisInHours(hours: number): number {
  return Timedelta_millisInMinutes(hours * MINUTES_IN_HOUR);
}

export function Timedelta_millisInDays(days: number): number {
  return Timedelta_millisInHours(days * HOURS_IN_DAY);
}

export function Timedelta_millisInMonth(years: number, months: number): number {
  const daysInMonths = Timedelta_daysInMonths(years, months);
  return Timedelta_millisInDays(daysInMonths);
}

export function Timedelta_millisInRangeMonths(years: number, months: number): number {
  let currYears = years;
  let currMonths = 1;
  let milliseconds = 0;
  for (let i = 0; i < months; i++) {
    const daysInMonths = Timedelta_daysInMonths(currYears, currMonths);
    currMonths = Months_nextMonthsIdx(months);
    if (currMonths === 1) currYears += 1;

    milliseconds += Timedelta_millisInDays(daysInMonths);
  }
  return milliseconds;
}

export function Timedelta_millisInYear(years: number): number {
  const daysInYear = Timedelta_daysInYear(years);
  return Timedelta_millisInDays(daysInYear);
}

export function Timedelta_equals(a: Timedelta, b: Timedelta): boolean {
  return (
    a.years === b.years &&
    a.months === b.months &&
    a.days === b.days &&
    a.hours === b.hours &&
    a.minutes === b.minutes &&
    a.seconds === b.seconds &&
    a.milliseconds === b.milliseconds &&
    a.microseconds === b.microseconds &&
    a.timezone === b.timezone
  );
}

export function Timedelta_lessThan(a: Timedelta, b: Timedelta): boolean {
  if (a.years < b.years) return true;
  if (a.years > b.years) return false;

  if (a.months < b.months) return true;
  if (a.months > b.months) return false;

  if (a.days < b.days) return true;
  if (a.days > b.days) return false;

  if (a.hours < b.hours) return true;
  if (a.hours > b.hours) return false;

  if (a.minutes < b.minutes) return true;
  if (a.minutes > b.minutes) return false;

  if (a.seconds < b.seconds) return true;
  if (a.seconds > b.seconds) return false;

  if (a.milliseconds < b.milliseconds) return true;
  if (a.milliseconds > b.milliseconds) return false;

  if (a.microseconds < b.microseconds) return true;
  if (a.microseconds > b.microseconds) return false;

  return false;
}

export function Timedelta_lessThanEquals(a: Timedelta, b: Timedelta): boolean {
  if (a.years < b.years) return true;
  if (a.years > b.years) return false;

  if (a.months < b.months) return true;
  if (a.months > b.months) return false;

  if (a.days < b.days) return true;
  if (a.days > b.days) return false;

  if (a.hours < b.hours) return true;
  if (a.hours > b.hours) return false;

  if (a.minutes < b.minutes) return true;
  if (a.minutes > b.minutes) return false;

  if (a.seconds < b.seconds) return true;
  if (a.seconds > b.seconds) return false;

  if (a.milliseconds < b.milliseconds) return true;
  if (a.milliseconds > b.milliseconds) return false;

  if (a.microseconds < b.microseconds) return true;
  if (a.microseconds > b.microseconds) return false;

  return true;
}

export function Timedelta_greaterThan(a: Timedelta, b: Timedelta): boolean {
  if (a.years > b.years) return true;
  if (a.years < b.years) return false;

  if (a.months > b.months) return true;
  if (a.months < b.months) return false;

  if (a.days > b.days) return true;
  if (a.days < b.days) return false;

  if (a.hours > b.hours) return true;
  if (a.hours < b.hours) return false;

  if (a.minutes > b.minutes) return true;
  if (a.minutes < b.minutes) return false;

  if (a.seconds > b.seconds) return true;
  if (a.seconds < b.seconds) return false;

  if (a.milliseconds > b.milliseconds) return true;
  if (a.milliseconds < b.milliseconds) return false;

  if (a.microseconds > b.microseconds) return true;
  if (a.microseconds < b.microseconds) return false;

  return false;
}

export function Timedelta_greaterThanEquals(a: Timedelta, b: Timedelta): boolean {
  if (a.years > b.years) return true;
  if (a.years < b.years) return false;

  if (a.months > b.months) return true;
  if (a.months < b.months) return false;

  if (a.days > b.days) return true;
  if (a.days < b.days) return false;

  if (a.hours > b.hours) return true;
  if (a.hours < b.hours) return false;

  if (a.minutes > b.minutes) return true;
  if (a.minutes < b.minutes) return false;

  if (a.seconds > b.seconds) return true;
  if (a.seconds < b.seconds) return false;

  if (a.milliseconds > b.milliseconds) return true;
  if (a.milliseconds < b.milliseconds) return false;

  if (a.microseconds > b.microseconds) return true;
  if (a.microseconds < b.microseconds) return false;

  return true;
}

/*
 * function `Timedelta_addYears`
 * addition years with existing current years in timedelta itself
 * @param timedelta Timedelta
 * @param years number
 * @return void
 * */

export function Timedelta_addYears(timedelta: Timedelta, years: number): void {
  if (years === 0) return;

  if (years < 0) {
    years = -years;

    for (let i = 0; i < years; i++) {
      let currentYears = timedelta.years;
      let prevYears = currentYears - 1;

      const daysInYears = Timedelta_daysInYear(prevYears);

      Timedelta_addDays(timedelta, -daysInYears);

      // bad performance, try using days in years instead of months in years
      // months in years same as days in months in years, loop nested
      // Timedelta_addMonths(timedelta, -MONTHS_IN_YEAR);
    }

    return;
  }

  for (let i = 0; i < years; i++) {
    let currentYears = timedelta.years;
    const daysInYears = Timedelta_daysInYear(currentYears);

    Timedelta_addDays(timedelta, daysInYears);

    // bad performance, try using days in years instead of months in years
    // months in years same as days in months in years, loop nested
    // Timedelta_addMonths(timedelta, MONTHS_IN_YEAR);
  }

  return;
}

/*
 * function `Timedelta_addMonths`
 * addition months with existing current months in timedelta itself
 * @param timedelta Timedelta
 * @param months number
 * @return void
 * */

export function Timedelta_addMonths(timedelta: Timedelta, months: number): void {
  if (months === 0) return;

  if (months < 0) {
    months = -months;

    for (let i = 0; i < months; i++) {
      let currentYears = timedelta.years;
      let currentMonths = timedelta.months;

      let prevYears = currentYears;
      let prevMonths = Months_prevMonthsIdx(currentMonths);
      if (prevMonths === MONTHS_IN_YEAR) prevYears += -1;

      let daysInMonths = Timedelta_daysInMonths(prevYears, prevMonths);
      Timedelta_addDays(timedelta, -daysInMonths);
    }

    return;
  }

  for (let i = 0; i < months; i++) {
    let currentYears = timedelta.years;
    let currentMonths = timedelta.months;

    const daysInMonths = Timedelta_daysInMonths(currentYears, currentMonths);
    Timedelta_addDays(timedelta, daysInMonths);
  }

  return;
}

/*
 * function `Timedelta_addDays` need some helpers
 * set months and days to all days
 * turn all days into months and days
 * */

export function Timedelta_daysCounterInYears(timedelta: Timedelta): number {
  // days normalized in current years
  Timedelta_dateNormInYears(timedelta);

  let currentYears = timedelta.years;
  let currentMonths = timedelta.months;
  let currentDays = timedelta.days;

  let daysInMonths = 0;
  for (let m = 1; m < currentMonths; m++) {
    daysInMonths = Timedelta_daysInMonths(currentYears, m);
    if (m % MONTHS_IN_YEAR === 0) currentYears += 1; // months is overflow
    currentDays += daysInMonths;
  }

  return currentDays;
}

/*
 * Normalize date and time using `Timedelta_timeNormInYears` for the initial stage
 * and `Timedelta_dateNormInYears` for the final stage. This function handles
 * potential underload or overload of years, months, days, hours, minutes, and
 * seconds.
 *
 * Note:
 * - This function is part of an experimental feature.
 * - Results are not guaranteed to be accurate but are useful for normalizing
 *   to the correct timedelta structure.
 *
 * */

export function Timedelta_datetimeNormInYears(timedelta: Timedelta): void {
  // initial stage with time normalized
  Timedelta_timeNormInYears(timedelta);

  // final stage with date normalize
  Timedelta_dateNormInYears(timedelta);
}

export function Timedelta_dateNormInYears(timedelta: Timedelta): void {
  let currYears = timedelta.years;
  let currMonths = timedelta.months;
  let currDays = timedelta.days;

  // override to prevent result xx/12, start at xx/1 or xx/2
  // if (currMonths === 0 && 0 <= currDays) {
  //   if (currDays === 0) currDays = 1;
  //   currMonths = 1;
  // }

  /// Months

  while (currMonths <= 0) {
    currMonths += MONTHS_IN_YEAR;
    currYears += -1;
  }

  while (MONTHS_IN_YEAR < currMonths) {
    currMonths += -MONTHS_IN_YEAR;
    currYears += 1;
  }

  /// Days

  while (currDays <= 0) {
    currMonths = Months_prevMonthsIdx(currMonths);
    if (currMonths === MONTHS_IN_YEAR) currYears += -1;
    const daysInMonth = Timedelta_daysInMonths(currYears, currMonths);
    currDays += daysInMonth;
  }

  let daysInMonths = 0;
  while (true) {
    daysInMonths = Timedelta_daysInMonths(currYears, currMonths);
    if (currDays <= daysInMonths) break;

    currMonths = Months_nextMonthsIdx(currMonths);
    if (currMonths === 1) currYears += 1;
    currDays += -daysInMonths;
  }

  // update timedelta
  timedelta.years = currYears;
  timedelta.months = currMonths;
  timedelta.days = currDays;

  return;
}

export function Timedelta_timeNormInYears(timedelta: Timedelta): void {
  let currDays = timedelta.days;
  let currHours = timedelta.hours;
  let currMinutes = timedelta.minutes;
  let currSeconds = timedelta.seconds;
  let currMillis = timedelta.milliseconds;
  let currMicros = timedelta.microseconds;

  // Microseconds

  while (currMicros < 0) {
    currMicros += MICROSECONDS_IN_MILLISECOND;
    currMillis += -1;
  }

  while (MICROSECONDS_IN_MILLISECOND <= currMicros) {
    currMicros += -MICROSECONDS_IN_MILLISECOND;
    currMillis += 1;
  }

  /// Milliseconds

  while (currMillis < 0) {
    currMillis += MILLISECONDS_IN_SECOND;
    currSeconds += -1;
  }

  while (MILLISECONDS_IN_SECOND <= currMillis) {
    currMillis += -MILLISECONDS_IN_SECOND;
    currSeconds += 1;
  }

  /// Seconds

  while (currSeconds < 0) {
    currSeconds += SECONDS_IN_MINUTE;
    currMinutes += -1;
  }

  while (SECONDS_IN_MINUTE <= currSeconds) {
    currSeconds += -SECONDS_IN_MINUTE;
    currMinutes += 1;
  }

  /// Minutes

  while (currMinutes < 0) {
    currMinutes += MINUTES_IN_HOUR;
    currHours += -1;
  }

  while (MINUTES_IN_HOUR <= currMinutes) {
    currMinutes += -MINUTES_IN_HOUR;
    currHours += 1;
  }

  /// Hours

  while (currHours < 0) {
    currHours += HOURS_IN_DAY;
    currDays += -1;
  }

  while (HOURS_IN_DAY <= currHours) {
    currHours += -HOURS_IN_DAY;
    currDays += 1;
  }

  timedelta.days = currDays;
  timedelta.hours = currHours;
  timedelta.minutes = currMinutes;
  timedelta.seconds = currSeconds;
  timedelta.milliseconds = currMillis;
  timedelta.microseconds = currMicros;

  return;
}

/*
 * function `Timedelta_addDays`
 * addition days with existing current days in timedelta itself
 * @param timedelta Timedelta
 * @param days number
 * @return void
 * */

export function Timedelta_addDays(timedelta: Timedelta, days: number): void {
  if (days === 0) return;

  if (days < 0) {
    // make absolute number of days
    days = -days;

    // short days
    if (days <= timedelta.days) {
      let currentYears = timedelta.years;
      let currentMonths = timedelta.months;
      let currentDays = timedelta.days - days;

      // if days left is zero
      if (currentDays === 0) {
        currentMonths = Months_prevMonthsIdx(currentMonths);
        if (currentMonths === MONTHS_IN_YEAR) currentYears += -1;

        currentDays = Timedelta_daysInMonths(currentYears, currentMonths);
      }

      timedelta.years = currentYears;
      timedelta.months = currentMonths;
      timedelta.days = currentDays;

      return;
    }

    let currentYears = timedelta.years;
    let currentMonths = timedelta.months;
    let currentDays = days - timedelta.days;

    // make previous by current months
    currentMonths = Months_prevMonthsIdx(currentMonths);
    if (currentMonths == MONTHS_IN_YEAR) currentYears += -1;

    // unload all months in current years
    for (let m = currentMonths; 1 <= m; m--) {
      currentMonths = m; // without breaking, current month possible set to zero value

      const daysInMonths = Timedelta_daysInMonths(currentYears, m);

      // days left is exceeded by days in current months
      if (currentDays <= daysInMonths) {
        // normalize days left
        currentDays = daysInMonths - currentDays;

        if (currentDays === 0) {
          currentMonths = Months_prevMonthsIdx(currentMonths);
          if (currentMonths === MONTHS_IN_YEAR) currentYears += -1;

          currentDays = Timedelta_daysInMonths(currentYears, currentMonths);
        }

        timedelta.years = currentYears;
        timedelta.months = currentMonths;
        timedelta.days = currentDays;

        return;
      }

      currentDays += -daysInMonths;
    }

    // make previous current years override current months
    currentYears += -1;
    currentMonths = MONTHS_IN_YEAR;

    // try decearse by days in years
    while (true) {
      const daysInYears = Timedelta_daysInYear(currentYears);
      if (currentDays <= daysInYears) break;
      currentDays += -daysInYears;
      currentYears += -1;
    }

    // normalize days left with days in current years
    // register current months like additions days

    // try decrease by days in months with reverse months in current years
    for (let m = MONTHS_IN_YEAR; 1 <= m; m--) {
      currentMonths = m;

      const daysInMonths = Timedelta_daysInMonths(currentYears, m);
      if (currentDays <= daysInMonths) break;
      currentDays += -daysInMonths;
    }

    // days left is exceeded by days in current months
    const daysInMonths = Timedelta_daysInMonths(currentYears, currentMonths);

    // normalize days left
    currentDays = daysInMonths - currentDays;

    if (currentDays === 0) {
      currentMonths = Months_prevMonthsIdx(currentMonths);
      if (currentMonths === MONTHS_IN_YEAR) currentYears += -1;

      currentDays = Timedelta_daysInMonths(currentYears, currentMonths);
    }

    timedelta.years = currentYears;
    timedelta.months = currentMonths;
    timedelta.days = currentDays;

    return;
  }

  let currentYears = timedelta.years;
  let currentMonths = timedelta.months;
  let currentDays = timedelta.days + days;

  // unload all months in current years
  for (let m = 1; m < currentMonths; m++) {
    const daysInMonths = Timedelta_daysInMonths(timedelta.years, m);
    currentDays += daysInMonths;
  }

  // years left should not be decreasing because goes forward in travel times
  // unnecessary --> yearsLeft += -1;
  // override current months
  currentMonths = 0;

  while (true) {
    const daysInYears = Timedelta_daysInYear(currentYears);
    if (currentDays <= daysInYears) break;
    currentDays += -daysInYears;
    currentYears += 1;
  }

  // try load all months in current years
  for (let m = 1; m <= MONTHS_IN_YEAR; m++) {
    currentMonths = m;

    const daysInMonths = Timedelta_daysInMonths(currentYears, m);
    if (currentDays <= daysInMonths) break;
    currentDays += -daysInMonths;
  }

  timedelta.years = currentYears;
  timedelta.months = currentMonths;
  timedelta.days = currentDays;

  return;
}

/*
 * function `Timedelta_addHours`
 * addition hours with existing current hours in timedelta itself
 * @param timedelta Timedelta
 * @param hours number
 * @return void
 * */

export function Timedelta_addHours(timedelta: Timedelta, hours: number): void {
  if (hours === 0) return;

  if (hours < 0) {
    // make absolute number of hours
    hours = -hours;

    if (hours <= timedelta.hours) {
      let currentHours = timedelta.hours - hours;
      timedelta.hours = currentHours;
      return;
    }

    let currentHours = hours - timedelta.hours;

    // make previous one day
    let daysLeft = 1;

    while (true) {
      if (currentHours <= HOURS_IN_DAY) break;
      currentHours += -HOURS_IN_DAY;
      daysLeft += 1;
    }

    // normalize hours
    currentHours = HOURS_IN_DAY - currentHours;

    timedelta.hours = currentHours;
    Timedelta_addDays(timedelta, -daysLeft);

    return;
  }

  let currentHours = timedelta.hours + hours;

  // make days left start at 0
  let daysLeft = 0;

  while (true) {
    if (currentHours < HOURS_IN_DAY) break;
    currentHours += -HOURS_IN_DAY;
    daysLeft += 1;
  }

  timedelta.hours = currentHours;
  Timedelta_addDays(timedelta, daysLeft);
  return;
}

/*
 * function `Timedelta_addMinutes`
 * addition minutes with existing current minutes in timedelta itself
 * @param timedelta Timedelta
 * @param minutes number
 * @return void
 * */

export function Timedelta_addMinutes(timedelta: Timedelta, minutes: number): void {
  if (minutes === 0) return;

  if (minutes < 0) {
    minutes = -minutes;

    if (minutes <= timedelta.minutes) {
      let currentMinutes = timedelta.minutes - minutes;
      timedelta.minutes = currentMinutes;
      return;
    }

    let currentMinutes = minutes - timedelta.minutes;

    // make previous one hour
    let hoursLeft = 1;

    while (true) {
      if (currentMinutes <= MINUTES_IN_HOUR) break;
      currentMinutes += -MINUTES_IN_HOUR;
      hoursLeft += 1;
    }

    // normalize minutes
    currentMinutes = MINUTES_IN_HOUR - currentMinutes;

    timedelta.minutes = currentMinutes;
    Timedelta_addHours(timedelta, -hoursLeft);

    return;
  }

  let currentMinutes = timedelta.minutes + minutes;

  // make hours left start at 0
  let hoursLeft = 0;

  while (true) {
    if (currentMinutes < MINUTES_IN_HOUR) break;
    currentMinutes += -MINUTES_IN_HOUR;
    hoursLeft += 1;
  }

  timedelta.minutes = currentMinutes;
  Timedelta_addHours(timedelta, hoursLeft);

  return;
}

/*
 * function `Timedelta_addSeconds`
 * addition seconds with existing current seconds in timedelta itself
 * @param timedelta Timedelta
 * @param seconds number
 * @return void
 * */

export function Timedelta_addSeconds(timedelta: Timedelta, seconds: number): void {
  if (seconds === 0) return;

  if (seconds < 0) {
    seconds = -seconds;

    if (seconds <= timedelta.seconds) {
      let currentSeconds = timedelta.seconds - seconds;
      timedelta.seconds = currentSeconds;
      return;
    }

    let currentSeconds = seconds - timedelta.seconds;

    // make previous one minute
    let minutesLeft = 1;

    while (true) {
      if (currentSeconds <= SECONDS_IN_MINUTE) break;
      currentSeconds += -SECONDS_IN_MINUTE;
      minutesLeft += 1;
    }

    // normalize seconds
    currentSeconds = SECONDS_IN_MINUTE - currentSeconds;

    timedelta.seconds = currentSeconds;
    Timedelta_addMinutes(timedelta, -minutesLeft);

    return;
  }

  let currentSeconds = timedelta.seconds + seconds;

  // make minutes left start at 0
  let minutesLeft = 0;

  while (true) {
    if (currentSeconds < SECONDS_IN_MINUTE) break;
    currentSeconds += -SECONDS_IN_MINUTE;
    minutesLeft += 1;
  }

  timedelta.seconds = currentSeconds;
  Timedelta_addMinutes(timedelta, minutesLeft);

  return;
}

/*
 * function `Timedelta_addMilliseconds`
 * addition milliseconds with existing current milliseconds in timedelta itself
 * @param timedelta Timedelta
 * @param milliseconds number
 * @return void
 * */

export function Timedelta_addMilliseconds(timedelta: Timedelta, milliseconds: number): void {
  if (milliseconds === 0) return;

  if (milliseconds < 0) {
    milliseconds = -milliseconds;

    if (milliseconds <= timedelta.milliseconds) {
      let currentMillis = timedelta.milliseconds - milliseconds;
      timedelta.milliseconds = currentMillis;
      return;
    }

    let currentMillis = milliseconds - timedelta.milliseconds;

    // make previous one second
    let secondsLeft = 1;

    while (true) {
      if (currentMillis <= MILLISECONDS_IN_SECOND) break;
      currentMillis += -MILLISECONDS_IN_SECOND;
      secondsLeft += 1;
    }

    // normalize milliseconds
    currentMillis = MILLISECONDS_IN_SECOND - currentMillis;

    timedelta.milliseconds = currentMillis;
    Timedelta_addSeconds(timedelta, -secondsLeft);

    return;
  }

  let currentMillis = timedelta.milliseconds + milliseconds;

  // make seconds left start at 0
  let secondsLeft = 0;

  while (true) {
    if (currentMillis < MILLISECONDS_IN_SECOND) break;
    currentMillis += -MILLISECONDS_IN_SECOND;
    secondsLeft += 1;
  }

  timedelta.milliseconds = currentMillis;
  Timedelta_addSeconds(timedelta, secondsLeft);

  return;
}

/*
 * function `Timedelta_addMicroseconds`
 * addition microseconds with existing current microseconds in timedelta itself
 * @param timedelta Timedelta
 * @param microseconds number
 * @return void
 * */

export function Timedelta_addMicroseconds(timedelta: Timedelta, microseconds: number): void {
  if (microseconds === 0) return;

  if (microseconds < 0) {
    microseconds = -microseconds;

    if (microseconds <= timedelta.microseconds) {
      let currentMicros = timedelta.microseconds - microseconds;
      timedelta.microseconds = currentMicros;
      return;
    }

    let currentMicros = microseconds - timedelta.microseconds;

    // make previous one millisecond
    let millisLeft = 1;

    while (true) {
      if (currentMicros <= MICROSECONDS_IN_MILLISECOND) break;
      currentMicros += -MICROSECONDS_IN_MILLISECOND;
      millisLeft += 1;
    }

    // normalize microseconds
    currentMicros = MICROSECONDS_IN_MILLISECOND - currentMicros;

    timedelta.microseconds = currentMicros;
    Timedelta_addMilliseconds(timedelta, -millisLeft);

    return;
  }

  let currentMicros = timedelta.microseconds + microseconds;

  // make milliseconds left start at 0
  let millisLeft = 0;

  while (true) {
    if (currentMicros < MICROSECONDS_IN_MILLISECOND) break;
    currentMicros += -MICROSECONDS_IN_MILLISECOND;
    millisLeft += 1;
  }

  timedelta.microseconds = currentMicros;
  Timedelta_addMilliseconds(timedelta, millisLeft);

  return;
}

export function Timedelta_preload(timedelta: Timedelta, dateTimePreload?: DateTimePreload): DateTimePreload {
  if (timedelta.timezone !== TimeZone.UTC) throw new Error("Invalid timezone: expected in universal time zone!");
  // if (Timedelta_greaterThan(timedeltaZero, timedelta)) throw new Error("Invalid timedelta: calculation exceeds!");

  // normalize timedelta source
  Timedelta_datetimeNormInYears(timedelta);

  // skip with estimate year caches in decade since 1970 1990 2010

  let timedeltaNear = Timedelta_copy(timedeltaZeroZulu);
  let timestampNear = 0;
  let weekdayNear = 3;

  if (!dateTimePreload) {
    for (const timedeltaSeed of TIMEDELTA_SEEDS) {
      if (Timedelta_lessThanEquals(timedeltaSeed.timedelta, timedelta)) {
        timedeltaNear = Timedelta_copy(timedeltaSeed.timedelta);
        timestampNear = timedeltaSeed.timestamp;
        weekdayNear = timedeltaSeed.weekday;
        break;
      }
    }
  } else {
    timedeltaNear = Timedelta_copy(dateTimePreload.timedelta);
    timestampNear = dateTimePreload.timestamp;
    weekdayNear = dateTimePreload.weekday;
  }

  let countDays = 0;
  let countMicros = 0;

  while (!Timedelta_equals(timedeltaNear, timedelta)) {
    if (timedeltaNear.years !== timedelta.years) {
      if (timedeltaNear.years < timedelta.years) {
        const days = Timedelta_daysInYear(timedeltaNear.years + 1);
        Timedelta_addDays(timedeltaNear, days);
        timestampNear += Timedelta_millisInDays(days);
        countDays += days;
      }

      if (timedeltaNear.years > timedelta.years) {
        const days = Timedelta_daysInYear(timedeltaNear.years);
        Timedelta_addDays(timedeltaNear, -days);
        timestampNear += -Timedelta_millisInDays(days);
        countDays += -days;
      }

      continue;
    }

    if (timedeltaNear.months !== timedelta.months) {
      if (timedeltaNear.months < timedelta.months) {
        const months = timedeltaNear.months + 1;
        const days = Timedelta_daysInMonths(timedeltaNear.years, months);
        Timedelta_addDays(timedeltaNear, days);
        timestampNear += Timedelta_millisInDays(days);
        countDays += days;
      }

      if (timedeltaNear.months > timedelta.months) {
        const days = Timedelta_daysInMonths(timedelta.years, timedeltaNear.months);
        Timedelta_addDays(timedeltaNear, -days);
        timestampNear += -Timedelta_millisInDays(days);
        countDays += -days;
      }

      continue;
    }

    if (timedeltaNear.days !== timedelta.days) {
      const timedeltaDaysPositive = timedeltaNear.days < timedelta.days

      let days = timedeltaDaysPositive ? timedelta.days - timedeltaNear.days : timedeltaNear.days - timedelta.days;
      Timedelta_addDays(timedeltaNear, timedeltaDaysPositive ? days : -days);
      timestampNear += timedeltaDaysPositive ? Timedelta_millisInDays(days) : -Timedelta_millisInDays(days);
      countDays += timedeltaDaysPositive ? days : -days;
      continue;
    }

    if (timedeltaNear.hours !== timedelta.hours) {
      const timedeltaHoursPositive = timedeltaNear.hours < timedelta.hours

      let hours = timedeltaHoursPositive ? timedelta.hours - timedeltaNear.hours : timedeltaNear.hours - timedelta.hours;
      Timedelta_addHours(timedeltaNear, timedeltaHoursPositive ? hours : -hours);
      timestampNear += timedeltaHoursPositive ? Timedelta_millisInHours(hours) : -Timedelta_millisInHours(hours);
      continue;
    }

    if (timedeltaNear.minutes !== timedelta.minutes) {
      const timedeltaMinutesPositive = timedeltaNear.minutes < timedelta.minutes;

      let minutes = timedeltaMinutesPositive ? timedelta.minutes - timedeltaNear.minutes : timedeltaNear.minutes - timedelta.minutes;
      Timedelta_addMinutes(timedeltaNear, timedeltaMinutesPositive ? minutes : -minutes);
      timestampNear += timedeltaMinutesPositive ? Timedelta_millisInMinutes(minutes) : -Timedelta_millisInMinutes(minutes);
      continue;
    }

    if (timedeltaNear.seconds !== timedelta.seconds) {
      const timedeltaSecondsPositive = timedeltaNear.seconds < timedelta.seconds

      let seconds = timedeltaSecondsPositive ? timedelta.seconds - timedeltaNear.seconds : timedeltaNear.seconds - timedelta.seconds;
      Timedelta_addSeconds(timedeltaNear, timedeltaSecondsPositive ? seconds : -seconds);
      timestampNear += timedeltaSecondsPositive ? Timedelta_millisInSeconds(seconds) : -Timedelta_millisInSeconds(seconds);
      continue;
    }

    if (timedeltaNear.milliseconds !== timedelta.milliseconds) {
      const timedeltaMillisPositive = timedeltaNear.milliseconds < timedelta.milliseconds;

      let milliseconds = timedeltaMillisPositive ? timedelta.milliseconds - timedeltaNear.milliseconds : timedeltaNear.milliseconds - timedelta.milliseconds;
      Timedelta_addMilliseconds(timedeltaNear, timedeltaMillisPositive ? milliseconds : -milliseconds);
      timestampNear += timedeltaMillisPositive ? milliseconds : -milliseconds;
      continue;
    }

    // extra using microseconds, enable future like Python equivalent (datetime) module

    if (timedeltaNear.microseconds !== timedelta.microseconds) {
      const timedeltaMicrosPositive = timedeltaNear.microseconds < timedelta.microseconds;

      let microseconds = timedeltaMicrosPositive ? timedelta.microseconds - timedeltaNear.microseconds : timedeltaNear.microseconds - timedelta.microseconds;
      Timedelta_addMicroseconds(timedeltaNear, timedeltaMicrosPositive ? microseconds : -microseconds);
      countMicros += timedeltaMicrosPositive ? microseconds : -microseconds;
      continue;
    }
  }

  weekdayNear += countDays % DAYS_IN_WEEK;
  weekdayNear %= DAYS_IN_WEEK;

  // update microseconds with milliseconds
  // countMicros += timestamp * MICROSECONDS_IN_MILLISECOND;

  return {
    timedelta: timedelta,
    timestamp: timestampNear,
    weekday: weekdayNear,
    microseconds: countMicros,
    timezone: timedelta.timezone,
  };
}

// create timestamp to timedelta, or

export function Timedelta_from(value: number | string | Date): Timedelta {

  // using new Date
  const date = new Date(value);

  let currYears = date.getUTCFullYear();
  let currMonths = date.getUTCMonth() + 1;
  let currDays = date.getUTCDate();
  let currHours = date.getUTCHours();
  let currMinutes = date.getUTCMinutes();
  let currSeconds = date.getUTCSeconds();
  let currMillis = date.getUTCMilliseconds();

  let timedelta = Timedelta_copy(timedeltaZero);
  timedelta.years = currYears;
  timedelta.months = currMonths;
  timedelta.days = currDays;
  timedelta.hours = currHours;
  timedelta.minutes = currMinutes;
  timedelta.seconds = currSeconds;
  timedelta.milliseconds = currMillis;

  return timedelta;
}

export function Timedelta_fromTimestamp(milliseconds: number): Timedelta {
  let timestamp = milliseconds;

  let dateTimePreload = {
    timedelta: Timedelta_copy(timedeltaZeroZulu),
    timestamp: 0,
    weekday: 3,
    microseconds: 0,
    timezone: TimeZone.UTC,
  };

  for (const timedeltaNear of TIMEDELTA_SEEDS) {
    if (timedeltaNear.timestamp <= timestamp) {
      dateTimePreload = {
        timedelta: Timedelta_copy(timedeltaNear.timedelta),
        timestamp: timedeltaNear.timestamp,
        weekday: timedeltaNear.weekday,
        microseconds: timedeltaNear.microseconds,
        timezone: timedeltaNear.timezone,
      };
      break;
    }
  }

  let found = false;
  let testTimedelta = Timedelta_copy(dateTimePreload.timedelta);
  let testTimestamp = dateTimePreload.timestamp;
  if (testTimestamp == timestamp) return testTimedelta;

  type OptNamed = "years" | "months" | "days" | "hours" | "minutes" | "seconds" | "microseconds";

  // let names: OptNamed[] = ["years", "months", "days", "hours", "minutes", "seconds", "microseconds"];
  let names: OptNamed[] = ["years", "months"];

  for (let name of names) {
    // try added years | months | days | hours | minutes | seconds | microseconds
    while (true) {
      if (testTimestamp <= timestamp) {
        testTimedelta[name] += 1;
        let dateTimePreload2 = Timedelta_preload(testTimedelta, dateTimePreload);

        // recovered years | months | days | hours | minutes | seconds | microseconds
        if (timestamp < dateTimePreload2.timestamp) {
          // testTimedelta = Timedelta_copy(dateTimePreload.timedelta);
          testTimedelta[name] += -1;
          break;
        }

        // merge date time preload
        dateTimePreload = dateTimePreload2;
        testTimedelta = Timedelta_copy(dateTimePreload.timedelta);
        testTimestamp = dateTimePreload2.timestamp

        // found it
        if (testTimestamp == timestamp) {
          found = true;
          break;
        }
      } else {
        testTimedelta[name] += -1;
        let dateTimePreload2 = Timedelta_preload(testTimedelta, dateTimePreload);

        // recovered years
        if (dateTimePreload2.timestamp < timestamp) {
          // testTimedelta = Timedelta_copy(dateTimePreload.timedelta);
          testTimedelta[name] += 1;
          break;
        }

        // merge date time preload
        dateTimePreload = dateTimePreload2;
        testTimedelta = Timedelta_copy(dateTimePreload.timedelta);
        testTimestamp = dateTimePreload2.timestamp

        // found it
        if (timestamp == testTimestamp) {
          found = true;
          break;
        }
      }
    }
    
    if (found) break;
  }

  testTimestamp = timestamp - testTimestamp
    
  // let currYears = dateTimePreload.timedelta.years;
  // let currMonths = dateTimePreload.timedelta.months;
  // console.log(currYears, currMonths, testTimestamp);

  const testTimestampLeZero = testTimestamp <= 0;
  if (testTimestampLeZero) testTimestamp = -testTimestamp;

  while (true) {
    const millisInDays = Timedelta_millisInDays(1)
    if (testTimestamp < millisInDays) break;
    testTimedelta.days += testTimestampLeZero ? -1 : 1;
    testTimestamp += -millisInDays;
  }

  while (true) {
    const millisInHours = Timedelta_millisInHours(1)
    if (testTimestamp < millisInHours) break;
    testTimedelta.hours += testTimestampLeZero ? -1 : 1;
    testTimestamp += -millisInHours;
  }

  while (true) {
    const millisInMinutes = Timedelta_millisInMinutes(1)
    if (testTimestamp < millisInMinutes) break;
    testTimedelta.minutes += testTimestampLeZero ? -1 : 1;
    testTimestamp += -millisInMinutes;
  }

  while (true) {
    const millisInSeconds = Timedelta_millisInSeconds(1)
    if (testTimestamp < millisInSeconds) break;
    testTimedelta.seconds += testTimestampLeZero ? -1 : 1;
    testTimestamp += -millisInSeconds;
  }

  testTimedelta.milliseconds += testTimestampLeZero ? -testTimestamp : testTimestamp;

  Timedelta_datetimeNormInYears(testTimedelta);
  return testTimedelta;
}

// string formatting to timedelta

export function Timedelta_addition(currentTimedelta: Timedelta, timedelta: Timedelta): void {
  Timedelta_addYears(currentTimedelta, timedelta.years);
  Timedelta_addMonths(currentTimedelta, timedelta.months);
  Timedelta_addDays(currentTimedelta, timedelta.days);
  Timedelta_addHours(currentTimedelta, timedelta.hours);
  Timedelta_addMinutes(currentTimedelta, timedelta.minutes);
  Timedelta_addSeconds(currentTimedelta, timedelta.seconds);
  Timedelta_addMicroseconds(currentTimedelta, timedelta.microseconds);
}

export function Timedelta_subtraction(currentTimedelta: Timedelta, timedelta: Timedelta): void {
  Timedelta_addMicroseconds(currentTimedelta, -timedelta.microseconds);
  Timedelta_addSeconds(currentTimedelta, -timedelta.seconds);
  Timedelta_addMinutes(currentTimedelta, -timedelta.minutes);
  Timedelta_addHours(currentTimedelta, -timedelta.hours);
  Timedelta_addDays(currentTimedelta, -timedelta.days);
  Timedelta_addMonths(currentTimedelta, -timedelta.months);
  Timedelta_addYears(currentTimedelta, -timedelta.years);
}

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
  constructor(timedelta: Timedelta) {
    this.datetimeCache = Timedelta_preload(timedelta);
    this.timedelta = Timedelta_copy(this.datetimeCache.timedelta);
  }
  preload(): void {
    if (!Timedelta_equals(this.datetimeCache.timedelta, this.timedelta)) {
      this.datetimeCache = Timedelta_preload(this.timedelta);
      this.timedelta = Timedelta_copy(this.datetimeCache.timedelta);
    }
  }
  weekday(): number {
    this.preload();
    return this.datetimeCache.weekday;
  }
  isLeapYear(year: number): boolean {
    return Timedelta_isLeapYear(this.timedelta.years);
  }
  equals(timedelta: Timedelta): boolean {
    return Timedelta_equals(this.timedelta, timedelta);
  }
  lessThan(timedelta: Timedelta): boolean {
    return Timedelta_lessThan(this.timedelta, timedelta);
  }
  lessThanEquals(timedelta: Timedelta): boolean {
    return Timedelta_lessThanEquals(this.timedelta, timedelta);
  }
  greaterThan(timedelta: Timedelta): boolean {
    return Timedelta_greaterThan(this.timedelta, timedelta);
  }
  greaterThanEquals(timedelta: Timedelta): boolean {
    return Timedelta_greaterThanEquals(this.timedelta, timedelta);
  }
  getTimedelta(): Timedelta {
    return Timedelta_copy(this.timedelta);
  }
  getYears(): number {
    return this.timedelta.years;
  }
  getMonths(): number {
    return this.timedelta.months;
  }
  getDays(): number {
    return this.timedelta.days;
  }
  getHours(): number {
    return this.timedelta.hours;
  }
  getMinutes(): number {
    return this.timedelta.minutes;
  }
  getSeconds(): number {
    return this.timedelta.seconds;
  }
  getMicroseconds(): number {
    return this.timedelta.microseconds;
  }
  addTimedelta(timedelta: Timedelta): void {
    Timedelta_addition(this.timedelta, timedelta);
  }
  addYears(years: number): void {
    Timedelta_addYears(this.timedelta, years);
  }
  addMonths(months: number): void {
    Timedelta_addMonths(this.timedelta, months);
  }
  addDays(days: number): void {
    Timedelta_addDays(this.timedelta, days);
  }
  addHours(hours: number): void {
    Timedelta_addHours(this.timedelta, hours);
  }
  addMinutes(minutes: number): void {
    Timedelta_addMinutes(this.timedelta, minutes);
  }
  addSeconds(seconds: number): void {
    Timedelta_addSeconds(this.timedelta, seconds);
  }
  addMicroseconds(microseconds: number): void {
    Timedelta_addMicroseconds(this.timedelta, microseconds);
  }
  subTimedelta(timedelta: Timedelta): void {
    Timedelta_subtraction(this.timedelta, timedelta);
  }
  toTimestamp(): number {
    this.preload();
    return this.datetimeCache.timestamp;
  }
  copy(): DateTimeImpl {
    return new DateTime(this.getTimedelta());
  }
}
