import React from 'react';
import Banner from '@/components/Layout/Banner/Banner';
import background from '@/Images/banner.webp';
import ContactUs from '@/components/Layout/contactUs/Contact_Index';
import Footer from '@/components/Layout/Footer/Footer_Index';

const ContactPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="contact us" backGround={background}>
                contact us
            </Banner>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default ContactPage;
