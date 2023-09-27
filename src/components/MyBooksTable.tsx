import { IProps } from "../Interface/book.interface";

const MyBooksTable = ({ book }: IProps) => {
  return (
    <tbody className="bg-white divide-y divide-gray-200">
      <tr>
        <td className="px-6 py-4 whitespace-nowrap">
          {book?.image ? (
            <img
              src={book?.image}
              alt="Book Image"
              className="h-[50px] w-[50px] "
            />
          ) : (
            <img
              className="h-[50px] w-[50px] object-cover lws-bookThumbnail"
              src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
              alt="book"
            />
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium text-gray-900">{book?.title}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{book?.author}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{book?.genre}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{book.publication}</div>
        </td>
      </tr>
    </tbody>
  );
};

export default MyBooksTable;
