import { useNavigate } from 'react-router-dom';
import { logoutUser } from '@/service/User_Service';
import { toast, Flip } from 'react-toastify';
import { useEffect } from 'react';
import Header from '@/components/Layout/Header/Header_Index';
import Profile from '@/components/Layout/Profile/Profile_Index';

import classNames from 'classnames/bind';
import styles from './userpage.module.scss';

const cx = classNames.bind(styles);

function UserPage() {
    const navigate = useNavigate();
    const token = localStorage.getItem('jwt');

    useEffect(() => {
        let check = localStorage.getItem('jwt');
        if (!check) {
            navigate('/account/login');
        }
    }, []);

    const handleLogout = async () => {
        let res = await logoutUser();

        if (res && res.success === true && token) {
            navigate('/account/login');
            localStorage.removeItem('jwt');
            toast.success('Logout success', {
                transition: Flip,
                autoClose: 2000,
            });
        } else {
            toast.error('Logout failed', {
                transition: Flip,
                autoClose: 2000,
            });
        }
    };

    return (
        <div>
            <Header title={'Profile'}/>
            <Profile />

            <div>
                <button onClick={() => handleLogout()} className={cx('Btn')}>
                    <div className={cx('sign')}>
                        <svg viewBox="0 0 512 512">
                            <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                        </svg>
                    </div>
                    <div className={cx('text')}>Logout</div>
                </button>
            </div>
        </div>
    );
}

export default UserPage;
