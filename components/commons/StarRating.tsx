import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

interface StarRatingProps {
  rating: {
    rate: number;
    count: number;
  };
}

const calculateStars = (rating: number) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating - fullStars > 0 ? 1 : 0;
  const emptyStars = 5 - fullStars - halfStar;
  return { fullStars, halfStar, emptyStars };
};

const StarRating = ({ rating }: StarRatingProps) => {
  const { fullStars, halfStar, emptyStars } = calculateStars(rating.rate);

  return (
    <div className="flex gap-x-2 items-center">
      {Array(fullStars)
        .fill(null)
        .map((_, i) => (
          <BsStarFill key={i} />
        ))}
      {halfStar ? <BsStarHalf /> : null}
      {Array(emptyStars)
        .fill(null)
        .map((_, i) => (
          <BsStar key={i + fullStars + halfStar} />
        ))}
      <span className="text-gray-400 gap-y-1">{`${rating.rate} (${rating.count})`}</span>
    </div>
  );
};

export { StarRating };
