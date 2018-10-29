import AppModal from '@/components/modals/AppModal';

const Modal = {
  install(Vue, options) {
    this.EventBus = new Vue()
    Vue.component('app-modal', AppModal)
    Vue.prototype.$modal = {
      show(params) {
        Modal.EventBus.$emit('show', params)
      },
      hide() {
        Modal.EventBus.$emit('hide')
      }
    }
  }
}

export default Modal
