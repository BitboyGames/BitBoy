export const componentsMixin = {
  data() {
    timer: null
  },
  methods: {
    debounce (fn, timeInterval = 1000) {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      let arg = [ ...arguments ].filter((item, index) => {
        return index > 1
      })
      this.timer = setTimeout(() => {
        fn.apply(this, arg)
      }, timeInterval)
    },
    throttle (fn, gapTime) {
      let _lastTime = null
      return function () {
        let _nowTime = +new Date()
        if (_nowTime - _lastTime > gapTime || !_lastTime) {
          fn()
          _lastTime = _nowTime
        }
      }
    }
  }
}
