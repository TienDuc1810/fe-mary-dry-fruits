import Main from '@/components/Layout/Main';
import Footer from '@/components/Layout/Footer/FooterIndex';
import images from '@/assets';

const HomePage = () => {
    const backGroundImage = {
        backgroundImage: `url(${images.br_image_3})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <>
            <Main />
            <Footer background={backGroundImage} />
        </>
    );
};
export default HomePage;
