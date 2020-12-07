import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';

Vue.config.productionTip = false;
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');

if (document.documentElement.clientWidth > 500) {
  const img = document.createElement('img');
  img.src = './qrqcode.gith.png';
  img.style.position = 'fixed';
  img.style.left='50%'
  img.style.top='50%'
  img.style.transform='translate(-50%,-50%)'
  img.style.boxShadow='0 0 10px rgba(0,0,0,0.25)'
  document.body.appendChild(img)
  setTimeout(function (){
    window.alert('请用手机浏览')
  },100)
}