import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '../../node_modules/@mdi/font/css/materialdesignicons.css'
import '../../node_modules/@fortawesome/fontawesome-free/css/all.css'
Vue.use(Vuetify)

export default new Vuetify(
  {icons: {
    iconfont: 'mdi' || 'fa'
  }
  })
