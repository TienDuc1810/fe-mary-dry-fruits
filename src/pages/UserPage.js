import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/service/UserService';
import { toast, Flip } from 'react-toastify';

function UserPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem('jwt');

    const handleLogout = async () => {
        let res = await logoutUser();

        if (res && res.success === true && token) {
            navigate('/account/login');
            localStorage.removeItem('jwt');
            toast.success('Logout success', {
                transition: Flip,
                autoClose: 2000,
            });
        } 
        else {
            toast.error('Logout failed', {
                transition: Flip,
                autoClose: 2000,
            });
        }
    };

    return (
        <div>
            <h2>Hello User</h2>
            <div>
                <button onClick={() => handleLogout()}>Logout</button>
            </div>
        </div>
    );
}

export default UserPage;
