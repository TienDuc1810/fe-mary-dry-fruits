import LoginForm from '@/components/Account/Login/LoginForm';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '@/Images/banner.webp';

const LoginPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="login" backGround={backGround}>
                login
            </Banner>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
