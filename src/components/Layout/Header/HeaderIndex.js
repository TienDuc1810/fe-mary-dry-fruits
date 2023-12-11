
import classNames from "classnames";
import styles from './HeaderIndex.module.scss'
import backGround from '../../../Images/banner.webp'
import Banner from "../Banner/Banner";



const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('container')}>
            <Banner title={""} backGround={backGround}>
                register
            </Banner>
        </div>
    );
}

export default Header;
