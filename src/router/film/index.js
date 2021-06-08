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
      path: 'detail/n/:filmId',
      name: 'yyDetail',
      components: {
        default: () => import('@/views/Film/nowplaying'),
        detail: () => import(/* webpackChunkName: "yjgroup" */ '@/views/Film/detail')
      },
      props: {
        detail: true
      }
    },
    {
      path: 'detail/c/:filmId',
      name: 'yyDetail',
      components: {
        default: () => import('@/views/Film/comingsoon'),
        detail: () => import(/* webpackChunkName: "yjgroup" */ '@/views/Film/detail')
      },
      props: {
        detail: true
      }
    },
    {
      path: '',
      redirect: '/film/nowplaying'
    }
  ]
}
