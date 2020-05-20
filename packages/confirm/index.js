/*
 * @Author: your name
 * @Date: 2020-04-16 09:15:23
 * @LastEditTime: 2020-05-20 10:09:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \youcai-m-pwa\src\plugins\confirm\confirm.js
 */ 
// 引入Confirm组件
import Confirm from './main.vue'

let ConfirmPlugin = {
  install(Vue, opts) {
    let ConfirmC = Vue.extend(Confirm)
    let ConfirmInstance = new ConfirmC()
    ConfirmInstance.$mount(document.createElement('div'))
    document.body.appendChild(ConfirmInstance.$el)
    Vue.prototype.$confirm = function (options) {
      Object.assign(ConfirmInstance, opts, options)
      ConfirmInstance.show = true
      return ConfirmInstance.confirm()
    }
  }
}

export default ConfirmPlugin
