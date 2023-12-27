import React, { useEffect, useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CommentProduct.module.scss';
import axios from '@/service/axios';
import { StarYellow, StarCheck } from '@/icons';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const CommentProduct = ({ reload }) => {
    const id = useParams();
    const [data, setData] = useState({
        content: '',
        product_id: id.id,
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
            console.log(data);
            let res1 = await axios.post('/api/review/get_comment', {
                content: data.content,
                product_id: data.product_id,
            });
            let res2 = await axios.post('/api/review/get_star', {
                star: data.star < 1 ? 5 : data.star,
                product_id: data.product_id,
            });
            console.log(res1, res2);
            reload();
        } catch (error) {
            console.error('Comment error:', error);
        }
    };
    useEffect(() => {
        setData({ ...data, product_id: id.id });
    }, [id]);

    return (
        <div className={cx('container-comment')}>
            <div className={cx('star')}>
                {[...Array(data.star)].map((_, i) => (
                    <div onClick={() => setStart(i + 1)} key={i}>
                        <StarYellow />
                    </div>
                ))}
                {[...Array(5 - data.star)].map((_, i) => (
                    <div onClick={() => setStart(i + data.star + 1)} key={i}>
                        <StarCheck />
                    </div>
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
