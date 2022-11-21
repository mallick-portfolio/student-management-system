import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useSignupUserMutation } from "../../features/api/userApi";
const schema = yup
  .object({
    userName: yup.string().required("User name is required"),
    email: yup
      .string()
      .email("Field should contain a valid e-mail")
      .max(255)
      .required("E-mail is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password is too short")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
        "1 Uppercase, 1 Lowercase, 1 Number and 1 Special Character"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords does't match")
      .required("Confirm Password is required"),
  })
  .required();

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [signup, result] = useSignupUserMutation();
  console.log(result?.error?.data?.error);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ confirmPassword, ...data }) => {
    const abc = await signup(data);
    if (result.isSuccess) {
      console.log("hello world", result.isSuccess);
      navigate("/");
    } else {
      navigate("/signup");
    }
  };
  return (
    <div className="w-screen h-screen flex justify-center bg-body-bg dark:bg-d-body-bg items-center">
      <div className="w-auto lg:w-1/3 md:w-1/2 bg-gradient-box-w dark:bg-d-gradient-box-w shadow-light-white-3 dark:shadow-dark-white-3 rounded-lg p-8">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="title1 text-center text-color-lightn dark:text-d-color-lightn pb-4">
              Sing Up
            </h2>
            <div className="py-1">
              <label
                className="inline-block mb-1 text-sm lg:text-base text-secondary dark:text-d-secondary"
                htmlFor="userName"
              >
                User Name{" "}
                <span className="text-primary">
                  *{errors.userName?.message}
                </span>
              </label>
              <input
                id="userName"
                {...register("userName")}
                type="text"
                placeholder="Enter your User Name"
                className="w-full py-3 pl-4 rounded-md outline-none border bg-color-border-white dark:bg-d-color-border-white border-dark dark:border-d-dark text-d-dark dark:text-dark font-medium text-sm lg:text-base"
              />
            </div>
            <div className="py-1">
              <label
                className="inline-block mb-1 text-sm lg:text-base text-secondary dark:text-d-secondary"
                htmlFor="email"
              >
                Email{" "}
                <span className="text-primary">*{errors.email?.message}</span>
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="example@gmail.com"
                className="w-full py-3 pl-4 rounded-md outline-none border bg-color-border-white dark:bg-d-color-border-white border-dark dark:border-d-dark text-d-dark dark:text-dark font-medium text-sm lg:text-base"
              />
            </div>
            <div className="py-1 relative">
              <label
                className="inline-block mb-1 text-sm lg:text-base text-secondary dark:text-d-secondary"
                htmlFor="password"
              >
                Password{" "}
                <span className="text-primary">
                  *{errors.password?.message}
                </span>
              </label>
              <input
                {...register("password")}
                id="password"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="*************"
                className="w-full py-3 pl-4 rounded-md outline-none border bg-color-border-white dark:bg-d-color-border-white border-dark dark:border-d-dark text-d-dark dark:text-dark font-medium text-sm lg:text-base"
              />
              {/* <button
                className="h-6 text-secondary dark:text-d-secondary w-6 right-3 cursor-pointer top-[43px] -translate-y-[1%] absolute"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </button> */}
            </div>
            <div className="py-1">
              <label
                className="inline-block mb-1 text-sm lg:text-base text-secondary dark:text-d-secondary"
                htmlFor="confirmPassword"
              >
                Confirm Password{" "}
                <span className="text-primary">
                  *{errors.confirmPassword?.message}
                </span>
              </label>
              <input
                {...register("confirmPassword")}
                id="confirmPassword"
                type={`${showPassword ? "text" : "password"}`}
                placeholder="*************"
                className="w-full py-3 pl-4 rounded-md outline-none border bg-color-border-white dark:bg-d-color-border-white border-dark dark:border-d-dark text-d-dark dark:text-dark font-medium text-sm lg:text-base"
              />
            </div>
            <div className="w-full">
              <input
                className="text-base lg:text-xl w-auto cursor-pointer flex justify-center items-center mx-auto text-center rounded-md mt-2 bg-gradient-box-w dark:bg-d-gradient-box-w px-6 text-d-dark dark:text-dark py-3 shadow-light-white-3 dark:shadow-dark-white-3"
                type="submit"
                value="Signup"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
