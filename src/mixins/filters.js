// Dayjs
import Day from 'dayjs'
import DayUtc from 'dayjs/plugin/utc'
import DayTimezone from 'dayjs/plugin/timezone'
Day.extend(DayUtc)
Day.extend(DayTimezone)

const mixinFilters = {
  filters: {
    mixinFormatAddress (address, before=8, after=8) {
      if (!address) return ''
      let len = address.length
      if (len < 14) return address
      return `${address.slice(0, before)}...${address.slice(len - after, len)}`
    },

    mixinFormatSecond (second) {
      if (!second) return '00:00:00'
      let h = Math.floor(second / 3600)
      let day = Math.floor(h / 24)
      h = Math.floor((second - (day * 24*60*60)) / 3600)
      let m = Math.floor((second % 3600) / 60)
      let s = (second % 3600 % 60)
      if (h < 10) h = `0${h}`
      if (m < 10) m = `0${m}`
      if (s < 10) s = `0${s}`

      let result = null
      if (day === 0) {
        result = `${h}:${m}:${s}`
      } else {
        result = `${day} DAYS ${h}:${m}:${s}`
      }
      return result
    },

    //
    mixinFormatNumber (number) {
      if (!number) return 0
      return !(number + '').includes('.')
      ?
        (number + '').replace(/\d{1,3}(?=(\d{3})+$)/g, (match) => {
          return match + ','
        })
      : (number + '').replace(/\d{1,3}(?=(\d{3})+(\.))/g, (match) => {
          return match + ','
        })
    },

    mixinFormatDate (date) {
      if (!date) return ''
      return Day(date).format('YYYY-MM-DD HH:mm:ss')
    }

  }
}

export default mixinFilters
