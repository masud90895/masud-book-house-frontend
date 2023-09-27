import { IRead } from "./Reading";
import { GrStatusGood } from "react-icons/gr";

interface IReadProps {
  read?: IRead;
}

const ReadingTable = ({ read }: IReadProps) => {
  return (
    <tr>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium text-gray-900">
          {read?.bookId?.title}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{read?.bookId?.author}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{read?.bookId?.genre}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{read?.bookId?.publication}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{read?.status}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900 items-center">
          <GrStatusGood className="text-center text-2xl" />
        </div>
      </td>
    </tr>
  );
};

export default ReadingTable;
