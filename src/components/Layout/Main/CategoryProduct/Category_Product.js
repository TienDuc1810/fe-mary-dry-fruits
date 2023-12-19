import classNames from 'classnames/bind';
import styles from './Category.module.scss';
import CategoryItem from './Category_Item';
import images from '@/assets';

const cx = classNames.bind(styles);

function CategoryProduct() {
    return (
        <div className={cx('category-container')}>
            <div className={cx('category-wrapper')}>
                <div className={cx('category-item', 'item-1')}>
                    <CategoryItem image={images.category} name={'Fenugreek'} description={'Common Ingredients'} />
                </div>
                <div className={cx('category-item')}>
                    <CategoryItem image={images.category} name={'Fenugreek'} description={'Common Ingredients'} />
                </div>
                <div className={cx('category-item', 'item-3')}>
                    <CategoryItem image={images.category} name={'Fenugreek'} description={'Common Ingredients'} />
                </div>
            </div>
        </div>
    );
}

export default CategoryProduct;
