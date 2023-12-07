import classNames from "classnames";
import styles from './Header.module.scss'

const cx = classNames.bind(styles);

function Header() {
    return ( 
        <h2 className={cx('container')}>Header</h2>
     );
}

export default Header;