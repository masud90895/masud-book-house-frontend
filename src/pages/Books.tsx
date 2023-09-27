import { Link } from "react-router-dom";
import { IBook } from "../Interface/book.interface";
import { IoAddCircle } from "react-icons/io5";
import { useState } from "react";
import { useGetBooksQuery } from "../Redux/features/books/bookApi";
import SingleBookCard from "../components/SingleBookCard";

const Books = () => {
  const [filterText, setFilterText] = useState({
    filterName: "",
    filterValue: "",
  });

  const { data: books, isLoading, isError } = useGetBooksQuery(filterText);

  let gettingBooks;

  if (isLoading) {
    gettingBooks = (
      <p className="items-center text-2xl font-extrabold">Loading...</p>
    );
  }

  if (!isError && !isLoading && books?.data?.length === 0) {
    <div className="items-center text-2xl font-extrabold">No Books Found</div>;
  }

  if (!isLoading && books?.data?.length > 0) {
    gettingBooks = books?.data?.map((book: IBook) => (
      <SingleBookCard book={book} key={book._id} />
    ));
  }


    const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
      const filterName = e.target.name;
      const filterValue = e.target.value;
      if (filterValue) setFilterText({ filterName, filterValue });
      if (!filterValue) setFilterText({ filterName: "", filterValue: "" });
    };

  return (
    <section className="px-[15px] lg:px-0 py-16 font-inter mt-[60px] bg-[#f6f6f7]">
      <div className="flex justify-end my-10 mx-10">
        <Link to="/addBook">
          <button className=" flex items-center bg-blue-600 text-white px-6 py-2">
            <span className="mr-2 text-lg">
              <IoAddCircle />
            </span>
            Add Book
          </button>
        </Link>
      </div>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-12 gap-8">
          {/* Filter */}
          <div className="col-span-3 shadow-book-details-card bg-white mb-8 md:mb-0">
            {/* Search bar */}
            <div className="border-b border-[#dadada]">
              <div className="border-b border-[#dadada] py-3">
                <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                  Search
                </h4>
              </div>
              <div className="py-5 space-y-1">
                <div className="flex items-center px-5">
                  <input
                    type="text"
                    placeholder="Search"
                    name="searchTerm"
                    onChange={(e) => handleFilter(e)}
                    className="w-full border border-[#dadada] py-2 px-3 focus:outline-none focus:ring-1 focus:ring-etlc-theme"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-[#dadada]">
              <div className="border-b border-[#dadada] py-3">
                <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                  Genre
                </h4>
              </div>
              <div className="py-5 space-y-1">
                <div className="flex items-center px-5">
                  <input
                    type="text"
                    placeholder="Filter"
                    name="genre"
                    onChange={(e) => handleFilter(e)}
                    className="w-full border border-[#dadada] py-2 px-3 focus:outline-none focus:ring-1 focus:ring-etlc-theme"
                  />
                </div>
              </div>
            </div>

            <div className="border-b border-[#dadada]">
              <div className="border-b border-[#dadada] py-3">
                <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
                  Publication Year
                </h4>
              </div>
              <div className="py-5 space-y-1">
                <div className="flex items-center px-5">
                  <input
                    type="text"
                    placeholder="Filter"
                    name="publication"
                    onChange={(e) => handleFilter(e)}
                    className="w-full border border-[#dadada] py-2 px-3 focus:outline-none focus:ring-1 focus:ring-etlc-theme"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Books */}
          <div className=" col-span-9 bg-gray-200 shadow-book-details-card p-5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {gettingBooks}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books;

//  {/* Genre Filtering */}
//  <div className="border-b border-[#dadada]">
//  <div className="border-b border-[#dadada] py-3">
//    <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
//      Genre
//    </h4>
//  </div>
//  <div className="py-5 space-y-1">
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="action"
//        className="mr-2"
//      />
//      <label htmlFor="action">Action</label>
//    </div>
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="drama"
//        className="mr-2"
//      />
//      <label htmlFor="drama">Drama</label>
//    </div>
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="comedy"
//        className="mr-2"
//      />
//      <label htmlFor="comedy">Comedy</label>
//    </div>
//  </div>
// </div>
// {/* Genre Filtering */}
// <div>
//  <div className="border-b border-[#dadada] py-3">
//    <h4 className="text-lg font-semibold text-[#333] px-5 capitalize">
//      publication year
//    </h4>
//  </div>
//  <div className="py-5 space-y-1">
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="date1"
//        className="mr-2"
//      />
//      <label htmlFor="date1">22 June 2023</label>
//    </div>
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="date2"
//        className="mr-2"
//      />
//      <label htmlFor="date2">22 June 2023</label>
//    </div>
//    <div className="flex items-center px-5">
//      <input
//        type="checkbox"
//        name="category"
//        id="date3"
//        className="mr-2"
//      />
//      <label htmlFor="date3">22 June 2023</label>
//    </div>
//  </div>
// </div>
