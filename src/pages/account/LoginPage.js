import LoginForm from '@/components/Account/Login/LoginForm';
import Header from '@/components/Layout/Header/HeaderIndex.js';

import Footer from '@/components/Layout/Footer/Footer';

const LoginPage = () => {
    return (
        <div>
            <Header/>
            <LoginForm />
            <Footer/>
        </div>
    );
};

export default LoginPage;
