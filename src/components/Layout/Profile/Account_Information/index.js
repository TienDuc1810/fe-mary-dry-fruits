import UserInfo from './User_Info';
import UserContact from './User_contact';
import classNames from 'classnames/bind';
import styles from '../Profile.module.scss';
import { useEffect, useState } from 'react';
import { dataUser } from '@/service/User_Service';

const cx = classNames.bind(styles);

const AccountInformation = () => {
    const [data, getData] = useState('');
    
    useEffect(  ()=>{
        const fetchData = async () => {

            let res = await dataUser();
            
            getData(res.response)
            console.log(data)
        }
        fetchData()
    },[])

    return (
        <div className={cx('profile-detail-container')}>
            <div className={cx('profile-detail-wrapper')}>
                <h2 className={cx('profile-detail-heading')}>Account Information</h2>
                <UserInfo data={data}/>
            </div>
            <UserContact data={data}/>
        </div>
    );
};

export default AccountInformation;
