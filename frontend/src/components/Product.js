import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

import Rating from "./Rating";

const Product = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/products/${product.id}`}>
                <Card.Img
                    src={product.image}
                    variant="top"
                    className="product-card-image"
                />

                <Card.Body>
                    <Card.Title as="div" className="product-title">
                        <strong>{product.name}</strong>
                    </Card.Title>

                    <Card.Text as="div">
                        <Rating
                            value={product.rating}
                            reviewsCount={product.reviewsCount}
                        />
                    </Card.Text>

                    <Card.Text as="h3">
                        {product.price}
                    </Card.Text>
                </Card.Body>
            </Link>
        </Card>
    );
};

export default Product;
