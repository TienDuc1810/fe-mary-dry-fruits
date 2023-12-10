import LoginForm from '@/components/Account/Login/LoginForm';
<<<<<<< HEAD
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

=======
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

>>>>>>> origin/bao
export default LoginPage;
