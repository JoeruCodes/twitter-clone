"use client";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";
import React from "react";

const temp_signout = () => {
  return (
    <button
      onClick={() => {
        signOut();
        redirect("/");
      }}
    >
      BIG BTN
    </button>
  );
};

export default temp_signout;
