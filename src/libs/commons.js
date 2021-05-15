export default {
  /**
   * 自定义时间戳转换时间格式
   * @param value
   * @param type
   * @returns {string}
   */
  myDate (value, type = 0) {
    const time = new Date(value * 1000)
    const year = time.getFullYear()
    let month = time.getMonth() + 1
    let date = time.getDate()
    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()
    month = month < 10 ? '0' + month : month
    date = date < 10 ? '0' + date : date
    hour = hour < 10 ? '0' + hour : hour
    minute = minute < 10 ? '0' + minute : minute
    second = second < 10 ? '0' + second : second
    const arr = [
      year + '-' + month + '-' + date,
      year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second,
      year + '年' + month + '月' + date,
      year + '年' + month + '月' + date + ' ' + hour + ':' + minute + ':' + second,
      hour + ':' + minute + ':' + second
    ]
    return arr[type]
  }
}
