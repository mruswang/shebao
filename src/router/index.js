import Vue from 'vue'
import Router from 'vue-router'
import Inquire from '@/components/inquire/inquire'
import Accounts from '@/components/accounts/accounts'
import Financial from '@/components/financial/financial'
import Sets from '@/components/set/set'
import Working from '@/components/working/working'
import Notice from '@/components/notice/notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/inquire'
    },
    {
      path: '/inquire',
      name: 'Inquire',
      component: Inquire,
      children: [{
        path: 'notice',
        name: 'Notice',
        component: Notice
      }]
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts
    },
    {
      path: '/financial',
      name: 'Financial',
      component: Financial
    },
    {
      path: '/set',
      name: 'Sets',
      component: Sets
    },
    {
      path: '/working',
      name: 'Working',
      component: Working
    }
  ],
  linkActiveClass: 'active'
})
