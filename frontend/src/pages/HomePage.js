import { Row, Col } from "react-bootstrap";

import Product from "../components/Product";
import AlertMessage from "../components/AlertMessage";
import Loader from "../components/Loader";

import { useGetProductsQuery } from "../slices/api/productApiSlice";

const HomePage = () => {
    const { data: products, isFetching, error } = useGetProductsQuery();

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
            <h1>Leatest Products</h1>
            <Row>
                {products.map(product =>
                    <Col
                        key={product.id}
                        sm={12}
                        md={6}
                        lg={4}
                        xl={3}
                    >
                        <Product product={product} />
                    </Col>
                )}
            </Row>
        </>
    );
};

export default HomePage;
