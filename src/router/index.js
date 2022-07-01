import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Inventory from '../views/Inventory.vue'

import Add from '../views/routesInventory/Add.vue'
import List from '../views/routesInventory/List.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/inventory',
    name: 'Inventory',
    component: Inventory,
    children: [
      { path: 'add', component: Add },
      { path: 'list', component: List },
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
