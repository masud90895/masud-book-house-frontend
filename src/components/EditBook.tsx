/* eslint-disable @typescript-eslint/no-misused-promises */
import { useForm } from "react-hook-form";

import { IUser, RootState } from "../Interface/login";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { useAppSelector } from "../Redux/hook";
import { useEditBookMutation, useSingleBookQuery } from "../Redux/features/books/bookApi";

interface IAddNewBook {
  title: string;
  genre: string;
  author: string;
  publication: string;
  image?: string | undefined;
}

const EditBook = () => {
  const user: IUser | null | undefined = useAppSelector(
    (state: RootState) => state.auth
  );

  const { id } = useParams();

  const navigate = useNavigate();

  const [editBook] = useEditBookMutation();

  const { register, handleSubmit } = useForm<IAddNewBook>();

  const handleEditBook = (data: Partial<IAddNewBook>) => {
    try {
      const book = {
        id,
        data: {
          title: data.title,
          author: data.author,
          genre: data.genre,
          image: data.image,
          publication: data.publication,
          email: user?.email,
          name: user?.name,
          userId: user?._id,
        },
      };
      editBook(book).unwrap();
      toast.success("Book Edited successfully");
      navigate("/books");
    } catch (error) {
      toast.error("This is an error!");
    }
  };

  const { data } = useSingleBookQuery(id);

  const details = data?.data;

  return (
    <section className="px-[15px] lg:px-0 py-[50px] mt-[60px] bg-light-bg">
      <div className="container mx-auto w-full lg:w-[700px] p-5 bg-white shadow-book-details-card">
        <h2 className="text-xl font-bold text-dark-text mb-5">Edit Book</h2>
        <form onSubmit={handleSubmit(handleEditBook)}>
          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Title
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="text"
                id="title"
                defaultValue={details?.title}
                {...register("title")}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-5 w-full mt-3">
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Author
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  defaultValue={details?.author}
                  {...register("author")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>

            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Genre
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  placeholder="Enter your genre"
                  defaultValue={details?.genre}
                  {...register("genre")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Publication year
                </label>
              </div>
              <div className="mt-2.5">
                <input
                  type="text"
                  id="publication"
                  defaultValue={details?.publication}
                  {...register("publication")}
                  className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
                />
              </div>
            </div>
          </div>
          <div className="w-full mt-3">
            <div className="flex items-center justify-between">
              <label htmlFor="" className="text-base font-medium text-gray-900">
                Book Image
              </label>
            </div>
            <div className="mt-2.5">
              <input
                type="url"
                id="image"
                defaultValue={details?.image}
                {...register("image")}
                className="block w-full p-2 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white"
              />
            </div>
          </div>
          <div>{/* <p className="text-red-500">{inputError}</p> */}</div>
          <div className="mt-5 bg-blue-500 text-white w-32">
            <button
              className="text-lg font-medium bg-blue-500 text-white bg-etlc-theme py-2 px-5"
              type="submit"
            >
              Edit Book
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EditBook;
