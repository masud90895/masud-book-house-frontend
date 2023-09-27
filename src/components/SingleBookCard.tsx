import { Link } from "react-router-dom";
import "../style/BookCard.css";
import { IProps } from "../Interface/book.interface";

const SingleBookCard = ({ book }: IProps) => {
  const { author, title, genre, image, _id, publication } = book;

  return (
    <div>
      <Link to={`/books/${_id}`}>
        <div className="book-card">
          {image ? (
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src={image}
              alt="book"
            />
          ) : (
            <img
              className="h-[240px] w-[170px] object-cover lws-bookThumbnail"
              src="https://m.media-amazon.com/images/P/B07DZ86WP7.01._SCLZZZZZZZ_SX500_.jpg"
              alt="book"
            />
          )}

          <div className="flex-1 h-full pr-2 pt-2 flex flex-col">
            <div className="space-y-2 mt-4 h-full">
              <h4 className="lws-bookName">{title}</h4>
              <p className="lws-author">{author}</p>
              <p className="lws-author">Genre: {genre} </p>

              <p className="lws-price">Publication: {publication}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default SingleBookCard;
