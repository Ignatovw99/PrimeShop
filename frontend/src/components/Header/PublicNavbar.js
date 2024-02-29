import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";
import { FaUser } from 'react-icons/fa';

const PublicNavbar = () => {
    return (
        <LinkContainer to="/login">
            <Nav.Link>
                <FaUser /> Sign In
            </Nav.Link>
        </LinkContainer>
    );
};

export default PublicNavbar;
