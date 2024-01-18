import { Form } from "react-bootstrap";

const ProductQuantitySelect = ({
    quantity,
    availableQuantity,
    changeQuantityHandler
}) => {
    const quantityOptions = [...Array(availableQuantity).keys()].map(i => i + 1);

    return (
        <Form.Control
            as="select"
            value={quantity}
            onChange={changeQuantityHandler}
        >
            {quantityOptions.map(quantityOption =>
                <option key={quantityOption} value={quantityOption}>
                    {quantityOption}
                </option>
            )}
        </Form.Control>
    );
};

export default ProductQuantitySelect;
