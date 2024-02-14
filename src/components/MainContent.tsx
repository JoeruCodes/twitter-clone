'use client'
import React from "react";
import { BsBookmark, BsDot } from "react-icons/bs";
import { FaRegComment, FaRegSmile } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import { IoLocationOutline, IoSettings, IoStatsChart } from "react-icons/io5";
import { MdIosShare, MdOutlineGifBox, MdVerified } from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { BiPoll } from "react-icons/bi";
import { GrSchedulePlay } from "react-icons/gr";
import MainContentProps, { listSchema } from "@/schemas/props/MainContent";
import Link from "next/link";
import { tweetReplySchemaPROP } from "@/schemas/global_schema/tweetReplySchema";
import UniversalValidator from "@/schemas/schemaValidators";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import TweetComposer from "./TweetComposer";
export const subscriptionTypeClassesEnum = {
  USER: "text-primary",
  GOVERNMENT: "text-gray-300",
  ORGANIZATION: "text-amber-400",
};
const MainContent: React.FC<MainContentProps> = ({
  current,
  lists,
  children
}) => {
  const path = usePathname()

  UniversalValidator(lists, listSchema);
  return (
    <main className="ml-[275px] flex w-[600px] min-h-screen h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 ">
      <div className="flex justify-evenly sticky top-0 border-b-[0.5px] backdrop-blur bg-black/70 border-gray-600 z-10 text-center">
        <Link href={'/home'}
          className={`w-full text-xl font-bold p-6 hover:bg-gray-600/70 ${path === '/home'? "border-b-primary border-b-4" : ""}`}
        >
          For you
        </Link>
        <Link href={'/home/following'}
          className={` text-xl w-full font-bold p-6 hover:bg-gray-600/70 ${path === "/home/following" ? "border-b-primary border-b-4" : ""}`}
        >
          Following
        </Link>
        {/* TODO: List prop implementation*/}
        {lists.map((i) => (
          <Link
            key={i.id}
            href={`/home/${i.id}`}
            className={`text-xl w-full font-bold p-6 hover:bg-gray-600/70 ${path === `/home/${i.id}` ? "border-b-primary border-b-4" : ""}`}
          >
            {i.name}
          </Link>
        ))}
        <div className="flex justify-center items-center mx-2">
          <button className="p-2 rounded-full hover:bg-gray-600/70">
            <IoSettings />
          </button>
        </div>
      </div>
          <TweetComposer/>
          {children}
    </main>
  );
};

export default MainContent;
