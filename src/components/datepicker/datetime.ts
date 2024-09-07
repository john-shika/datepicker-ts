const MONTHS_IN_YEAR = 12;
const DAYS_IN_YEAR = 365;
const DAYS_IN_LEAP_YEAR = 366;
const DAYS_IN_WEEK = 7;
const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;
const MICROSECONDS_IN_MILLISECOND = 1000;
const NANOSECONDS_IN_MICROSECOND = 1000;

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

/*
 * Days of the Week (Weekday Indexes)
 * 1 Jan, 1970 start at Thursday
 * Python equivalent weekday index start at 3 (datetime)
 * Python `datetime.date(1970, 1, 4).weekday()` equals to 6 (Sunday)
 * Python `datetime.date(1970, 1, 5).weekday()` equals to 0 (Monday)
 * */

export function Days_daysToIdx(day: Days): number {
  switch (day) {
    case Days.Monday:
      return 0;
    case Days.Tuesday:
      return 1;
    case Days.Wednesday:
      return 2;
    case Days.Thursday:
      return 3;
    case Days.Friday:
      return 4;
    case Days.Saturday:
      return 5;
    case Days.Sunday:
      return 6;
    default:
      throw new Error("Invalid Days");
  }
}

export function Days_idxToDays(idx: number): Days {
  switch (idx) {
    case 0:
      return Days.Monday;
    case 1:
      return Days.Tuesday;
    case 2:
      return Days.Wednesday;
    case 3:
      return Days.Thursday;
    case 4:
      return Days.Friday;
    case 5:
      return Days.Saturday;
    case 6:
      return Days.Sunday;
    default:
      throw new Error("Invalid Days");
  }
}

export function Days_nextDays(days: Days): Days {
  return Days_idxToDays(Days_nextDaysIdx(Days_daysToIdx(days)));
}

export function Days_prevDays(days: Days): Days {
  return Days_idxToDays(Days_prevDaysIdx(Days_daysToIdx(days)));
}

/*
 * using this function consider the following
 * Days Indexes by Python equivalent (datetime) module
 * where:
 * - Monday is the first, start at 0
 * - Tuesday is the seconds, index at 1
 * - Sunday is the last, index at 6
 * */

export function Days_nextDaysIdx(idx: number): number {
  let val = idx + 1;
  if (val > 6) val += -7;
  return val;
}

export function Days_prevDaysIdx(idx: number): number {
  let val = idx - 1;
  if (val < 0) val += 7;
  return val;
}

export function Days_daysToName(days: Days): string {
  switch (days) {
    case Days.Sunday:
      return "Sunday";
    case Days.Monday:
      return "Monday";
    case Days.Tuesday:
      return "Tuesday";
    case Days.Wednesday:
      return "Wednesday";
    case Days.Thursday:
      return "Thursday";
    case Days.Friday:
      return "Friday";
    case Days.Saturday:
      return "Saturday";
    default:
      return "Unknown";
  }
}

