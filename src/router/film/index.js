export default {
  path: '/film',
  component: () => import('@/views/Film'),
  children: [
    {
      path: 'nowplaying',
      component: () => import('@/views/Film/nowplaying')
    },
    {
      path: 'comingsoon',
      component: () => import('@/views/Film/comingsoon')
    },
    {
      path: 'city',
      component: () => import(/* webpackChunkName: "yjgroup" */ '@/views/Film/city')
    },
    {
      path: 'search',
      component: () => import(/* webpackChunkName: "yjgroup" */ '@/views/Film/search')
    },
    {
      path: '',
      redirect: '/film/nowplaying'
    }
  ]
}
