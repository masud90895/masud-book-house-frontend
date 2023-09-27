import { IWish } from "./WishList";

interface IWishProps {
  wish?: IWish;
}

const WishTable = ({ wish }: IWishProps) => {
  console.log(wish);

  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        {wish?.bookId?.image ? (
          <img
            src={wish?.bookId?.image}
            alt="Book Image"
            className="h-16 w-16 rounded-full"
          />
        ) : (
          <p>No image Found</p>
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {wish?.bookId?.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{wish?.bookId?.author}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{wish?.bookId?.genre}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{wish?.bookId?.publication}</div>
      </td>
    </tr>
  );
};

export default WishTable;
