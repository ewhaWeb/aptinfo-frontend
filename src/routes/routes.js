import DashboardLayout from '../components/Dashboard/Layout/DashboardLayout.vue'
// GeneralViews
import NotFound from '../components/GeneralViews/NotFoundPage.vue'

// Admin pages

import DetailedView from 'src/components/Dashboard/Views/DetailedView'
import Dashboard from 'src/components/Dashboard/Views/Dashboard'
import Icons from 'src/components/Dashboard/Views/Icons'

const routes = [{
        path: '/',
        component: DashboardLayout,
        redirect: '/admin/detail'
    }, {
        path: '/admin/detail/areainfo/:guCode/:targetYear/:targetMonth',
        name: '/admin/detail/areainfo',
        component: DetailedView,
        props: (route) => {
            const guCode = Number.parseInt(route.params.guCode, 10)
            return { guCode }
        }
    }, {
        path: '/admin/detail/mdata/:guCode/:targetYear',
        name: '/admin/detail/mdata',
        component: DetailedView,
        props: (route) => {
            const guCode = Number.parseInt(route.params.guCode, 10)
            return { guCode }
        }
    },
    {
        path: '/',
        component: DashboardLayout,
        redirect: '/admin/detail'
    },
    {
        path: '/admin',
        component: DashboardLayout,
        redirect: '/admin/detail',
        children: [{
                path: 'dashboard',
                name: 'Dashboard',
                component: Dashboard
            },
            {
                path: 'detail',
                name: 'Detailed View',
                component: DetailedView
            },
            /* {
                 path: 'detail/allAreaData',
                 name: 'Detailed View',
                 component: DetailedView
             },*/
            {
                path: 'icons',
                name: 'icons',
                component: Icons
            }
        ]
    },
    { path: '*', component: NotFound }
]

export default routes