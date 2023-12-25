import React, { useState } from 'react';

import classNames from 'classnames/bind';
import styles from './CategoryGram.module.scss';

const cx = classNames.bind(styles);

const CategoryGram = (props) => {
    const { number1, number2, number3, number4, number5, number6 } = props;
    const numberMain = [number1, number2, number3, number4, number5, , number6];
    const [selectedWeight, setSelectedWeight] = useState(null);

    const handleWeightSelection = (weight) => {
        setSelectedWeight(weight);
    };
    return (
        <div className={cx('category-gram')}>
            <div className={cx('price')}>
                {numberMain.map((weight) =>
                    weight !== null ? (
                        <button
                            key={weight}
                            className={cx('gram', { selected: selectedWeight === weight })}
                            onClick={() => handleWeightSelection(weight)}
                            disabled={selectedWeight === weight}
                        >
                            {weight}
                        </button>
                    ) : null
                )}
            </div>
        </div>
    );
};

export default CategoryGram;
