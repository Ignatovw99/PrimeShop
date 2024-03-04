import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';

import App from './App';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<App />}>
            <Route index={true} element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path="/shopping-cart" element={<ShoppingCartPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
        </Route>
    )
);

export default router;
