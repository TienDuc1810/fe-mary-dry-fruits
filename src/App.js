import { Route, Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import { routes, privateRoutes } from '@/routes';

function App() {
    const allRoutes = [...routes, ...privateRoutes];
    return (
        <GlobalStyles>
            <Routes>
                {allRoutes.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component />} />;
                })}
            </Routes>
        </GlobalStyles>
    );
}

export default App;
