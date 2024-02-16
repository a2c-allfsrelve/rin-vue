import LayoutBasic  from '../views/containers/layouts/LayoutBasic.vue'

const homeRouter = {
  path: '/', 
  name: 'home', 
  component: LayoutBasic,
  children: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/containers/home/UserHome.vue')
    }
  ]

}

export default homeRouter