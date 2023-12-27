import { StarCheck, Star } from '@/icons';
import  { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './CommentProduct.module.scss';
import axios from '@/service/axios';
import { useParams } from 'react-router-dom';

const cx = classNames.bind(styles);

const CommentProduct = ({ reload }) => {
    const id = useParams();
    const [data, setData] = useState({
        content: '',
        product_id: id.id,
        star: 0,
    });

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

            <div className={cx('start')}>
                <span>Quality Evalution: </span>
                {Array.from({ length: 5 }).map((_, index) =>
                    index < data.star ? (
                        <StarCheck key={index} className={cx('check')} />
                    ) : (
                        <Star key={index} className={cx('no-check')} />
                    ),
                )}
            </div>
            
            <div className={cx('comment-product')}>
                <textarea placeholder="Comment" value={data.content} onChange={(e) => handleContent(e)}></textarea>
                <button onClick={handleComment}>Submit</button>
            </div>
        </div>
    );
};

export default CommentProduct;
