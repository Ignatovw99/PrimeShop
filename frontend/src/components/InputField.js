import { Form } from "react-bootstrap";

const InputField = ({
    controlId,
    className,
    label,
    type,
    placeholder,
    value,
    changeValueHandler
}) => {
    return (
        <Form.Group
            className={className}
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

InputField.defaultProps = {
    className: "my-3"
};

export default InputField;
