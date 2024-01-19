import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup, Card, Button } from 'react-bootstrap';

import AlertMessage from "../components/AlertMessage";
import ShoppingCartItem from "../components/ShoppingCartItem";

import { getShoppingCartItemsQuantity } from "../utils/shoppingCartUtils";

const ShoppingCartPage = () => {
    const shoppingCart = useSelector(state => state.shoppingCart);
    const { itemsPrice, items: cartItems } = shoppingCart;

    const isShoppingCartEmpty = cartItems.length === 0;

    return (
        <Row>
            <Col md={8}>
                <h1 className="shopping-cart-title">Shopping Cart</h1>
                {isShoppingCartEmpty &&
                    <AlertMessage>
                        Your shopping cart is empty <Link to="/">Go Back</Link>
                    </AlertMessage>
                }
                {!isShoppingCartEmpty &&
                    <ListGroup variant="flush">
                        {cartItems.map(item =>
                            <ListGroup.Item key={item.id}>
                                <ShoppingCartItem item={item} />
                            </ListGroup.Item>
                        )}
                    </ListGroup>
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({getShoppingCartItemsQuantity(cartItems)}) items
                            </h2>
                            <span>
                                ${itemsPrice.toFixed(2)}
                            </span>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Button
                                type="button"
                                variant="dark"
                                disabled={isShoppingCartEmpty}
                            >
                                Proceed To Checkout
                            </Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>
        </Row>
    );
};

export default ShoppingCartPage;
