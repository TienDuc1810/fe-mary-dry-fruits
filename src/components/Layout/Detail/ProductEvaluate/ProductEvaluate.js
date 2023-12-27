import classNames from 'classnames/bind';
import styles from './ProductEvaluate.module.scss';

const cx = classNames.bind(styles);

const ProductEvaluate = () => {
    const star = 5;
    return (
        <div className={cx('customer-evaluate')}>
            <h4>Customer Reviewer</h4>
            <div className={cx('evaluate-star')}>
               
                <h5>Base on 2 reviews</h5>
            </div>
        </div>
    );
};

export default ProductEvaluate;
