import Vue from 'vue'
import VueRouter from 'vue-router'
import signup from '../views/signup.vue'
import sidenav from "../views/sidenav.vue";


Vue.use(VueRouter)

const routes = [

    {
        path: "/",
        name: "signup",
        component: signup,
    },
    {
        path: "/sidenav",
        name: "sidenav",
        component: sidenav,
        children: [{
                path: '/dashboard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "dashboard" */ '../views/dashboard.vue'),
            },
            {
                path: '/inprogress',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "inprogress" */ '../views/inprogress.vue'),
            },
            {
                path: '/review',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "review" */ '../views/review.vue'),
            },

            {
                path: '/rectify',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "rectify" */ '../views/rectify.vue'),
            },
            {
                path: '/database',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "database" */ '../views/database.vue'),
            },
            {
                path: '/reports',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "reports" */ '../views/reports.vue'),
            },
            {
                path: '/newuser',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "newuser" */ '../views/newuser.vue'),
            },
            {
                path: '/settings',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "settings" */ '../views/settings.vue'),
            },
            {
                path: '/pancard',
                // route level code-splitting
                // this generates a separate chunk (about.[hash].js) for this route
                // which is lazy-loaded when the route is visited.
                component: () =>
                    import ( /* webpackChunkName: "pancard" */ '../views/pancard.vue'),
            },


        ]
    },


]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router