"use client";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { redirect } from "next/navigation";
const login = () => {
  const { data: session } = useSession();
  if (session) {
    redirect("/home");
  }
  return (
    <div className="h-screen w-screen bg-slate-800 flex justify-center items-center">
      <div className="h-[600px] w-[90%] sm:w-[80%] lg:w-[550px] m-4 max-w-screen max-h-screen px-6 sm:px-12 lg:px-24 bg-black rounded-2xl overflow-hidden">
        <div className="h-full w-full flex flex-col space-y-6 mt-4 overflow-auto">
          <div className="flex items-center justify-center">
            <BsTwitterX className="text-4xl text-white" />
          </div>
          <div className="text-2xl font-semibold text-white">Sign into X</div>
          <div className="relative">
            <div className="border-b-[1px] border-slate-600 relative">
              <div className="py-2 my-2 space-y-4 text-white font-semibold">
                <button
                  className="w-full bg-white text-black h-10 rounded-full"
                  onClick={() => signIn("google")}
                >
                  {" "}
                  Sign in with Google
                </button>
                <button
                  className="w-full bg-white text-black h-10 rounded-full"
                  onClick={() => signIn("apple")}
                >
                  {" "}
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center -translate-y-[10px]">
              <h1 className="text-sm px-2 bg-black text-white">or</h1>
            </div>
          </div>

          <input
            placeholder={"Phone, email, or username"}
            className="rounded-md placeholder:text-sm px-2 py-4 w-full bg-black text-white outline-none border border-slate-600"
          ></input>
          <div className="my-4 space-y-4">
            <button className="text-black font-semibold w-full bg-white h-10 rounded-full">
              Next
            </button>
            <button className="w-full bg-black text-white outline-none border-2 border-slate-600 h-10 rounded-full">
              Forgot password?
            </button>
          </div>
          <div className="pt-4">
            Don't have an account?{" "}
            <Link
              className="text-primary hover:text-primary/80 hover:underline"
              href={`/register`}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
