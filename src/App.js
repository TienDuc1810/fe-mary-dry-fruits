import { Route,Routes } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import routes from './routes';

function App() {
    return (
        <GlobalStyles>
            <Routes>
                {routes.map((route, index) => {
                    return <Route key={index} path={route.path} element={<route.component/>}/>
                })}
            </Routes>
        </GlobalStyles>
    );
}

export default App;
