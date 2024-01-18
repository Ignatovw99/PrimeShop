import { useSelector } from "react-redux";
import { Navbar, Nav, Container, Badge } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaShoppingCart, FaUser } from 'react-icons/fa';

import { getShoppingCartItemsQuantity } from "../utils/shoppingCartUtils";

const Header = () => {
    const { items: cartItems } = useSelector(state => state.shoppingCart);

    return (
        <header>
            <Navbar
                bg="dark"
                data-bs-theme="dark"
                expand="lg"
                collapseOnSelect
            >
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand>PrimeShop</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <LinkContainer to="/shopping-cart">
                                <Nav.Link>
                                    <FaShoppingCart /> Shopping Cart
                                    {cartItems.length > 0 &&
                                        <Badge pill bg="success" className="cart-badge-header">
                                            {getShoppingCartItemsQuantity(cartItems)}
                                        </Badge>
                                    }
                                </Nav.Link>
                            </LinkContainer>
                            <LinkContainer to="/login">
                                <Nav.Link>
                                    <FaUser /> Sign In
                                </Nav.Link>
                            </LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
