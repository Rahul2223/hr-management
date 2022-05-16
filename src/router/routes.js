const routes = [{
        path: '/',
        component: () =>
            import ('layouts/MainLayout.vue'),
        children: [{
                path: '',
                component: () =>
                    import ('pages/PageHome.vue'),
                name: 'Home'
            },
            {
                path: '/login',
                component: () =>
                    import ('src/pages/Login.vue'),
                name: 'Login'
            },
            {
                path: '/user',
                component: () =>
                    import ('src/pages/Users.vue'),
                name: 'User'
            },
            {
                path: '/manager',
                component: () =>
                    import ('src/pages/Manager.vue'),
                name: 'Manager'
            },
            {
                path: '/admin',
                component: () =>
                    import ('src/pages/Admin.vue'),
                name: 'Admin'
            }
        ]
    },


    // Always leave this as last one,
    // but you can also remove it
    {
        path: '*',
        component: () =>
            import ('pages/Error404.vue')
    }
]

export default routes