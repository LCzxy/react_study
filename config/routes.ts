export default [
  { path: '/login', component: './login' },
  { path: '/', redirect: 'bug' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/bug', component: './bug' },
      { path: '/product', component: './product' },
    ],
  },
];
