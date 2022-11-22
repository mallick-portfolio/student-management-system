import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useSignupUserMutation } from "../../features/api/userApi";
import { toast } from "react-toastify";
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

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async ({ confirmPassword, ...data }) => {
    const res = await signup(data);
    console.log(res.data);
    if (res.data.status === "success") {
      toast.success(res?.data.message);
      navigate("/");
    } else {
      toast.warning(res?.data.error);
      navigate("/register");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card-box">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="signup-title">Sing Up</h2>
            <div className="py-1">
              <label className="signup-label" htmlFor="userName">
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
                className="signup-input"
              />
            </div>
            <div className="py-1">
              <label className="signup-label" htmlFor="email">
                Email{" "}
                <span className="text-primary">*{errors.email?.message}</span>
              </label>
              <input
                id="email"
                {...register("email")}
                type="email"
                placeholder="example@gmail.com"
                className="signup-input"
              />
            </div>
            <div className="py-1 relative">
              <label className="signup-label" htmlFor="password">
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
                className="signup-input"
              />
              {/* <button
                className="h-6 text-secondary dark:text-d-secondary w-6 right-3 cursor-pointer top-[43px] -translate-y-[1%] absolute"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeIcon /> : <EyeSlashIcon />}
              </button> */}
            </div>
            <div className="py-1">
              <label className="signup-label" htmlFor="confirmPassword">
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
                className="signup-input"
              />
            </div>
            <div className="w-full">
              <input
                className="singup-submit-btn"
                type="submit"
                value="Signup"
              />
            </div>
            <p className="signup-already">
              Already have an account.{" "}
              <span className="text-primary">
                <Link to={"/login"}>Login</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
