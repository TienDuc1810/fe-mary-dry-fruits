import { Route, Routes, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import routes from '@/routes';
import NavBar from './components/Layout/Navigation/Nav_Index';
import Footer from './components/Layout/Footer/Footer_Index';
import GlobalStyles from './components/GlobalStyles';

import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
    const location = useLocation();

    useEffect(() => {
        window.scroll(0, 0);
    }, [location]);

    return (
        <GlobalStyles>
            <NavBar />
            <Routes>
                {routes.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component />} />;
                })}
            </Routes>
            <Footer />
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition={Flip}
            />
        </GlobalStyles>
    );
}

export default App;
