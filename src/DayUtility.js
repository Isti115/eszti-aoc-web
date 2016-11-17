export class Month {
  constructor (name, abbreviation, length) {
    this.name = name
    this.abbreviation = abbreviation
    this.length = length
  }
}

export class Day {
  constructor (month, number) {
    this.month = month
    this.number = number
  }

  toString () {
    return this.month.abbreviation + this.number
  }
}

export function getMonths (isLeapYear = false) {
  return [
    new Month('January', 'jan', 31),
    new Month('February', 'feb', isLeapYear ? 29 : 28),
    new Month('March', 'mar', 31),
    new Month('April', 'apr', 30),
    new Month('May', 'may', 31),
    new Month('June', 'jun', 30),
    new Month('July', 'jul', 31),
    new Month('August', 'aug', 31),
    new Month('Spetember', 'sep', 30),
    new Month('Oktober', 'okt', 31),
    new Month('November', 'nov', 30),
    new Month('December', 'dec', 31)
  ]
}

/**
 * @param {string} string Abbreviated date string
 * @param {boolean} isLeapYear
 *
 * @return {number}
 */
export function dayNumberFromString (string, isLeapYear = false) {
  const months = getMonths(isLeapYear)

  const monthAbbreviation = string.slice(0, 3)
  const dayNumber = Number(string.slice(3))

  let number = 0

  for (let i = 0; monthAbbreviation !== months[i].abbreviation; i++) {
    number += months[i].length
  }

  return number + dayNumber
}

/**
 * @param {number} number Number of day in the year
 * @param {boolean} isLeapYear
 *
 * @return {Day}
 */
export function dayFromNumber (number, isLeapYear = false) {
  const months = getMonths(isLeapYear)

  let monthIndex = 0

  while (number > months[monthIndex].length) {
    number -= months[monthIndex].length
    monthIndex++
  }

  return new Day(months[monthIndex], number)
}

export function dayFromString (string, isLeapYear = false) {
  return dayFromNumber(dayNumberFromString(string, isLeapYear), isLeapYear)
}
