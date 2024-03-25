import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutNavLink = ({
    currentStep,
    linkOrder,
    link,
    title,
    disabled
}) => {
    return (
        <Nav.Item>
            {currentStep >= linkOrder && !disabled ? (
                <LinkContainer to={link}>
                    <Nav.Link>{title}</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>{title}</Nav.Link>
            )}
        </Nav.Item>
    );
};

export default CheckoutNavLink;
