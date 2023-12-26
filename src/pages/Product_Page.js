import Banner from '@/components/Layout/Banner/Banner';
import images from '@/assets';
import Footer from '@/components/Layout/Footer/Footer_Index';
import LayoutProduct from '@/components/Layout/LayoutProduct/LayoutProduct';

const ProductPage = () => {
    return (
        <div>
            <Banner pageMain="all" pageEtra="Rosehip Berries" backGround={images.banner}>
                product
            </Banner>
            <LayoutProduct />
            <Footer />
        </div>
    );
};

export default ProductPage;
