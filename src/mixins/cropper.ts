// @ts-nocheck
import createFileInput from 'create-file-input'
import { resizeBase64Image } from '@/utils'
export default {
  methods: {
    uploadImage({ cropper = true } = {}) {
      return new Promise(resolve => {
        createFileInput({
          fileOnly: true,
          multiple: false,
          accept: 'image/*',
          onChange: file => {
            const reader = new FileReader()
            reader.readAsDataURL(file)
            reader.onload = () =>
              cropper ? this.cropper({ src: reader.result }).then(resolve) : resolve(reader.result)
          }
        })
      })
    },
    cropper({ src }) {
      return new Promise((resolve, reject) => {
        this.$createDialog({
          title: 'Crop Your Image',
          width: '500px',
          height: '500px',
          component: 'BaseCropper',
          props: { src },
          onClose: () => reject('cancel operation'),
          buttons: [{ text: 'Confirm', callback: 'onConfirm' }],
          on: { confirm: d => resizeBase64Image({ src: d, width: 50, height: 50 }).then(dd => resolve(dd)) }
        })
      })
    }
  }
}
