import classNames from 'classnames/bind';
import styles from './Order.module.scss';
import Button from '@/components/Button/ButtonIndex';
import { useState } from 'react';

const cx = classNames.bind(styles);

const OrderComponent = ({ index, time }) => {
    const [histotyStatus, setHistoryStatus] = useState(false);

    const handleGetHistory = () => {
        setHistoryStatus(true);
    };
    return (
        <div>
            <h2 className={cx('profile-detail-heading')}>Order Information</h2>
            {histotyStatus ? (
                <div className={cx('popup-container')}>
                    <div className={cx('history-order-overlay')}></div>
                    <div className={cx('history-order-container')}>
                        <div className={cx('history-order-index')}>
                            <span> Order #1</span>
                            <span>Create ad: 30/12/2023 15:00</span>
                        </div>
                        <div className={cx('history-order-title')}>
                            <span className={cx('history-order-heading')}>Item Details</span>
                        </div>
                        <div className={cx('history-order-details')}>
                            <table className={cx('order-table')}>
                                <thead>
                                    <tr>
                                        <th>STT</th>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Size</th>
                                        <th>Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>1</td>
                                        <td>Product 1</td>
                                        <td>$10.00</td>
                                        <td>2</td>
                                        <td>250 Gram</td>
                                        <td>$20.00</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className={cx('history-order-result')}>
                            <span className={cx('history-order-heading')}>Orther Details</span>

                            <div className={cx('history-order-item')}>
                                <span className={cx('history-order-sup')}>Status Order</span>
                                <div className={cx('history-order-des')}>
                                    <span>:</span>
                                    <span>Success</span>
                                </div>
                            </div>
                            <div className={cx('history-order-item')}>
                                <span className={cx('history-order-sup')}>SubTotal</span>
                                <div className={cx('history-order-des')}>
                                    <span>:</span>
                                    <span>$200.00</span>
                                </div>
                            </div>
                            <div className={cx('history-order-item')}>
                                <span className={cx('history-order-sup')}>Discount Amount</span>
                                <div className={cx('history-order-des')}>
                                    <span>:</span>
                                    <span>-10%</span>
                                </div>
                            </div>
                            <div className={cx('history-order-item')}>
                                <span className={cx('history-order-sup')}>Total Price</span>
                                <div className={cx('history-order-des')}>
                                    <span>:</span>
                                    <span>$180.00</span>
                                </div>
                            </div>
                        </div>
                        <div className={cx('history-order-btn')} onClick={()=>setHistoryStatus(false)}>
                            <Button text={'Close'} blackText />
                        </div>
                    </div>
                </div>
            ) : null}
            <span onClick={() => handleGetHistory()}>
                <Button text={'Get History'} blackText />
            </span>
        </div>
    );
};

export default OrderComponent;
