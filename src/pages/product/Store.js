import classNames from 'classnames';
import styles from './Store.module.scss';

import Detail from '@/components/Layout/Detail/Detail';
import ListCategory from './ListCategory/ListCategory';

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx('container')}>
            {/* <Detail/> */}
            <ListCategory />
        </div>
    );
};

export default Store;
