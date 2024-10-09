// @ts-nocheck
/**
 *  exportData
 *  importData
 */
export default {
  methods: {
    exportData(value) {
      this.$createDialog({
        title: 'Export Data',
        width: '700px',
        component: {
          render(h) {
            return h('div', [
              h('code-editor', {
                class: '!h-[400px]',
                props: {
                  lineNums: true,
                  border_radius: '0',
                  background: '#000000',
                  width: '100%',
                  height: '400px',
                  value
                }
              }),
              h('p', 'After the data is imported, the original artboard data will be cleared.')
            ])
          }
        }
      })
    },
    importData() {
      return new Promise(resolve => {
        this.$createDialog({
          title: 'Import Data',
          width: '700px',
          footerClass: '!justify-center !h-[80px]',
          component: {
            data: () => ({ value: '' }),
            render(h) {
              return h('div', [
                h('style', '.import-editor .header {display: none}'),
                h('code-editor', {
                  on: { input: e => (this.value = e) },
                  class: '!h-[380px] import-editor',
                  props: {
                    header: false,
                    lineNums: true,
                    border_radius: '0',
                    background: '#000000',
                    width: '100%',
                    height: '380px',
                    value: this.value
                  }
                }),
                h(
                  'p',
                  { class: 'text-[#FF4A00] text-center' },
                  'After the data is imported, the original artboard data will be cleared.'
                )
              ])
            }
          },
          buttons: [
            {
              text: 'Confirm',
              class: 'rounded-full px-10',
              confirm: 'This operation will override whether to continue?',
              callback: ({ component }) => {
                resolve(eval(component.value))
                component.$emit('close')
              }
            }
          ]
        })
      })
    }
  }
}
