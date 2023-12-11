import classNames from 'classnames';
import styles from './Store.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import backGround from '../../Images/banner.webp';
import Detail from '@/components/Layout/Detail/Detail';
import img1 from '@/Images/img1.webp';
import imgMail from '@/Images/detailProduct.webp';

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx('container')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={backGround}>
                product
            </Banner>
            <Detail></Detail>
        </div>
    );
};

export default Store;
