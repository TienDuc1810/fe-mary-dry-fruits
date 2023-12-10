import RegisterForm from '@/components/Account/Register/RegisterForm';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '@/Images/banner.webp';
import Footer from '@/components/Layout/Footer/FooterIndex';

const RegisterPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="register" backGround={backGround}>
                register
            </Banner>
            <RegisterForm />
            <Footer/>
        </div>
    );
};


export default RegisterPage;
