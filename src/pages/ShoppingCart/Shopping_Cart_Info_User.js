import classNames from 'classnames/bind';
import styles from './Shopping_Cart.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

function ShoppingCartInfoUser() {
    const [edit, setEdit] = useState(false);
    const [name, setName] = useState('Tien Duc');
    const [email, setEmail] = useState('dotienduc@gmail.com');
    const [address, setAddress] = useState('70 Duong Dinh Hoi');
    const [phone, setPhone] = useState('0123456789');

    return (
        <>
            {edit === false ? (
                <div className={cx('cart-info-user')}>
                    <div className={cx('cart-user')}>
                        <div className={cx('cart-user-heading')}>
                            <p>Order Information</p>
                        </div>
                        <div className={cx('cart-user-detail')}>
                            <span className={cx('cart-user-title')}>Name</span>
                            <span>:</span>
                            <span className={cx('cart-user-result')}>{name}</span>
                        </div>
                        <div className={cx('cart-user-detail')}>
                            <span className={cx('cart-user-title')}>Email</span>
                            <span>:</span>
                            <span className={cx('cart-user-result')}>{email}</span>
                        </div>
                        <div className={cx('cart-user-detail')}>
                            <span className={cx('cart-user-title')}>Address</span>
                            <span>:</span>
                            <span className={cx('cart-user-result')}>{address}</span>
                        </div>
                        <div className={cx('cart-user-detail')}>
                            <span className={cx('cart-user-title')}>Phone</span>
                            <span>:</span>
                            <span className={cx('cart-user-result')}>{phone}</span>
                        </div>
                        <div className={cx('cart-user-outner-btn')}>
                            <button className={cx('cart-user-btn')} onClick={() => setEdit(true)}>
                                Change
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={cx('cart-info-user')}>
                    <div className={cx('cart-user')}>
                        <div className={cx('cart-user-heading')}>
                            <p>Order Information</p>
                        </div>
                        <div className={cx('cart-user-detail-edit')}>
                            <span>Name</span>
                            <input value={name} className={cx('cart-user-input-disable')} disabled />
                        </div>
                        <div className={cx('cart-user-detail-edit')}>
                            <span>Email</span>
                            <input value={email} className={cx('cart-user-input-disable')} disabled />
                        </div>
                        <div className={cx('cart-user-detail-edit')}>
                            <span>Address</span>
                            <input
                                value={address}
                                className={cx('cart-user-input')}
                                onChange={(e) => setAddress(e.target.value)}
                            />
                        </div>
                        <div className={cx('cart-user-detail-edit')}>
                            <span>Phone</span>
                            <input
                                value={phone}
                                className={cx('cart-user-input')}
                                onChange={(e) => setPhone(e.target.value)}
                            />
                        </div>
                        <div className={cx('cart-user-outner-btn')}>
                            <button className={cx('cart-user-btn')} onClick={() => setEdit(false)}>
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ShoppingCartInfoUser;
