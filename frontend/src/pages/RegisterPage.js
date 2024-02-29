import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

import FormContainer from "../components/FormContainer";
import InputField from "../components/InputField";
import Loader from "../components/Loader";

import { setAuthetnication } from "../slices/authSlice";
import { useRegisterMutation } from "../slices/api/authApiSlice";

import useRedirect from "../hooks/useRedirect";

const RegisterPage = () => {
    const [user, setUser] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        name: ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { isAuthenticated } = useSelector(state => state.auth);
    const [register, { isLoading }] = useRegisterMutation();
    const redirect = useRedirect();

    useEffect(() => {
        if (isAuthenticated) {
            navigate(redirect);
        }
    }, [isAuthenticated, navigate, redirect]);

    const changeUserValueHandler = (event) => {
        const fieldElement = event.target;

        setUser(state => ({
            ...state,
            [fieldElement.id]: fieldElement.value
        }));
    };

    const registerSubmitHandler = async (event) => {
        event.preventDefault();

        try {
            const userProfile = await register(user).unwrap();
            dispatch(setAuthetnication({ ...userProfile }));
            navigate(redirect);
        } catch (error) {
            toast.error(error?.data?.message || error?.error);
        }
    };

    return (
        <FormContainer>
            <h1>Sign Up</h1>

            <Form onSubmit={registerSubmitHandler}>
                <InputField
                    label={"Email Address"}
                    controlId={"email"}
                    type={"email"}
                    placeholder={"Enter your email ..."}
                    value={user.email}
                    changeValueHandler={changeUserValueHandler}
                />
                <InputField
                    label={"Full Name"}
                    controlId={"name"}
                    type={"text"}
                    placeholder={"Enter your full name ..."}
                    value={user.name}
                    changeValueHandler={changeUserValueHandler}
                />
                <InputField
                    label={"Password"}
                    controlId={"password"}
                    type={"password"}
                    placeholder={"Enter your password ..."}
                    value={user.password}
                    changeValueHandler={changeUserValueHandler}
                />
                <InputField
                    label={"Confirm Password"}
                    controlId={"confirmPassword"}
                    type={"password"}
                    placeholder={"Confirm Password ..."}
                    value={user.confirmPassword}
                    changeValueHandler={changeUserValueHandler}
                />

                <Button
                    type="submit"
                    variant="dark"
                    disabled={isLoading}
                >
                    Sign Up
                </Button>
            </Form>

            {isLoading && <Loader />}

            <Row className="py-3">
                <Col>
                    Already have an account?{" "}
                    <Link to={`/login?redirect=${redirect}`}>
                        Login
                    </Link>
                </Col>
            </Row>
        </FormContainer>
    );
};

export default RegisterPage;
