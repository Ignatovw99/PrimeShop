import Star from "./Star";

const RATING_STARS_COUNT = 5;

const Rating = ({
    value,
    reviewsCount
}) => {
    const ratingStars = Array.from(Array(RATING_STARS_COUNT).keys(), current => current + 1);

    return (
        <div className="rating">
            {ratingStars.map(starValue =>
                <Star
                    key={starValue}
                    wholeStarValue={starValue}
                    value={value}
                />
            )}
            {reviewsCount &&
                <span className="rating-text">
                    {reviewsCount} reviews
                </span>
            }
        </div>
    );
};

export default Rating;
