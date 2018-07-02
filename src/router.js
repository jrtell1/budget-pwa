import Vue from 'vue'
import Router from 'vue-router'

import DashboardLayout from './views/Layout/DashboardLayout.vue'
import Dashboard from './views/Dashboard.vue'
import UserProfile from './views/UserProfile.vue'
import TableList from './views/TableList.vue'
import Typography from './views/Typography.vue'
import Icons from './views/Icons.vue'
import Notifications from './views/Notifications.vue'

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
