import { Nav } from "react-bootstrap";

import CheckoutNavLink from "./CheckoutNavLink";

import { ROUTES } from "../../router";

// CheckoutSteps
const CheckoutNavBar = ({ currentStep }) => {
    return (
        <Nav className="justify-content-center mb-4">
            <CheckoutNavLink
                currentStep={currentStep}
                linkOrder={1}
                link={{
                    pathname: ROUTES.LOGIN,
                    search: `?redirect=${ROUTES.SHOPPING_CART}`
                }}
                title={"Sign In"}
            />

            <CheckoutNavLink
                currentStep={currentStep}
                linkOrder={2}
                link={ROUTES.SHIPPING}
                title={"Shipping"}
            />

            <CheckoutNavLink
                currentStep={currentStep}
                linkOrder={3}
                link={ROUTES.PAYMENT}
                title={"Payment"}
            />

            <CheckoutNavLink
                currentStep={currentStep}
                linkOrder={4}
                link={ROUTES.PLACE_ORDER}
                title={"Place Order"}
            />
        </Nav>
    );
};

export default CheckoutNavBar;
