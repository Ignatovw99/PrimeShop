import { useParams, Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Card, Button } from "react-bootstrap";

import Rating from "../components/Rating";
import Loader from "../components/Loader";
import AlertMessage from "../components/AlertMessage";
import AddToCart from "../components/AddToCart";

import { useGetProductDetailsQuery } from "../slices/api/productApiSlice";

import { ROUTES } from "../router";
import { PRODUCT_IN_STOCK, PRODUCT_OUT_OF_STOCK } from "../constants";

const ProductPage = () => {
    const { id: productId } = useParams();
    const { data: product, isFetching, error } = useGetProductDetailsQuery(productId);

    if (error) {
        return (
            <AlertMessage variant="danger">
                {error.data?.message}
            </AlertMessage>
        );
    }

    if (isFetching) {
        return <Loader />;
    }

    return (
        <>
            <Link to={ROUTES.INDEX}>
                <Button variant="light" className="my-4">
                    Go Back
                </Button>
            </Link>

            <Row>
                <Col md={5}>
                    <Image
                        src={product.image}
                        alt={product.name}
                        fluid
                    />
                </Col>

                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                reviewsCount={product.reviewsCount}
                            />
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>
                                        <strong>${product.price}</strong>
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>
                                        {product.availableQuantity > 0 ?
                                            PRODUCT_IN_STOCK :
                                            PRODUCT_OUT_OF_STOCK
                                        }
                                    </Col>
                                </Row>
                            </ListGroup.Item>

                            <AddToCart product={product} />
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default ProductPage;
