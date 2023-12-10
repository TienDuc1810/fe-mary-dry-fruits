import React from 'react';
import Banner from '@/components/Layout/Banner/Banner';
import background from '@/Images/banner.webp';
import ContactUs from '@/components/Layout/contactUs/ContactUs';

const ContactPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="contact us" backGround={background}>
                contact us
            </Banner>
            <ContactUs></ContactUs>
        </div>
    );
};

export default ContactPage;
