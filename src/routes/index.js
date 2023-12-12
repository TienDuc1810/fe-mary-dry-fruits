import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import SiteMapPage from '@/pages/SiteMap/SiteMapPage';
import ProductPage from '@/pages/ProductPage';
import LoginPage from '@/pages/Account/LoginPage';
import RegisterPage from '@/pages/Account/RegisterPage';
import UserPage from '@/pages/UserPage';

const routes = [
    {path: '/',component: HomePage },
    {path: '/contact',component: ContactPage },
    {path: '/sitemap',component: SiteMapPage },
    {path: '/product',component: ProductPage },
    {path: '/account/login',component: LoginPage },
    {path: '/account/register',component: RegisterPage },
]

const privateRoutes = [
    { path: '/user', component: UserPage },
];


export { routes, privateRoutes };