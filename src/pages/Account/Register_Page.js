import RegisterForm from '@/components/Account/Register/RegisterForm';
import Header from '@/components/Layout/Header/HeaderIndex';
import Footer from '@/components/Layout/Footer/Footer_Index';

const RegisterPage = () => {
    return (
        <div>
            <Header/>
            <RegisterForm />
            <Footer />
        </div>
    );
};

export default RegisterPage;
