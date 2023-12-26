import React from 'react';
import Header from '@/components/Layout/Header/Header_Index';
import NutritionalAndContent from '@/components/Layout/NutritionalAndContent/NutritionalAndContent';

const Nutritional = () => {
    return (
        <div>
            <Header title={'Nutritional'}/>
            <NutritionalAndContent />
        </div>
    );
};

export default Nutritional;
