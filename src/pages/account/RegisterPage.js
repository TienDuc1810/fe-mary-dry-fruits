import RegisterForm from '@/components/Account/Register/RegisterForm';
import Banner from '@/components/Layout/Banner/Banner';
import backGround from '@/Images/banner.webp';

const RegisterPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="register" backGround={backGround}>
                register
            </Banner>
            <RegisterForm />
        </div>
    );
};


export default RegisterPage;
