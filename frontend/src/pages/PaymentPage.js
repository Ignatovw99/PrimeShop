import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import FormContainer from "../components/FormContainer";
import RadioButtonInput from "../components/RadioButtonInput";

import { addPaymentMethod } from "../slices/shoppingCartSlice";

const paymentOptions = [
    { label: "PayPal", value: "PayPal" },
    { label: "Card", value: "Card" }
];

const PaymentPage = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const [paymentMethod, setPaymentMethod] = useState(shoppingCart.paymentMethod);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (!shoppingCart.shippingAddress) {
            navigate("/shipping");
        }
    }, [shoppingCart, navigate]);

    const paymentSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addPaymentMethod(paymentMethod));
        navigate("/place-order")
    };

    return (
        <FormContainer>
            <h1>Payment Method</h1>

            <Form onSubmit={paymentSubmitHandler}>
                <RadioButtonInput
                    label="Select Method"
                    options={paymentOptions}
                    name="paymentMethod"
                    className="my-2"
                    checkedValue={paymentMethod}
                    onChangeHandler={(e) => setPaymentMethod(e.target.value)}
                />

                <Button type="submit" variant="primary">
                    Continue
                </Button>
            </Form>

        </FormContainer>
    );
};

export default PaymentPage;
