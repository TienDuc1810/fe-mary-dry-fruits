import React from 'react';

import Banner from '@/components/Layout/Banner/Banner';
import images from '@/assets';
import NutritionalAndContent from '@/components/Layout/NutritionalAndContent/NutritionalAndContent';
import Footer from '@/components/Layout/Footer/Footer_Index';

const Nutritional = () => {
    return (
        <div>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                nutritional
            </Banner>
            <NutritionalAndContent />
            <Footer />
        </div>
    );
};

export default Nutritional;
