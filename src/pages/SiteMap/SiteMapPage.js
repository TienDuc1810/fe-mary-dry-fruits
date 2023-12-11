import Header from "@/components/Layout/Header/HeaderIndex";
import Footer from "@/components/Layout/Footer/FooterIndex";
import classNames from 'classnames/bind';
import styles from './SiteMapPage.module.scss';

const cx = classNames.bind(styles);

const SiteMapPage = () => {
    return ( 
        <div className={cx('sitemap-container')}>
            <Header/>
            <div className={cx('sitemap-wrapper')}>Site Map</div>
            <Footer/>
        </div>

     );
}

export default SiteMapPage;