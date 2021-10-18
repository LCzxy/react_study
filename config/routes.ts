export default [
  { path: '/login', component: './login' },
  { path: '/', redirect: 'home' },
  {
    path: '/',
    component: '@/layouts/index',
    routes: [
      { path: '/home', component: './home' },
      { path: '/product', component: './product' },
    ],
  },
];
