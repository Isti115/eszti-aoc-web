import days from './days/index'
// import * as DayUtility from './DayUtility'

class DayStringStore {
  constructor () {
    this.dayString = ''
    this.subscriptions = []
  }

  init () {
    this.setDayString(window.location.hash ? window.location.hash.slice(1) : 'nov26')
  }

  subscribe (callback) {
    this.subscriptions.push(callback)
  }

  getDayString () {
    return this.dayString
  }

  getDayData () {
    return days[this.dayString]
  }

  setDayString (dayString) {
    if (!(dayString in days)) {
    // if (!(dayString in days) || DayUtility.todayDayNumber() < DayUtility.dayNumberFromString(dayString, true)) {
      window.alert('This day is not available yet.')
      return
    }

    this.dayString = dayString

    window.location.hash = dayString

    for (const callback of this.subscriptions) {
      callback(dayString, days[dayString])
    }
  }
}

export default new DayStringStore()
