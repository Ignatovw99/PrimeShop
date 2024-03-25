import { Form, Col } from "react-bootstrap";

const RadioButtonInput = ({
    label,
    options,
    name,
    className,
    checkedValue,
    onChangeHandler
}) => {
    return (
        <Form.Group>
            <Form.Label as="legend">
                {label}
            </Form.Label>
            <Col>
                {options.map(option => (
                    <Form.Check
                        key={option.value}
                        type="radio"
                        className={className}
                        label={option.label}
                        id={option.value}
                        name={name}
                        value={option.value}
                        checked={option.value === checkedValue}
                        onChange={onChangeHandler}
                    />
                ))}
            </Col>
        </Form.Group>
    );
};

export default RadioButtonInput;
