import LoginForm from '@/components/Account/Login/LoginForm';
import Header from '@/components/Layout/Header/HeaderIndex';
import Footer from '@/components/Layout/Footer/Footer_Index';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <LoginForm />
            <Footer />
        </div>
    );
};

export default LoginPage;
