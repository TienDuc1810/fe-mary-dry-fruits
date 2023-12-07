import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/service/UserService';
import { toast,Flip } from 'react-toastify';

function UserPage() {
    const navigate = useNavigate();

    const token = localStorage.getItem('jwt');
    if (!token) {
        navigate('/account/login');
    }

    const handleLogout = async () => {
        let res = await logoutUser();

        if (res && res.success === true  && token) {
            navigate('/account/login');
            localStorage.removeItem('jwt');
            toast.success("Đăng xuất thành công", {
                transition: Flip,
                autoClose: 2000,
              });
        } else {
            toast.error("Đăng xuất thất bại", {
                transition: Flip,
                autoClose: 2000,
              });
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
