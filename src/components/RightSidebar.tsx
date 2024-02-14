import React from "react";
import { BiSearch } from "react-icons/bi";
import { BsDot, BsThreeDots } from "react-icons/bs";
import Link from "next/link";
import RightSidebarProps from "@/schemas/props/RightSidebar";
const RightSidebar: React.FC<RightSidebarProps> = ({
  disabled,
  trending,
  toFollow,
}) => {
  return (
    <section className="w-[325px] items-stretch h-screen px-2 flex flex-col mx-4 sticky top-4">
      <div className="w-full flex p-2 rounded-full bg-gray-600/40 focus-within:ring-2 focus-within:ring-primary hover:ring-2 hover:ring-primary">
        <div className="flex justify-center items-center px-2">
          <BiSearch />
        </div>
        <input
          className="bg-transparent outline-none"
          type="text"
          placeholder="Search"
        />
      </div>

      {disabled &&
      (disabled.includes("subscribe") || disabled === "subscribe") ? (
        <div className="my-2"></div>
      ) : (
        <div className="rounded-2xl bg-gray-600/20 my-4 p-4">
          <h1 className="mb-2 text-lg font-bold">Subscribe to Premium</h1>
          <h2 className="mb-2 text-sm text-slate-200">
            Subscribe to unlock new features and if eligible, receive a share of
            ads revenue.
          </h2>
          <button className="rounded-full font-bold bg-primary px-4 py-2 text-md text-center hover:bg-opacity-70 transition duration-200">
            Subscribe
          </button>
        </div>
      )}

      {disabled && (disabled.includes("wh") || disabled === "wh") ? (
        <div></div>
      ) : (
        <div className="rounded-2xl bg-gray-600/20 flex flex-col items-stretch overflow-hidden mb-4">
          <div className="pt-4">
            <h1 className="pb-2 px-4 text-lg font-bold">What's Happening</h1>
            {trending.map((i, j) => (
              <Link key={j} href={`/search/q={QUERY}`}>
                <div className="px-4 py-2 hover:bg-white/10">
                  <div className="flex justify-between">
                    <div className="flex items-center text-xs text-gray-400">
                      <h1>{i.genre}</h1>
                      <div className="justify-center flex">
                        <BsDot />
                      </div>
                      <h1>Trending</h1>
                    </div>
                    <button className="rounded-full hover:bg-primary/40 p-1">
                      <BsThreeDots className="text-gray-400" />
                    </button>
                  </div>
                  <h2 className="font-bold text-sm">{i.hashtag}</h2>
                  <h3 className="text-xs text-gray-400">{i.postNum} posts</h3>
                </div>
              </Link>
            ))}
          </div>
          <Link href={"/explore/tabs/for-you"}>
            <div className="p-4 text-sm text-primary hover:bg-white/10">
              Show more
            </div>
          </Link>
        </div>
      )}

      {disabled && (disabled.includes("wtf") || disabled === "wtf") ? (
        <div></div>
      ) : (
        <div className="rounded-2xl mb-4 bg-gray-600/20 flex flex-col items-stretch overflow-hidden">
          <div className="pt-4">
            <h1 className="pb-2 px-4 text-lg font-bold">Who to follow</h1>
            {toFollow.map((i, j) => (
              <Link key={j} href={`/search/profile/q={QUERY}`}>
                <div className="px-4 py-2 hover:bg-white/10 flex justify-between items-center">
                  <div className="flex space-x-2">
                    <div className="rounded-full w-10 h-10 bg-gray-200" />
                    <div className="flex flex-col">
                      <div className="font-semibold text-md h-5">
                        {i.username}
                      </div>
                      <div className="text-slate-400 text-sm h-5">
                        {i.accountname}
                      </div>
                    </div>
                  </div>
                  <button className="flex rounded-full font-bold scale-x-90 scale-y-[0.85] bg-white text-black px-4 py-2 text-md text-center hover:bg-opacity-70 transition duration-200">
                    Follow
                  </button>
                </div>
              </Link>
            ))}
          </div>
          <Link href={"/explore/tabs/for-you"}>
            <div className="p-4 text-sm text-primary hover:bg-white/10">
              Show more
            </div>
          </Link>
        </div>
      )}

      <div className="text-xs space-x-2 flex-grow text-slate-400 px-6 items-stretch">
        <Link className="hover:underline" href={"/tos"}>
          Terms of Service
        </Link>
        <Link className="hover:underline" href={"/privacy_policy"}>
          Privacy Policy
        </Link>
        <Link className="hover:underline" href={"/cookie_policy"}>
          Cookie Policy
        </Link>
        <Link className="hover:underline" href={"/accessibility"}>
          Accessibility
        </Link>
        <Link className="hover:underline" href={"/ads_info"}>
          Ads Info
        </Link>
        <Link className="hover:underline" href={"/more"}>
          More
        </Link>
        <Link className="hover:underline" href={"/copyright"}>
          © 2024 X Corp.
        </Link>
      </div>
    </section>
  );
};

export default RightSidebar;
