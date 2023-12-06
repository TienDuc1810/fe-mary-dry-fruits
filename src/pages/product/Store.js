import classNames from "classnames";
import styles from './Header.module.scss'


const cx = classNames.bind(styles);

const Store = () => {
  return (
    <div className={cx('container')}>Store</div>
  )
}

export default Store