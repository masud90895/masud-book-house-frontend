import { useNavigate, useParams } from "react-router-dom";

import { IBook } from "../Interface/book.interface";
import { useForm } from "react-hook-form";
import { IUser, RootState } from "../Interface/login";
import Swal from "sweetalert2";
import { useAppSelector } from "../Redux/hook";
import {
  useAddReadingMutation,
  useAddWishMutation,
  useDeleteBookMutation,
  useGetReviewsQuery,
  usePostReviewMutation,
  useSingleBookQuery,
} from "../Redux/features/books/bookApi";
import Review from "../components/Review";
import DetailsBooksPage from "../components/DetailsBooksPage";

export type IReview = {
  name?: string;
  email?: string;
  image?: string | undefined;
  description: string;
  _id?: string;
  createdAt?: string;
};

const DetailsBook = () => {
  const user: IUser | null | undefined = useAppSelector(
    (state: RootState) => state.auth
  );

  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<IReview>();

  const { id } = useParams();

  const [postReview] = usePostReviewMutation();

  const postMyReview = (data: IReview) => {
    const review = {
      id: id,
      data: {
        name: user?.name,
        description: data.description,
        email: user?.email,
      },
    };
    postReview(review);
    reset();
  };

  const { data } = useSingleBookQuery(id);

  const {
    data: reviews,
    isLoading,
    isError,
  } = useGetReviewsQuery(id, { pollingInterval: 2000 });

  const details: IBook = data?.data;

  let gettingReviews;

  if (isLoading) {
    gettingReviews = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isError && !isLoading && reviews?.data?.length == 0) {
    gettingReviews = (
      <div className="items-center text-2xl font-extrabold">
        No Reviews Found
      </div>
    );
  }

  if (!isLoading && reviews?.data?.length > 0) {
    gettingReviews = reviews?.data.map((review: IReview) => (
      <Review review={review} key={review._id} />
    ));
  }

  const [deleteBook] = useDeleteBookMutation();

  const handleDeleteBook = () => {
    deleteBook(id);
    window.alert(`Are you sure you want delete ${details.title}`);
    navigate("/books");
  };

  const [addWishList, { isSuccess, isError: wishError }] = useAddWishMutation();

  const addWish = () => {
    const wish = {
      bookId: details?._id,
      userId: user?.user?._id,
    };
    addWishList(wish);

    if (isSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You added this to wish list",
        showConfirmButton: false,
        timer: 500,
      });
    }

    if (wishError) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "somthing occured wrong",
        showConfirmButton: false,
        timer: 100,
      });
    }
  };

  //Reading part

  const [addReadBook, { isSuccess: readSuccess, isError: readError }] =
    useAddReadingMutation();

  const addRead = () => {
    const reading = {
      bookId: details?._id,
      userId: user?.user?._id,
    };
    addReadBook(reading);

    if (readSuccess) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "You added this to Read list",
        showConfirmButton: false,
        timer: 500,
      });
    }

    if (readError) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "somthing has occured",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="mx-20">
      <DetailsBooksPage
        details={details}
        user={user}
        handleDeleteBook={handleDeleteBook}
        addWish={addWish}
        addRead={addRead}
      />
      <hr className="border-black border-1 mx-10" />
      <div>
        <h1 className="my-10 text-lg">Review About This Product</h1>
      </div>
      {gettingReviews}
      <div>
        <div className="border border-gray-400 relative h-32 mt-10">
          <form onSubmit={handleSubmit(postMyReview)}>
            <textarea
              className="w-full h-32 p-2"
              placeholder="Write your comment in here..."
              {...register("description")}
            />
            <div className="bg-red-500 text-white px-6 py-2 absolute right-3 bottom-3">
              <button type="submit">Review</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DetailsBook;
