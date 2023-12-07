import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/service/UserService';

function UserPage() {
    const navigate = useNavigate();

    const token = localStorage.getItem('jwt');
    if (!token) {
        navigate('/account/login');
    }
    
    const handleLogout = async () => {
        let res = await logoutUser();

        if (res && res.success === true) {
            console.log('Đăng xuất thành công');
            navigate('/account/login');
            localStorage.removeItem('jwt');
        } else {
            console.log('Đăng xuất thất bại');
        }
    };
    return (
        <>
            <h2>Hello User</h2>
            <div>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </>
    );
}

export default UserPage;
