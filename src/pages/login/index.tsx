import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "@/interfaces/validation-schemas/login-schema";
import { IFormInput } from "@/interfaces/common";

const LoginPage: NextPage = () => {
  const router = useRouter();
  const [loginError, setLoginError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<IFormInput>({
    mode: "onTouched",
    resolver: yupResolver(loginSchema)
  });

  const onSubmit: SubmitHandler<IFormInput> = async data => {
    const result = await signIn("credentials", {
      redirect: false,
      email: data.email,
      password: data.password
    });

    if (result?.error) {
      setLoginError("Invalid credentials. Please try again.");
    } else {
      console.log("Login successful", result);
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        {loginError && <div className="text-red-500 mb-4">{loginError}</div>}
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">{errors.email?.message}</p>
        </div>
        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-gray-700 text-sm font-bold mb-2"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
          <p className="text-red-500 text-xs italic">
            {errors.password?.message}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
export default LoginPage;
