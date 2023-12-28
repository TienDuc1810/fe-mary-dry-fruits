import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import routes from '@/routes';
import { ToastContainer, Flip } from 'react-toastify';
import NavBar from './components/Layout/Navigation/Nav_Index';
import Footer from './components/Layout/Footer/Footer_Index';

function App() {
   

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
