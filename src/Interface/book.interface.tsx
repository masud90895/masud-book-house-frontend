export type IBook = {
  _id: string;
  title: string;
  author: string;
  genre: string;
  publication?: string;
  price?: number;
  image?: string;
  description?: string;
  userId?: string;
};

export interface IProps {
  book: IBook;
}
