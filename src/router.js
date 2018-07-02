import Vue from 'vue'
import Router from 'vue-router'

import DashboardLayout from './views/Layout/DashboardLayout'
import Dashboard from './views/Dashboard'
import UserProfile from './views/UserProfile'
import TableList from './views/TableList'
import Typography from './views/Typography'
import Icons from './views/Icons'
import Notifications from './views/Notifications'
import Categories from './views/Categories'

Vue.use(Router);

const routes = [{
  path: '/',
  component: DashboardLayout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      name: 'Dashboard',
      component: Dashboard
    },
    {
      path: 'categories',
      name: 'Categories',
      component: Categories
    },
    {
      path: 'user',
      name: 'User Profile',
      component: UserProfile
    },
    {
      path: 'table',
      name: 'Table List',
      component: TableList
    },
    {
      path: 'typography',
      name: 'Typography',
      component: Typography
    },
    {
      path: 'icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: 'notifications',
      name: 'Notifications',
      component: Notifications
    }
  ]
}];

export default new Router({
  routes, // short for routes: routes
  linkExactActiveClass: 'nav-item active'
});
