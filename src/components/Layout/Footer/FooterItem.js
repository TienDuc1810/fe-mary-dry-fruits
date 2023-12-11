import classNames from 'classnames/bind';
import styles from './FooterIndex.module.scss';

const cx = classNames.bind(styles);

function FooterItem({title,item_1,item_2,item_3,item_4,item_5}) {
    return (
        <div className={cx('footer-item')}>
            <h4 className={cx('footer-item-title')}>{title}</h4>
            <ul className={cx('footer-item-wrapper')}>
                <li className={cx('footer-item-child')}>{item_1}</li>
                <li className={cx('footer-item-child')}>{item_2}</li>
                <li className={cx('footer-item-child')}>{item_3}</li>
                <li className={cx('footer-item-child')}>{item_4}</li>
                <li className={cx('footer-item-child')}>{item_5}</li>
            </ul>
        </div>
    );
}

export default FooterItem;
