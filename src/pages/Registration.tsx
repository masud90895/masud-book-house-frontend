/* eslint-disable @typescript-eslint/no-misused-promises */
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { IReg } from "../Interface/login";
import Swal from "sweetalert2";
import { useRegistrationMutation } from "../Redux/features/auth/authApi";

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IReg>();

  const [signup] = useRegistrationMutation();

  const navigate = useNavigate();

  const handleReg = (data: IReg) => {
    signup(data);
    navigate("/login");
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Registration Successfully, Please Login...",
      showConfirmButton: false,
      timer: 1000,
    });
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign up to MRM Store
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Already have an account?{" "}
              <Link
                to="/login"
                title=""
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
              >
                Login
              </Link>
            </p>
            <form
              action="#"
              onSubmit={handleSubmit(handleReg)}
              className="mt-8"
            >
              <div className="space-y-5">
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    {" "}
                    Full Name{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="text"
                      {...register("name", { required: true })}
                      placeholder="Enter your full name"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                {errors?.name && (
                  <span className="text-red-500 text-[12px]">
                    Name field is required
                  </span>
                )}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Email address{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="email"
                      {...register("email", { required: true })}
                      placeholder="Enter email to get started"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                {errors?.email && (
                  <span className="text-red-500 text-[12px]">
                    Email field is required
                  </span>
                )}
                <div>
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Password{" "}
                  </label>
                  <div className="mt-2.5">
                    <input
                      type="password"
                      {...register("password", { required: true })}
                      placeholder="Enter your password"
                      className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>
                {errors?.password && (
                  <span className="text-red-500 text-[12px]">
                    Password field is required
                  </span>
                )}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agree"
                    className="w-5 h-5 text-blue-600 bg-white border-gray-200 rounded"
                  />
                  <label
                    htmlFor="agree"
                    className="ml-3 text-sm font-medium text-gray-500"
                  >
                    I agree to MRM BookStore{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a
                      href="#"
                      title=""
                      className="text-blue-600 hover:text-blue-700 hover:underline"
                    >
                      Privacy Policy
                    </a>
                  </label>
                </div>
                <div className="bg-red-600 text-white text-center">
                  <button
                    type="submit"
                    className="bg-red-500 text-white px-10 py-3 text-center"
                  >
                    Registration
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
          <div>
            <img
              className="w-full mx-auto"
              src="https://cdn.rareblocks.xyz/collection/celebration/images/signup/1/cards.png"
              alt=""
            />
            <div className="w-full max-w-md mx-auto xl:max-w-xl">
              <h3 className="text-2xl font-bold text-center text-black">
                Design your own card
              </h3>
              <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis.
              </p>
              <div className="flex items-center justify-center mt-10 space-x-3">
                <div className="bg-orange-500 rounded-full w-20 h-1.5" />
                <div className="bg-gray-200 rounded-full w-12 h-1.5" />
                <div className="bg-gray-200 rounded-full w-12 h-1.5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
