import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link, useLocation, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useLoginUserMutation } from "../../features/api/userApi";
import { toast } from "react-toastify";
const schema = yup
  .object({
    email: yup.string().required("E-mail is required"),
    password: yup.string().required("Password is required"),
  })
  .required();

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [signup] = useLoginUserMutation();
  let navigate = useNavigate();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    const res = await signup(data);
    if (res.data.status === "success") {
      localStorage.setItem("accessToken", `Berear ${res.data.token}`);
      toast.success(res?.data.message);
      navigate(from, { replace: true });
    } else {
      toast.warning(res?.data.error);
      navigate("/login");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card-box">
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="signup-title">Login</h2>
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
            <div className="w-full">
              <input
                className="singup-submit-btn"
                type="submit"
                value="Login"
              />
            </div>
            <p className="signup-already">
              Don't Have an Account.{" "}
              <span className="text-primary">
                <Link to={"/register"}>Register</Link>
              </span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
