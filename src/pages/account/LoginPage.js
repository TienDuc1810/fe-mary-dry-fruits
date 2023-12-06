import LoginForm from '@/components/Account/Login/LoginForm';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '../../Images/banner.webp';
import Footer from '@/components/Layout/Footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="account" backGround={backGround}>
                account
            </Banner>
            <LoginForm />
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
