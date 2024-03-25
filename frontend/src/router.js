import {
    createBrowserRouter,
    createRoutesFromElements,
    Route
} from 'react-router-dom';

import App from './App';

import PrivateRoute from './routes/PrivateRoute';

import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';
import PaymentPage from './pages/PaymentPage';

export const ROUTES = {
    INDEX: "/",
    SHOPPING_CART: "/shopping-cart",
    LOGIN: "/login",
    REGISTER: "/register",
    LOGOUT: "/logout",
    SHIPPING: "/shipping",
    PAYMENT: "/payment",
    PLACE_ORDER: "/place-order"
};

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path={ROUTES.INDEX} element={<App />}>
            <Route index={true} element={<HomePage />} />
            <Route path="/products/:id" element={<ProductPage />} />
            <Route path={ROUTES.SHOPPING_CART} element={<ShoppingCartPage />} />
            <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

            <Route path="" element={<PrivateRoute />}>
                <Route path={ROUTES.SHIPPING} element={<ShippingPage />} />
                <Route path={ROUTES.PAYMENT} element={<PaymentPage />} />
            </Route>
        </Route>
    )
);

export default router;
