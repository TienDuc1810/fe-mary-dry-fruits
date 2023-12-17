import classNames from 'classnames';
import styles from './Store.module.scss';
import ListCategory from './ListCategory/ListCategory';

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx('container')}>
            <ListCategory />
        </div>
    );
};

export default Store;
