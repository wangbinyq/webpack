import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cn from './cn'

const locales = {
  cn
}

Vue.use(VueI18n)
Vue.config.lang = 'cn'
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang])
})
