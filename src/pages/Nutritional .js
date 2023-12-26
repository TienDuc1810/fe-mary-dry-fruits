import React from 'react';
import Header from '@/components/Layout/Header/HeaderIndex';
import NutritionalAndContent from '@/components/Layout/NutritionalAndContent/NutritionalAndContent';
import Footer from '@/components/Layout/Footer/Footer_Index';

const Nutritional = () => {
    return (
        <div>
            <Header/>
            <NutritionalAndContent />
            <Footer />
        </div>
    );
};

export default Nutritional;
