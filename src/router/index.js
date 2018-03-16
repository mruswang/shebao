import Vue from 'vue'
import Router from 'vue-router'
import Inquire from '@/components/inquire/inquire'
import Accounts from '@/components/accounts/accounts'
import Financial from '@/components/financial/financial'
import Sets from '@/components/set/set'
import Working from '@/components/working/working'
import Notice from '@/components/notice/notice'
import AddNotice from '@/components/addnotice/addnotice'
import Customer from '@/components/customer/customer'
import CustomerDetails from '@/components/customer-details/customer-details'
import Order from '@/components/order/order'
import OrderDetails from '@/components/order-details/order-details'
import Refund from '@/components/refund/refund'
import RefundDetails from '@/components/refund-details/refund-details'
import Operation from '@/components/operation/operation'
import Tixing from '@/components/tixing/tixing'
import Moban from '@/components/moban/moban'
import Jilu from '@/components/jilu/jilu'
import Tongji from '@/components/tongji/tongji'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/inquire/notice'
    },
    {
      path: '/inquire',
      redirect: '/inquire/notice'
    },
    {
      path: '/accounts',
      redirect: '/accounts/tixing'
    },
    {
      path: '/accounts/tixing',
      redirect: '/accounts/tixing/moban'
    },
    {
      path: '/inquire',
      name: 'Inquire',
      component: Inquire,
      children: [{
        path: 'notice',
        name: 'Notice',
        component: Notice,
        children: [{
          path: 'add-notice',
          name: 'AddNotice',
          component: AddNotice
        }]
      }, {
        path: 'customer',
        name: 'Customer',
        component: Customer,
        children: [{
          path: 'details/:id',
          name: 'CustomerDetails',
          component: CustomerDetails
        }]
      }, {
        path: 'order',
        name: 'Order',
        component: Order,
        children: [{
          path: 'details/:id',
          name: 'OrderDetails',
          component: OrderDetails
        }]
      }, {
        path: 'refund',
        name: 'Refund',
        component: Refund,
        children: [{
          path: 'details/:id',
          name: 'RefundDetails',
          component: RefundDetails
        }]
      }, {
        path: 'operation',
        name: 'Operation',
        component: Operation
      }]
    },
    {
      path: '/accounts',
      name: 'Accounts',
      component: Accounts,
      children: [{
        path: 'tixing',
        name: 'Tixing',
        component: Tixing,
        children: [{
          path: 'moban',
          name: 'Moban',
          component: Moban
        }, {
          path: 'jilu',
          name: 'Jilu',
          component: Jilu
        }, {
          path: 'tongji',
          name: 'Tongji',
          component: Tongji
        }]
      }]
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
