import Vue from 'vue';
import Router from 'vue-router';
import Main from '@/components/Main';
import ProductsList from '@/components/ProductsList';
import AddProduct from '@/components/AddProduct';
import TestHome from '@/components/test/TestHome';
import TestAbout from '@/components/test/TestAbout';
import TestContact from '@/components/test/TestContact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ProductsList',
      component: ProductsList,
    },
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/add',
      name: 'AddProduct',
      component: AddProduct,
    },
    {
      path: '/home',
      name: 'TestHome',
      component: TestHome,
    },
    {
      path: '/about',
      name: 'TestAbout',
      component: TestAbout,
    },
    {
      path: '/contact',
      name: 'TestContact',
      component: TestContact,
    },
  ],
});
