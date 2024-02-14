"use client";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const register = () => {
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
          <div className="text-2xl font-semibold text-white">Join X today</div>
          <div className="relative">
            <div className="border-b-[1px] border-slate-600 relative">
              <div className="py-2 my-2 space-y-4 text-white font-semibold">
                <button className="w-full bg-white text-black h-10 rounded-full hover:bg-white/80 transition duration-50">
                  {" "}
                  Sign in with Google
                </button>
                <button className="w-full bg-white text-black h-10 rounded-full hover:bg-white/80 transition duration-50">
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center -translate-y-[10px] ">
              <h1 className="text-sm px-2 bg-black text-white">or</h1>
            </div>
            <button className="text-black font-semibold w-full bg-white h-10 rounded-full hover:bg-white/80 transition duration-50 mb-4">
              Next
            </button>
            <div className="text-slate-400 text-sm">
              By signing up, you agree to the{" "}
              <Link
                className="text-primary hover:text-primary/80 hover:underline"
                href={"/tos"}
              >
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link
                className="text-primary hover:text-primary/80 hover:underline"
                href={"/privacy-policy"}
              >
                Privacy Policy
              </Link>
              , including{" "}
              <Link
                className="text-primary hover:text-primary/80 hover:underline"
                href={"/cookie-use"}
              >
                Cookie Use.
              </Link>
            </div>
          </div>

          <div className="pt-4 text-slate-400">
            Already have an account?{" "}
            <Link
              className="text-primary hover:text-primary/80 hover:underline"
              href={`/login`}
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
