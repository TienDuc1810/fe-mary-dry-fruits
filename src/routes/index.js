import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import SiteMapPage from '@/pages/SiteMap/SiteMapPage';
import ProductPage from '@/pages/ProductPage';
import ShoppingCartPage from '@/pages/ShoppingCart/ShoppingCartPage';
import LoginPage from '@/components/Account/Login/LoginForm';
import RegisterPage from '@/components/Account/Login/LoginForm';
import UserPage from '@/pages/UserPage';

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/sitemap', component: SiteMapPage },
    { path: '/product', component: ProductPage },
    { path: '/addtocard', component: ShoppingCartPage },

    { path: '/account/login', component: LoginPage },
    { path: '/account/register', component: RegisterPage },
];

const privateRoutes = [
    { path: '/user', component: UserPage },
    { path: '/cart', component: ShoppingCartPage },
];

export { routes, privateRoutes };
