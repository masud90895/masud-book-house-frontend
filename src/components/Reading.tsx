import { IBook } from "../Interface/book.interface";
import { IUser } from "../Interface/login";
import { useMyReadingQuery } from "../Redux/features/books/bookApi";
import ReadingTable from "./ReadingTable";

export interface IRead {
  _id: string;
  bookId?: IBook;
  userId?: IUser;
  status: string;
}

const Reading = () => {


  const { data, isLoading, isError } = useMyReadingQuery(undefined);

  console.log("data...", data);

  let myRead;

  if (isLoading) {
    myRead = <div>Loading....</div>;
  }

  if (!isError && !isLoading && data?.data?.length === 0) {
    myRead = (
      <div className="items-center text-2xl font-extrabold">No Books Found</div>
    );
  }

  if (!isLoading && data?.data?.length > 0) {
    myRead = data?.data?.map((read: IRead) => (
      <ReadingTable read={read} key={read._id} />
    ));
  }

  return (
    <div>
      <table className="w-full divide-y divide-gray-200">
        <thead className="bg-gray-100 text-red-500 font-extrabold">
          <tr>
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
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Change Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">{myRead}</tbody>
      </table>
    </div>
  );
};

export default Reading;
