import { Spinner } from "react-bootstrap";

const Loader = () => {
    return (
        <Spinner 
            animation="border"
            role="status"
            className="loader-spinner"
        />
    );
};

export default Loader;