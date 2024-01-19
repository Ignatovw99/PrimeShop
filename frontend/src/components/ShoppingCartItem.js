import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, Image, Button } from 'react-bootstrap';
import { FaTrash } from "react-icons/fa";

import ProductQuantitySelect from "./ProductQuantitySelect";

import { addItemToCart, removeItemFromCart } from "../slices/shoppingCartSlice";

const ShoppingCartItem = ({
    item
}) => {
    const dispatch = useDispatch();

    const changeItemQuantityHandler = (event) => {
        const quantity = Number(event.target.value);
        dispatch(addItemToCart({ ...item, quantity }));
    };

    const removeFromShoppingCartHandler = () => dispatch(removeItemFromCart(item.id));

    return (
        <Row>
            <Col md={2}>
                <Image src={item.image} alt={item.name} fluid rounded />
            </Col>
            <Col md={4}>
                <Link to={`/products/${item.id}`}>
                    {item.name}
                </Link>
            </Col>
            <Col md={2}>
                ${item.price}
            </Col>
            <Col md={2}>
                <ProductQuantitySelect
                    quantity={item.quantity}
                    availableQuantity={item.availableQuantity}
                    changeQuantityHandler={changeItemQuantityHandler}
                />
            </Col>
            <Col md={2}>
                <Button
                    type="button"
                    variant="light"
                    onClick={removeFromShoppingCartHandler}
                >
                    <FaTrash />
                </Button>
            </Col>
        </Row>
    );
};

export default ShoppingCartItem;
