import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Row, Col, ListGroup, Button } from "react-bootstrap";

import ProductQuantitySelect from "./ProductQuantitySelect";

import { addItemToCart } from "../slices/shoppingCartSlice";

import { ROUTES } from "../router";

const AddToCart = ({ product }) => {
    const [quantity, setQuantity] = useState(1);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const addToCartHandler = () => {
        dispatch(addItemToCart({ ...product, quantity }));
        navigate(ROUTES.SHOPPING_CART);
    };

    const productInStock = product.availableQuantity > 0;

    return (
        <>
            <ListGroup variant="flush">
                {productInStock &&
                    <ListGroup.Item>
                        <Row>
                            <Col>Quantity</Col>
                            <Col>
                                <ProductQuantitySelect
                                    quantity={product.quantity}
                                    availableQuantity={product.availableQuantity}
                                    changeQuantityHandler={event => setQuantity(Number(event.target.value))}
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                }

                <ListGroup.Item>
                    <Button
                        className="btn-block"
                        disabled={!productInStock}
                        onClick={addToCartHandler}
                    >
                        Add to Cart
                    </Button>
                </ListGroup.Item>
            </ListGroup>
        </>
    );
};

export default AddToCart;