export function Days_nameToDays(value: string): Days {
  switch (value.toLowerCase()) {
    case "sun":
    case "sunday":
      return Days.Sunday;
    case "mon":
    case "monday":
      return Days.Monday;
    case "tue":
    case "tues":
    case "tuesday":
      return Days.Tuesday;
    case "wed":
    case "wednes":
    case "wednesday":
      return Days.Wednesday;
    case "thu":
    case "thurs":
    case "thursday":
      return Days.Thursday;
    case "fri":
    case "friday":
      return Days.Friday;
    case "sat":
    case "satur":
    case "saturday":
      return Days.Saturday;
    default:
      return Days.Unknown;
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

  // public weekday: number;

  constructor(
    years: number,
    months: Months,
    days: Days,
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

export function Timedelta_isLeapYears(years: number): boolean {
  if (years % 4 !== 0) return false;
  if (years % 100 !== 0 || years % 400 === 0) return true;
  return false;
}

export function Timedelta_daysInYears(years: number): number {
  if (Timedelta_isLeapYears(years)) return DAYS_IN_LEAP_YEAR;
  return DAYS_IN_YEAR;
}

export function Timedelta_daysInFebruary(years: number): number {
  if (Timedelta_isLeapYears(years)) return 29;
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

export function Timedelta_secondsInMilliseconds(seconds: number): number {
  return seconds * MILLISECONDS_IN_SECOND;
}

export function Timedelta_minutesInMilliseconds(minutes: number): number {
  return Timedelta_secondsInMilliseconds(minutes * SECONDS_IN_MINUTE);
}

export function Timedelta_hoursInMilliseconds(hours: number): number {
  return Timedelta_minutesInMilliseconds(hours * MINUTES_IN_HOUR);
}

export function Timedelta_daysInMilliseconds(days: number): number {
  return Timedelta_hoursInMilliseconds(days * HOURS_IN_DAY);
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

      const daysInYears = Timedelta_daysInYears(prevYears);

      Timedelta_addDays(timedelta, -daysInYears);

      // bad performance, try using days in years instead of months in years
      // months in years same as days in months in years, loop nested
      // Timedelta_addMonths(timedelta, -MONTHS_IN_YEAR);
    }

    return;
  }

  for (let i = 0; i < years; i++) {
    let currentYears = timedelta.years;
    const daysInYears = Timedelta_daysInYears(currentYears);

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
 * function `Timedelta_daysNormInYears` can possible normalize many days
 * to normalized days in current years, bad performance issues with call,
 * using `Timedelta_addDays` for optimization, but this function required by
 * function `Timedelta_addDays` for throwing away from recursively problems.
 * */

export function Timedelta_dateNormInYears(timedelta: Timedelta): void {
  let currentYears = timedelta.years;
  let currentMonths = timedelta.months;
  let currentDays = timedelta.days;

  /// Months

  while (currentMonths <= 0) {
    currentMonths += MONTHS_IN_YEAR;
    currentYears += -1;
  }

  while (MONTHS_IN_YEAR < currentMonths) {
    currentMonths += -MONTHS_IN_YEAR;
    currentYears += 1;
  }

  /// Days

  while (currentDays <= 0) {
    currentMonths = Months_prevMonthsIdx(currentMonths);
    if (currentMonths === MONTHS_IN_YEAR) currentYears += -1;
    const daysInMonth = Timedelta_daysInMonths(currentYears, currentMonths);
    currentDays += daysInMonth;
  }

  let daysInMonths = 0;
  while (true) {
    daysInMonths = Timedelta_daysInMonths(currentYears, currentMonths);
    if (currentDays <= daysInMonths) break;

    currentMonths = Months_nextMonthsIdx(currentMonths);
    if (currentMonths === 1) currentYears += 1;
    currentDays += -daysInMonths;
  }

  // update timedelta
  timedelta.years = currentYears;
  timedelta.months = currentMonths;
  timedelta.days = currentDays;

  return;
}

/*
 * function `Timedelta_secondsNormInYears` normalized time,
 * hours, minutes, seconds, milliseconds, microseconds (experimental feature)
 * */

export function Timedelta_datetimeNormInYears(timedelta: Timedelta): void {
  let currentDays = timedelta.days;
  let currentHours = timedelta.hours;
  let currentMinutes = timedelta.minutes;
  let currentSeconds = timedelta.seconds;
  let currentMillis = timedelta.milliseconds;
  let currentMicros = timedelta.microseconds;

  // Microseconds

  while (currentMicros < 0) {
    currentMicros += MICROSECONDS_IN_MILLISECOND;
    currentMillis += -1;
  }

  while (MICROSECONDS_IN_MILLISECOND <= currentMicros) {
    currentMicros += -MICROSECONDS_IN_MILLISECOND;
    currentMillis += 1;
  }

  /// Milliseconds

  while (currentMillis < 0) {
    currentMillis += MILLISECONDS_IN_SECOND;
    currentSeconds += -1;
  }

  while (MILLISECONDS_IN_SECOND <= currentMillis) {
    currentMillis += -MILLISECONDS_IN_SECOND;
    currentSeconds += 1;
  }

  /// Seconds

  while (currentSeconds < 0) {
    currentSeconds += SECONDS_IN_MINUTE;
    currentMinutes += -1;
  }

  while (SECONDS_IN_MINUTE <= currentSeconds) {
    currentSeconds += -SECONDS_IN_MINUTE;
    currentMinutes += 1;
  }

  /// Minutes

  while (currentMinutes < 0) {
    currentMinutes += MINUTES_IN_HOUR;
    currentHours += -1;
  }

  while (MINUTES_IN_HOUR <= currentMinutes) {
    currentMinutes += -MINUTES_IN_HOUR;
    currentHours += 1;
  }

  /// Hours

  while (currentHours < 0) {
    currentHours += HOURS_IN_DAY;
    currentDays += -1;
  }

  while (HOURS_IN_DAY <= currentHours) {
    currentHours += -HOURS_IN_DAY;
    currentDays += 1;
  }

  timedelta.days = currentDays;
  timedelta.hours = currentHours;
  timedelta.minutes = currentMinutes;
  timedelta.seconds = currentSeconds;
  timedelta.milliseconds = currentMillis;
  timedelta.microseconds = currentMicros;

  Timedelta_dateNormInYears(timedelta);

  // throw new Error("Couldn't find any implementation for this function!");

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
      const daysInYears = Timedelta_daysInYears(currentYears);
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
    const daysInYears = Timedelta_daysInYears(currentYears);
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

function Timedelta_normalize(timedelta: Timedelta): void {
  // normalize timedelta to valid timedelta for timestamp conversion

  // check
  // microseconds
  // milliseconds
  // minutes
  // hours
  // days
  // months
  // years

  return;
}

export function Timedelta_toTimestamp(timedelta: Timedelta): [number, number] {
  if (timedelta.timezone !== TimeZone.UTC) throw new Error("Invalid timezone: expected in universal time zone!");
  // if (Timedelta_greaterThan(timedeltaZero, timedelta)) throw new Error("Invalid timedelta: calculation exceeds!");

  // normalize timedelta source
  Timedelta_normalize(timedelta);

  // skip with estimate year caches in decade since 1970 1990 2010

  let timedeltaStart = Timedelta_copy(timedeltaZeroZulu);

  let stateMs = 0;
  let stateUs = 0;

  while (!Timedelta_equals(timedeltaStart, timedelta)) {
    if (timedeltaStart.years !== timedelta.years) {
      if (timedeltaStart.years < timedelta.years) {
        const days = Timedelta_daysInYears(timedeltaStart.years + 1);
        Timedelta_addDays(timedeltaStart, days);
        stateMs += Timedelta_daysInMilliseconds(days);
      }

      if (timedeltaStart.years > timedelta.years) {
        const days = Timedelta_daysInYears(timedeltaStart.years);
        Timedelta_addDays(timedeltaStart, -days);
        stateMs += -Timedelta_daysInMilliseconds(days);
      }

      continue;
    }

    if (timedeltaStart.months !== timedelta.months) {
      if (timedeltaStart.months < timedelta.months) {
        const months = timedeltaStart.months + 1;
        const days = Timedelta_daysInMonths(timedeltaStart.years, months);
        Timedelta_addDays(timedeltaStart, days);
        stateMs += Timedelta_daysInMilliseconds(days);
      }

      if (timedeltaStart.months > timedelta.months) {
        const days = Timedelta_daysInMonths(timedelta.years, timedeltaStart.months);
        Timedelta_addDays(timedeltaStart, -days);
        stateMs += -Timedelta_daysInMilliseconds(days);
      }

      continue;
    }

    if (timedeltaStart.days !== timedelta.days) {
      if (timedeltaStart.days < timedelta.days) {
        let days = timedelta.days - timedeltaStart.days;
        Timedelta_addDays(timedeltaStart, days);
        stateMs += Timedelta_daysInMilliseconds(days);
      }

      if (timedeltaStart.days > timedelta.days) {
        let days = timedeltaStart.days - timedelta.days;
        Timedelta_addDays(timedeltaStart, -days);
        stateMs += -Timedelta_daysInMilliseconds(days);
      }

      continue;
    }

    if (timedeltaStart.hours !== timedelta.hours) {
      if (timedeltaStart.hours < timedelta.hours) {
        let hours = timedelta.hours - timedeltaStart.hours;
        timedeltaStart.hours += hours;
        stateMs += Timedelta_hoursInMilliseconds(hours);
      }

      if (timedeltaStart.hours > timedelta.hours) {
        let hours = timedeltaStart.hours - timedelta.hours;
        timedeltaStart.hours += -hours;
        stateMs += -Timedelta_hoursInMilliseconds(hours);
      }

      continue;
    }

    if (timedeltaStart.minutes !== timedelta.minutes) {
      if (timedeltaStart.minutes < timedelta.minutes) {
        let minutes = timedelta.minutes - timedeltaStart.minutes;
        timedeltaStart.minutes += minutes;
        stateMs += Timedelta_minutesInMilliseconds(minutes);
      }

      if (timedeltaStart.minutes > timedelta.minutes) {
        let minutes = timedeltaStart.minutes - timedelta.minutes;
        timedeltaStart.minutes += -minutes;
        stateMs += -Timedelta_minutesInMilliseconds(minutes);
      }

      continue;
    }

    if (timedeltaStart.seconds !== timedelta.seconds) {
      if (timedeltaStart.seconds < timedelta.seconds) {
        let seconds = timedelta.seconds - timedeltaStart.seconds;
        timedeltaStart.seconds += seconds;
        stateMs += Timedelta_secondsInMilliseconds(seconds);
      }

      if (timedeltaStart.seconds > timedelta.seconds) {
        let seconds = timedeltaStart.seconds - timedelta.seconds;
        timedeltaStart.seconds += -seconds;
        stateMs += -Timedelta_secondsInMilliseconds(seconds);
      }

      continue;
    }

    if (timedeltaStart.milliseconds !== timedelta.milliseconds) {
      if (timedeltaStart.milliseconds < timedelta.milliseconds) {
        let milliseconds = timedelta.milliseconds - timedeltaStart.milliseconds;
        timedeltaStart.milliseconds += milliseconds;
        stateMs += milliseconds;
      }

      if (timedeltaStart.milliseconds > timedelta.milliseconds) {
        let milliseconds = timedeltaStart.milliseconds - timedelta.milliseconds;
        timedeltaStart.milliseconds += -milliseconds;
        stateMs += -milliseconds;
      }

      continue;
    }

    // extra using microseconds, enable future like Python equivalent (datetime) module

    if (timedeltaStart.microseconds !== timedelta.microseconds) {
      if (timedeltaStart.microseconds < timedelta.microseconds) {
        let microseconds = timedelta.microseconds - timedeltaStart.microseconds;
        timedeltaStart.microseconds += microseconds;
        stateUs += microseconds;
      }

      if (timedeltaStart.microseconds > timedelta.microseconds) {
        let microseconds = timedeltaStart.microseconds - timedelta.microseconds;
        timedeltaStart.microseconds += -microseconds;
        stateUs += -microseconds;
      }

      continue;
    }
  }

  // update microseconds with milliseconds
  stateUs += stateMs * MICROSECONDS_IN_MILLISECOND;

  return [stateMs, stateUs];
}

export interface DateTimeImpl {
  // isLeapYears(year: number): boolean;
  // daysInYears(year: number): number;
  // daysInMonths(year: number, month: Months): number;
  // secondsInMilliseconds(seconds: number): number;
  // minutesInMilliseconds(minutes: number): number;
  // hoursInMilliseconds(hours: number): number;
  // daysInMilliseconds(days: number): number;
  equals(timedelta: Timedelta): boolean;
  lessThan(timedelta: Timedelta): boolean;
  lessThanEquals(timedelta: Timedelta): boolean;
  greaterThan(timedelta: Timedelta): boolean;
  greaterThanEquals(timedelta: Timedelta): boolean;
  addDays(days: number): void;
  copy(): Timedelta;
  toTimestamp(): [number, number];
}

export default class DateTime implements DateTimeImpl {
  public timedelta: Timedelta;

  constructor(timedelta: Timedelta) {
    this.timedelta = timedelta;
  }

  static isLeapYears(year: number): boolean {
    return Timedelta_isLeapYears(year);
  }

  static daysInYears(year: number): number {
    return Timedelta_daysInYears(year);
  }

  static daysInMonths(year: number, month: Months): number {
    return Timedelta_daysInMonths(year, month);
  }

  static secondsInMilliseconds(seconds: number): number {
    return Timedelta_secondsInMilliseconds(seconds);
  }

  static minutesInMilliseconds(minutes: number): number {
    return Timedelta_minutesInMilliseconds(minutes);
  }

  static hoursInMilliseconds(hours: number): number {
    return Timedelta_hoursInMilliseconds(hours);
  }

  static daysInMilliseconds(days: number): number {
    return Timedelta_daysInMilliseconds(days);
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

  addDays(days: number): void {
    Timedelta_addDays(this.timedelta, days);

    return;
  }

  copy(): Timedelta {
    return Timedelta_copy(this.timedelta);
  }

  toTimestamp(): [number, number] {
    return Timedelta_toTimestamp(this.timedelta);
  }
}
