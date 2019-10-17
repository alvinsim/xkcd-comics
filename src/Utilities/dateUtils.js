export function getMonthName(m) {
  const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May',
    'June', 'July', 'August', 'September', 'October',
    'November', 'December'];

  return MONTH_NAMES[m];
}

export function getWeekdayName(d) {
  const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday',
    'Friday', 'Saturday', 'Sunday'];

  return WEEK_DAYS[d];
}
