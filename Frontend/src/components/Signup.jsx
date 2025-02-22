import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <>
      <div className="flex h-screen items-center justify-center text-black ">
        <div
          id="my_modal_4"
          className=" dialog-box border-1  rounded-md border-black p-4 shadow-md   "
        >
          <div className=" text-black">
            <form
              method="dialog "
              className=""
              onSubmit={handleSubmit(onSubmit)}
            >
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <div className="space-y-3">
                <h3 className="font-bold text-lg">Login</h3>
                <div className="space-y-3 ">
                  <div className="space-y-2">
                    <label className="mt-2">Name</label>
                    <br />
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Enter your name"
                      className="outline-none px-2 py-1 rounded-md w-90  mt-2"
                    />
                    <br />
                    {errors.name && (
                      <span className="text-red-700 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label className="mt-2">Email</label>
                    <br />
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Enter your email"
                      className="outline-none px-2 py-1 rounded-md w-90  mt-2"
                    />
                    <br />
                    {errors.email && (
                      <span className="text-red-700 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="space-y-2 ">
                    <label className="">Password</label>
                    <br />
                    <input
                      {...register("password", { required: true })}
                      type="password"
                      placeholder="Enter your password"
                      className="outline-none px-2 py-1 rounded-md w-90  mt-2"
                    />
                    <br />
                    {errors.password && (
                      <span className="text-red-700 text-sm">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className=" flex justify-between">
                    <button
                      type="submit"
                      className="text-black bg-gray-600 px-2.5 py-1.5 border rounded-md active:scale-90 duration-100 font-semibold"
                    >
                      Signup
                    </button>
                    <p className="mr-28">
                      {" "}
                      have account{" "}
                      <button
                        className="cursor-pointer underline text-blue-500"
                        onClick={() =>
                          document.getElementById("my_modal_3").showModal()
                        }
                      >
                        Login
                      </button>{" "}
                      <Login />
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
