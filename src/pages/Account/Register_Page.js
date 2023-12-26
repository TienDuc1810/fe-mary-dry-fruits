import RegisterForm from '@/components/Account/Register/RegisterForm';
import Header from '@/components/Layout/Header/Header_Index';

const RegisterPage = () => {
    return (
        <div>
            <Header title={'Register'}/>
            <RegisterForm />
        </div>
    );
};

export default RegisterPage;
