import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/user',
    meta: {
      title: i18nRaw.t('menus.user.root')
    },
    children: [
      {
        path: 'update',
        name: RouteName.user.update,
        component: () => import('@/views/user-management/IndexView.vue'),
        meta: {
          title: i18nRaw.t('menus.user.update')
        }
      }
    ]
  }
]

export default routes
