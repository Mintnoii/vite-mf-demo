const routes = [
    {
    path: '/',
    redirect: { name: 'test' },
  },
  {
    name: 'test',
    path: '/test',
    component: () =>  import('@/views/test/index.vue')
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   meta: defaultAdminMeta,
  //   component: () => import('@/pages/index.vue')
  // },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: '404',
  //   component: () => import('@/pages/404.vue')
  // }
]

export default routes
