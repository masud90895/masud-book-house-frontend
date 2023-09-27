import pic from "../assets/md-masud-rana.jpg";
import { IReview } from "../pages/DetailsBook";

interface IReviewProps {
  review: IReview;
}

const Review = ({ review }: IReviewProps) => {
  return (
    <div className="mx-10">
      <div className="flex flex-col gap-3 my-10 ">
        <div className="flex flex-col justify-start items-start text-gray-500">
          <div className="flex items-center">
            {review?.image ? (
              <img
                src={review?.image}
                alt=""
                className="w-10 h-10 rounded-full"
              />
            ) : (
              <img src={pic} alt="" className="w-10 h-10 rounded-full" />
            )}

            <p>{review?.name ? review?.name : "salim Al Sazu"}</p>
          </div>
          <div className="flex flex-col justify-center items-start mt-2">
            <p>{review?.description}</p>
            <p>{review?.createdAt}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
