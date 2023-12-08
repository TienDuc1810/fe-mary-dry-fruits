import classNames from 'classnames/bind';
import styles from './BestProducts.module.scss';
import { useState } from 'react';
import images from '@/assets/images';
import { Star, StarCheck, StarHalf } from '@/icons';

const cx = classNames.bind(styles);

function BestProducts() {
    const [activeClass, setActiveClass] = useState(true);

    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <div className={cx('product-home-title')}>
                    <h2 className={cx('product-home-text-heading')}>BestProducts</h2>
                    <p className={cx('product-home-text-description')}>
                        Pellentesque massa placerat duis ultricies lacus sit sed.
                    </p>
                    <img src={images.star_image} alt="start" />
                </div>

                <div className={cx('product-home-show')}>
                    <div className={cx('product-home-wapper-btn')}>
                        <button className={cx('product-home-btn', { active: activeClass })}>
                            <div className={cx('product-home-text-btn')}>Dried Seeds</div>
                        </button>
                        <button className={cx('product-home-btn')}>
                            <div className={cx('product-home-text-btn')}>Spicy Masalas</div>
                        </button>
                    </div>

                    <div className={cx('product-home-container')}>
                        <ul className={cx('product-home-wrapper')}>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className={cx('product-home-main')}>
                                <div className={cx('product-home-border-line-1')}></div>
                                <div className={cx('product-home-border-line-2')}></div>
                                <div className={cx('product-home-border-line-3')}></div>
                                <div className={cx('product-home-border-line-4')}></div>
                                <div className={cx('product-home-image')}>
                                    <a href="/">
                                        <img
                                            src={images.product_1}
                                            alt="product"
                                            className={cx('product-home-image-size')}
                                        />
                                    </a>
                                </div>
                                <div className={cx('product-home-detail')}>
                                    <div className={cx('product-home-outner-name')}>
                                        <a href="/" className={cx('product-home-name')}>
                                            Black Cardamom
                                        </a>
                                    </div>
                                    <div className={cx('product-home-price')}>
                                        <span className={cx('product-home-money')}>$569.00</span>
                                    </div>
                                    <div className={cx('product-home-star')}>
                                        <ul className={cx('product-home-outner-star')}>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <StarCheck className={cx('check')}/>
                                            </li>
                                            <li className={cx('product-home-star-image')}>
                                                <Star className={cx('no-check')}/>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                           
                           
                        </ul>
                        <div className={cx('')}>
                            <button value={'<'} className={cx('')}></button>
                            <button value={'>'} className={cx('')}></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BestProducts;
