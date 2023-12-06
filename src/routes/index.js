import HomePage from '@/pages/HomePage';
import ContactPage from '@/pages/ContactPage';
import SiteMapPage from '@/pages/SiteMapPage';
import LoginPage from '@/pages/account/LoginPage';
import RegisterPage from '@/pages/account/RegisterPage';

const routes = [
    {path: '/',component: HomePage },
    {path: '/contact',component: ContactPage },
    {path: '/sitemap',component: SiteMapPage },
    {path: '/account/login',component: LoginPage },
    {path: '/account/register',component: RegisterPage },
]

export default routes;