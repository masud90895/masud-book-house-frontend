
import {  Outlet } from "react-router-dom";
import MyBooksLink from "../components/MyBooksLink";

const MyBooks = () => {
  return (
    <section className="px-[5px] lg:px-0 py-5 font-inter mt-[60px] bg-[#f6f6f7]">
      <p className="font-extrabold text-4xl mt-20 text-center mb-10">
        My Book List
      </p>
      <div className="container mx-auto">
        <div className="md:grid grid-cols-12 gap-8">
          <MyBooksLink />

          <div className=" col-span-9 bg-gray-200 shadow-book-details-card p-5 ">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyBooks;
