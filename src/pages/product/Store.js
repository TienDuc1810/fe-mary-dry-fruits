import classNames from 'classnames';
import styles from './Store.module.scss';

import Banner from '@/components/Layout/Banner/Banner';
import backGround from '../../Images/banner.webp';
import Detail from '@/components/Layout/Detail/Detail';
import img1 from '@/Images/img1.webp';
import imgMail from '@/Images/detailProduct.webp';

import Footer from '@/components/Layout/Footer/Footer';

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx('container')}>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={backGround}>
                product
            </Banner>
            <Detail imgMain={imgMail} img1={img1} ing2={1} ing3={1} ing4={1} ing5={1}>
                Rosehip Berries
            </Detail>
            <Footer></Footer>
        </div>
    );
};

export default Store;
