import classNames from 'classnames';
import styles from './Store.module.scss';

import Detail from '@/components/Layout/Detail/Detail';
import ListCategory from './ListCategory/ListCategory';
import Index from '@/components/Layout/AboutUs/Index';

const cx = classNames.bind(styles);

const Store = () => {
    return (
        <div className={cx('container')}>
            {/* <Detail/> */}
            {/* <ListCategory /> */}
            <Index />
        </div>
    );
};

export default Store;
