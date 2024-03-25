import { useSelector } from "react-redux";
import { Nav, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart } from 'react-icons/fa';

import { getShoppingCartItemsQuantity } from "../../utils/shoppingCartUtils";

import { ROUTES } from "../../router";

const ShoppingCartLink = () => {
    const { items } = useSelector(state => state.shoppingCart);

    const cartItemsQuantity = getShoppingCartItemsQuantity(items);

    return (
        <LinkContainer to={ROUTES.SHOPPING_CART}>
            <Nav.Link>
                <FaShoppingCart /> Shopping Cart
                {cartItemsQuantity > 0 &&
                    <Badge pill bg="success" className="cart-badge-header">
                        {cartItemsQuantity}
                    </Badge>
                }
            </Nav.Link>
        </LinkContainer>
    );
};

export default ShoppingCartLink;
