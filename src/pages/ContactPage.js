import React from 'react';
import Banner from '@/components/Layout/Banner/Banner';
import background from '@/Images/banner.webp';
import ContactUs from '@/components/Layout/contactUs/ContactUs';
import Footer from '@/components/Layout/Footer/Footer';

const ContactPage = () => {
    return (
        <div>
            <Banner pageMain="home" pageEtra="contact us" backGround={background}>
                contact us
            </Banner>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default ContactPage;
