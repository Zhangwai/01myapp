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
      path: '',
      redirect: '/film/nowplaying'
    }
  ]
}
