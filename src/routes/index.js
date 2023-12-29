import HomePage from '@/pages/Home_Page';
import ContactPage from '@/pages/Contact_Page';
import SiteMapPage from '@/pages/SiteMap/SiteMapPage';
import ProductPage from '@/pages/Product_Page';
import LoginPage from '@/pages/Account/Login_Page';
import RegisterPage from '@/pages/Account/Register_Page';
import ShoppingCartPage from '@/pages/ShoppingCart/Shopping_Cart_Page';
import Nutritional from '@/pages/Nutritional ';
import Detail from '@/components/Layout/Detail/Detail_Index';
import UserPage from '@/pages/User_Page';
import AboutUs from '@/pages/About_Us';

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
    { path: '/account/profile', component: UserPage },
    { path: '/cart', component: ShoppingCartPage },
];

export default routes;
