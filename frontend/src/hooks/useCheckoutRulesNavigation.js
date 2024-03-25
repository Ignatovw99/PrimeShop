import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { isArrayEmpty } from "../utils/common";

import { ROUTES } from "../router";

const useCheckoutRulesNavigation = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const navigate = useNavigate();

    useEffect(() => {
        if (isArrayEmpty(shoppingCart.items)) {
            navigate(ROUTES.SHOPPING_CART);
        } else if (!shoppingCart.shippingAddress.address) {
            navigate(ROUTES.SHIPPING);
        } else if (!shoppingCart.paymentMethod) {
            navigate(ROUTES.PAYMENT);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
};

export default useCheckoutRulesNavigation;
