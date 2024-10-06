const mixinMethods = {
  methods: {


    async mixinCopySomething (text) {
      this.$showMessage('success', 'copied')
      await navigator.clipboard.writeText(text)
    },


    mixinCheckBc1Address (address) {
      address = address.toLowerCase()
      return address.indexOf('bc1') === 0
    },

  }
}

export default mixinMethods
