import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import SiteMapPage from '@/pages/SiteMap/SiteMapPage';
import ProductPage from '@/pages/ProductPage';
import LoginPage from '@/pages/Account/Login_Page';
import RegisterPage from '@/pages/Account/Register_Page';
import ShoppingCartPage from '@/pages/ShoppingCart/Shopping_Cart_Page';
import Nutritional from '@/pages/Nutritional ';
import Detail from '@/components/Layout/Detail/Detail';
import UserPage from '@/pages/UserPage';
import AboutUs from '@/pages/AboutUs';

const routes = [
    { path: '/', component: HomePage },
    { path: '/contact', component: ContactPage },
    { path: '/sitemap', component: SiteMapPage },
    { path: '/product', component: ProductPage },
    { path: '/product-detail/:id', component: Detail },
    { path: '/about-us', component: AboutUs },
    { path: '/account/login', component: LoginPage },
    { path: '/account/register', component: RegisterPage },
    { path: '/product/nutritional', component: Nutritional },
    { path: '/user', component: UserPage },
    { path: '/cart', component: ShoppingCartPage },
];

export default routes;
