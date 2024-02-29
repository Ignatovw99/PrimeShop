import { useSelector } from "react-redux";
import { Navbar, Nav, Container } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

import ShoppingCartLink from "./ShoppingCartLink";
import PublicNavbar from "./PublicNavbar";
import PrivateNavbar from "./PrivateNavbar";

import logo from "../../assets/logo.png";

const Header = () => {
    const { isAuthenticated } = useSelector(state => state.auth);

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
                        <Navbar.Brand>
                            <img src={logo} alt="PrimeShop's logo" />
                            PrimeShop
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <ShoppingCartLink />
                            
                            {isAuthenticated ?
                                <PrivateNavbar /> :
                                <PublicNavbar />
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
