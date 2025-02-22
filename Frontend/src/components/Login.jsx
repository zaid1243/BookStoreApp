import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Home from "../home/Home";

const Login = () => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal scale-x-90">
        <div className="modal-box bg-white text-black">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <div className="space-y-3">
              <h3 className="font-bold text-lg">Login</h3>
              <div className="space-y-3 ">
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
                    <span className="text-red-700 ">
                      This field is required
                    </span>
                  )}
                </div>
                <div className=" flex justify-between">
                  <button
                    type="submit"
                    className="text-black bg-gray-600 px-2.5 py-1.5 border rounded-md active:scale-90 duration-100 font-semibold"
                  >
                    Login
                  </button>
                  <p className="mr-28">
                    {" "}
                    Not registered?{" "}
                    <Link to="/signup" className="underline text-blue-500">
                      Signup
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
