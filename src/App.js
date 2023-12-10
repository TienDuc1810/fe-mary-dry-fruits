import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { routes, privateRoutes } from '@/routes';
import { ToastContainer,Flip  } from 'react-toastify';

function App() {
    const allRoutes = [...routes, ...privateRoutes];
    return (
        <GlobalStyles>
            <Routes>
                {allRoutes.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component />} />
                })}
            </Routes>
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
            {/* Same as */}
            <ToastContainer />
        </GlobalStyles>
    );
}

export default App;
