import LoginForm from '@/components/Account/Login/LoginForm';
import Footer from '@/components/Layout/Footer/Footer';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '@/Images/banner.webp';

const LoginPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="login" backGround={backGround}>
                login
            </Banner>
            <LoginForm />
            <Footer></Footer>
        </div>
    );
};

export default LoginPage;
