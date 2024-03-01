import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import InputField from "../components/InputField";

import { addShippingAddress } from "../slices/shoppingCartSlice";

const ShippingPage = () => {
    const { shippingAddress } = useSelector(state => state.shoppingCart);

    const [shipping, setShipping] = useState({
        address: shippingAddress?.address || "",
        city: shippingAddress?.city || "",
        postalCode: shippingAddress?.postalCode || "",
        country: shippingAddress?.country || ""
    });

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const shippingSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(addShippingAddress(shipping));
        navigate("/payment");
    };

    const changeShippingValueHandler = (event) => {
        const fieldElement = event.target;

        setShipping(state => ({
            ...state,
            [fieldElement.id]: fieldElement.value
        }));
    };

    return (
        <FormContainer>
            <h1>Shipping</h1>

            <Form onSubmit={shippingSubmitHandler}>
                <InputField
                    label={"Address"}
                    controlId={"address"}
                    className={"my-2"}
                    type={"text"}
                    placeholder={"Enter address"}
                    value={shipping.address}
                    changeValueHandler={changeShippingValueHandler}
                />
                <InputField
                    label={"City"}
                    controlId={"city"}
                    className={"my-2"}
                    type={"text"}
                    placeholder={"Enter city"}
                    value={shipping.city}
                    changeValueHandler={changeShippingValueHandler}
                />
                <InputField
                    label={"Postal Code"}
                    controlId={"postalCode"}
                    className={"my-2"}
                    type={"text"}
                    placeholder={"Enter postal code"}
                    value={shipping.postalCode}
                    changeValueHandler={changeShippingValueHandler}
                />
                <InputField
                    label={"Country"}
                    controlId={"country"}
                    className={"my-2"}
                    type={"text"}
                    placeholder={"Enter country"}
                    value={shipping.country}
                    changeValueHandler={changeShippingValueHandler}
                />


                <Button
                    type="submit"
                    variant="primary"
                    className="my-2"
                >
                    Continue
                </Button>
            </Form>
        </FormContainer>
    );
};

export default ShippingPage;