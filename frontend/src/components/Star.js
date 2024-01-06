import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Star = ({
    wholeStarValue,
    value
}) => {
    const halfStarValue = wholeStarValue - 0.5;

    return (
        <span>
            {value >= wholeStarValue ?
                <FaStar /> :
                value >= halfStarValue ?
                    <FaStarHalfAlt /> :
                    <FaRegStar />
            }
        </span>
    );
};

export default Star;
