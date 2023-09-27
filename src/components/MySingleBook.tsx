import { IBook } from "../Interface/book.interface";
import { useMyBooksQuery } from "../Redux/features/books/bookApi";
import MyBooksTable from "./MyBooksTable";

const MySingleBook = () => {
  const { data, isLoading, isError } = useMyBooksQuery(undefined);

  let myBooks;

  if (isLoading) {
    myBooks = <div>Loading....</div>;
  }

  if (!isError && !isLoading && data?.data?.length === 0) {
    <div className="items-center text-2xl font-extrabold">No Books Found</div>;
  }

  if (!isLoading && data?.data?.length > 0) {
    myBooks = data?.data.map((book: IBook) => (
      <MyBooksTable book={book} key={book._id} />
    ));
  }

  return (
    <section>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-red-500 font-extrabold">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Image
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Title
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Author
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Genre
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Publish Date
            </th>
          </tr>
        </thead>

        {myBooks}
      </table>
    </section>
  );
};

export default MySingleBook;
