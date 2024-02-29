import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { NavDropdown } from "react-bootstrap";
import { toast } from "react-toastify";

import { useLogoutMutation } from "../../slices/api/authApiSlice";
import { clearAuthentication } from "../../slices/authSlice";

const PrivateNavbar = () => {
    const { userProfile } = useSelector(state => state.auth);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [logout] = useLogoutMutation();

    const logoutHandler = async () => {
        try {
            await logout().unwrap();
            dispatch(clearAuthentication());
            navigate("/login");
        } catch (error) {
            toast.error(error?.data?.message || error?.error);
        }
    };

    return (
        <NavDropdown
            title={userProfile.name}
            id="auth-nav"
        >
            <LinkContainer to="/profile">
                <NavDropdown.Item>Profile</NavDropdown.Item>
            </LinkContainer>
            <NavDropdown.Item onClick={logoutHandler}>
                Logout
            </NavDropdown.Item>
        </NavDropdown>
    );
};

export default PrivateNavbar;
