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
import { redirect } from "next/navigation";
export const subscriptionTypeClassesEnum = {
  USER: "text-primary",
  GOVERNMENT: "text-gray-300",
  ORGANIZATION: "text-amber-400",
};

const MainContent: React.FC<MainContentProps> = ({
  current,
  tweets,
  lists,
}) => {
  UniversalValidator(tweets, tweetReplySchemaPROP);
  UniversalValidator(lists, listSchema);
  return (
    <main className="ml-[275px] flex w-[600px] min-h-screen h-full flex-col border-l-[0.5px] border-r-[0.5px] border-gray-600 ">
      <div className="flex justify-evenly sticky top-0 border-b-[0.5px] backdrop-blur bg-black/70 border-gray-600 z-10 text-center">
        <Link href={'/home'}
          className={`w-full text-xl font-bold p-6 hover:bg-gray-600/70 ${current == "for you" ? "border-b-primary border-b-4" : ""}`}
        >
          For you
        </Link>
        <Link href={'/home/following'}
          className={` text-xl w-full font-bold p-6 hover:bg-gray-600/70 ${current == "following" ? "border-b-primary border-b-4" : ""}`}
        >
          Following
        </Link>
        {/* TODO: List prop implementation*/}
        {lists.map((i) => (
          <button
            key={i.id}
            className="text-xl w-full font-bold p-6 hover:bg-gray-600/70"
          >
            {i.name}
          </button>
        ))}
        <div className="flex justify-center items-center mx-2">
          <button className="p-2 rounded-full hover:bg-gray-600/70">
            <IoSettings />
          </button>
        </div>
      </div>
      <div className="border-b-[0.5px] px-4 flex items-stretch py-4 space-x-2 border-gray-600 relative">
        <div className="w-10 h-10 bg-slate-400 rounded-full flex-none"></div>
        <div className="flex flex-col w-full h-full">
          <textarea
            autoFocus
            className="resize-none w-full h-full text-2xl placeholder:text-gray-600 border-b-[0.5px] p-2 border-gray-600 bg-transparent outline-none border-none"
            rows={1}
            placeholder="What's Happening?"
          ></textarea>
          <div className="w-full justify-between items-center flex">
            <div></div>
            <div className="w-full flex justify-between items-center pl-1">
              <div className="flex text-primary">
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <GoFileMedia className="text-xl" />
                </button>
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <MdOutlineGifBox className="text-xl" />
                </button>
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <BiPoll className="text-xl" />
                </button>
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <FaRegSmile className="text-xl" />
                </button>
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <GrSchedulePlay className="text-xl" />
                </button>
                <button className="rounded-full p-2 hover:bg-primary/40">
                  <IoLocationOutline className="text-xl" />
                </button>
              </div>
              <button className="rounded-full font-bold bg-primary max-w-[75px] px-2 py-2 w-full text-lg text-center hover:bg-opacity-70 transition duration-200">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
    {tweets?.map((i, j) => (
      <Link
        href={`/tweet/${i.id}`}
        key={j}
        className="p-4 border-b-[0.5px] border-gray-600 flex space-x-4"
      >
        <div>
          <div className="w-10 h-10 bg-slate-200 rounded-full"></div>
        </div>
        <div className="flex flex-col space-y-2">
          <div className="flex items-center  space-x-1">
            {/* TODO: Auth to manage this part*/}
            <div className="font-bold ">{i.user.username}</div>
            {i.user.subscription &&
              subscriptionTypeClassesEnum[i.user.subscription?.type] && (
                <MdVerified
                  className={`${subscriptionTypeClassesEnum[i.user.subscription?.type]} text-lg`}
                />
              )}
            <div className="text-gray-400">{i.user.accountname}</div>
            <div className="text-gray-400">
              <BsDot className="text-sm" />
            </div>
            {/* TODO: Time prop implemention*/}
            <div className="text-gray-400">{i.datetime}</div>
          </div>
          {/* TODO: Tweet prop implementation*/}
          <div className="text-white text-sm break-all">{i.msg}</div>
          <div className="bg-slate-400 aspect-square w-full h-96 rounded-xl"></div>
          <div className="flex items-center space-x-2 w-full justify-between text-slate-400">
            <button className="group flex items-center">
              <div className="group-hover:bg-primary/15 rounded-full group-hover:text-blue-400 p-2">
                <FaRegComment />
              </div>
              <div className="text-sm -translate-x-1 group-hover:text-blue-400">
                {i.replies}
              </div>
            </button>
            <button className="group flex items-center">
              <div className="group-hover:bg-green-400/10 rounded-full group-hover:text-green-600 p-2">
                <FaRetweet className="text-xl" />
              </div>
              <div className="text-sm -translate-x-1 group-hover:text-green-600">
                {i.retweets}
              </div>
            </button>
            <button className="group flex items-center">
              <div className="group-hover:bg-red-400/10 rounded-full group-hover:text-red-600 p-2">
                <CiHeart className="text-xl" />
              </div>
              <div className="text-sm group-hover:text-red-600 -translate-x-1 -z-1">
                {i.likes}
              </div>
            </button>
            <button className="group flex items-center">
              <div className="group-hover:bg-primary/15 rounded-full group-hover:text-blue-400 p-2">
                <IoStatsChart />
              </div>
              <div className="text-sm -translate-x-1 group-hover:text-blue-400">
                {i.impressions}
              </div>
            </button>
            <div className="flex">
              <button className="group rounded-full hover:bg-primary/15 p-2">
                <BsBookmark className="group-hover:text-blue-400" />
              </button>
              <button className="group rounded-full hover:bg-primary/15 px-2 pb-1">
                <MdIosShare className="text-xl group-hover:text-blue-400" />
              </button>
            </div>
          </div>
        </div>
      </Link>
    ))}
  </div>
    </main>
  );
};

export default MainContent;
