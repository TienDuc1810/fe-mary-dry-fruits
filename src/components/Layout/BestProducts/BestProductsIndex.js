import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';

const cx = classNames.bind(styles);

function BestProducts() {
    return ( 
        <div className={cx('container')}>
            <h2>BestProducts</h2>
            <p>Pellentesque massa placerat duis ultricies lacus sit sed.</p>
            <span>Sao</span>
            <div>
                <button>Seed</button>
                <button>Spicy</button>
            </div>
            <div>
                <div>
                    <img src="" alt=""/>
                    <div>
                        <div>Ten san pham</div>
                        <div>Gia</div>
                        <div>Sao</div>
                    </div>
                </div>
                <div>
                    <button value={"<"}></button>
                    <button value={">"}></button>
                </div>
            </div>
        </div>
     );
}

export default BestProducts;