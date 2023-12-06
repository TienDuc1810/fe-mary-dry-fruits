import LoginForm from '@/components/Account/Login/LoginForm';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '../../Images/banner.webp';
import Header from '@/components/Layout/Header';

import Footer from '@/components/Layout/Footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Header></Header>
           
            <LoginForm />
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
