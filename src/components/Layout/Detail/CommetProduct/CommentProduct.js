import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CommentProduct.module.scss';

import axios from '@/service/axios'; // đây là axios đã config v

// import axios from 'axios'; cái này là axios chua config ko dùng

const cx = classNames.bind(styles);

const CommentProduct = () => {
    const [content, setContent] = useState('');
    const data = {
        content,
        product_id: 1,
    };

    const handleComment = async () => {
        console.log(data);
        try {
            let res = await axios.post('/api/review/get_comment', data);
            console.log(res);
        } catch (error) {
            console.error('Comment error:', error);
        }
    };

    return (
        <div className={cx('comment-product')}>
            <textarea placeholder="Comment" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
            <button onClick={handleComment}>Submit</button>
        </div>
    );
};

export default CommentProduct;
