import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';

import { ROUTES } from "../../router";

const PublicNavbar = () => {
    return (
        <LinkContainer to={ROUTES.LOGIN}>
            <Nav.Link>
                <FaUser /> Sign In
            </Nav.Link>
        </LinkContainer>
    );
};

export default PublicNavbar;
