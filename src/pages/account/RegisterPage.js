import RegisterForm from '@/components/Account/Register/RegisterForm';
import Footer from '@/components/Layout/Footer/Footer';
<<<<<<< HEAD
import Header from '@/components/Layout/Header/HeaderIndex';


const RegisterPage = () => {
    return (
        <div>
            <Header/>
            <RegisterForm />
            <Footer/>
        </div>
    );
};

=======
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '@/Images/banner.webp';

const RegisterPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="register" backGround={backGround}>
                register
            </Banner>
            <RegisterForm />
            <Footer></Footer>
        </div>
    );
};

>>>>>>> origin/bao
export default RegisterPage;
