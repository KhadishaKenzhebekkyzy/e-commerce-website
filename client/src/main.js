// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import store from './store'
import Registration from './components/Registration.vue'
import PasswordRecover from './components/PasswordRecover.vue'
import NewPassword from './components/NewPassword.vue'
import Success from './components/Success.vue'
import Login from './components/Login.vue'
import Information from './components/PersonalArea/Information.vue'
import MyAnnouncements from './components/PersonalArea/MyAnnouncements.vue'
import MyAnnouncementsActive from './components/PersonalArea/MyAnnouncementsActive.vue'
import MyEnterprises from './components/PersonalArea/MyEnterprises.vue'
import AddAnnouncement from './components/PersonalArea/AddAnnouncement.vue'
import EditAnnouncement from './components/PersonalArea/EditAnnouncement.vue'
import CheckData from './components/PersonalArea/CheckData.vue'
import AddEnterprise from './components/PersonalArea/AddEnterprise.vue'
import MySubscriptions from './components/PersonalArea/MySubscriptions.vue'


const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Registration
    },
    {
      path: '/sendEmail',
      name: 'sendEmail',
      component: PasswordRecover
    },
    {
      path: '/success',
      name: 'success',
      component: Success
    },
    {
      path: '/resetPassword/:token',
      name: 'resetPassword',
      component: NewPassword
    },
    {
      path: '/personalArea/information',
      name: 'information',
      component: Information
    },
    {
      path: '/personalArea/myAnnouncements',
      name: 'myAnnouncements',
      component: MyAnnouncements
    },
    {
      path: '/personalArea/myAnnouncementsActive',
      name: 'myAnnouncementsActive',
      component: MyAnnouncementsActive
    },
    {
      path: '/personalArea/myAnnouncementsActive/editAnnouncement',
      name: 'editAnnouncement',
      component: EditAnnouncement
    },
    {
      path: '/personalArea/myEnterprises',
      name: 'myEnterprises',
      component: MyEnterprises
    },
    {
      path: '/personalArea/myAnnouncements/addAnnouncement',
      name: 'addAnnouncement',
      component: AddAnnouncement
    },
    {
      path: '/personalArea/myAnnouncements/addAnnouncement/checkData',
      name: 'checkData',
      component: CheckData
    },
    {
      path: '/personalArea/myEnterprises/addEnterprise',
      name: 'addEnterprise',
      component: AddEnterprise
    },
    {
      path: '/personalArea/mySubscriptions',
      name: 'mySubscriptions',
      component: MySubscriptions
    },
  ]
})

Vue.config.productionTip = false

new Vue({
  router, 
  store,
  render: h => h(App),
}).$mount('#app')

