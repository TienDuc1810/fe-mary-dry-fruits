import LoginForm from '@/components/Account/Login/LoginForm';
import Header from '@/components/Layout/Header/Header_Index';


const LoginPage = () => {
    return (
        <div>
            <Header title={'Login'}/>
            <LoginForm />
        </div>
    );
};

export default LoginPage;
