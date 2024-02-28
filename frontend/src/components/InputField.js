import { Form } from "react-bootstrap";

const InputField = ({
    controlId,
    label,
    type,
    placeholder,
    value,
    changeValueHandler
}) => {
    return (
        <Form.Group
            className="my-3"
            controlId={controlId}
        >
            <Form.Label>{label}</Form.Label>
            <Form.Control
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={changeValueHandler}
            />
        </Form.Group>
    );
};

export default InputField;
