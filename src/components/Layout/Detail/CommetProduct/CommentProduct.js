import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CommentProduct.module.scss';
import nostar from '@/Images/icont/star-line.svg';
import starYello from '@/Images/icont/star (1).svg';
import axios from '@/service/axios'; // đây là axios đã config

const cx = classNames.bind(styles);

const CommentProduct = ({ product_id }) => {
    const [data, setData] = useState({
        content: '',
        product_id: product_id,
        star: 0,
    });

    const setStart = (star) => {
        setData({ ...data, star: star });
    };

    const handleContent = (e) => {
        setData({ ...data, content: e.target.value });
    };

    const handleComment = async () => {
        try {
            let res1 = await axios.post('/api/review/get_comment', {
                content: data.content,
                product_id: data.product_id,
            });
            let res2 = await axios.post('/api/review/get_star', {
                star: data.star,
                product_id: data.product_id,
            });
            console.log(res1, res2);
        } catch (error) {
            console.error('Comment error:', error);
        }
    };

    return (
        <div className={cx('container-comment')}>
            <div className={cx('start')}>
                {[...Array(data.star)].map((_, i) => (
                    <img key={i} src={starYello} alt={'star yellow'} onClick={() => setStart(i + 1)} />
                ))}
                {[...Array(5 - data.star)].map((_, i) => (
                    <img
                        key={i + data.star + 1}
                        src={nostar}
                        alt={'no star'}
                        onClick={() => setStart(i + data.star + 1)}
                    />
                ))}
            </div>
            <div className={cx('comment-product')}>
                <textarea placeholder="Comment" value={data.content} onChange={(e) => handleContent(e)}></textarea>
                <button onClick={handleComment}>Submit</button>
            </div>
        </div>
    );
};

export default CommentProduct;
