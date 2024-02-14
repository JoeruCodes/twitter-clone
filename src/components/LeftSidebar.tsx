import React from "react";
import { BiUser } from "react-icons/bi";
import {
  BsBell,
  BsBookmark,
  BsEnvelope,
  BsThreeDots,
  BsTwitterX,
} from "react-icons/bs";
import NavigationIconSchema from "../schemas/navIconSchema";
import { z } from "zod";
import Link from "next/link";
import { RiFileList2Line } from "react-icons/ri";
import { IoPeopleOutline, IoSearch } from "react-icons/io5";
import { CgMoreO } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import LeftSidebarProps from "@/schemas/props/LeftSidebar";

const NAVIGATION_ITEMS: NavigationIconSchema[] = [
  {
    title: "X",
    icon: BsTwitterX,
  },
  {
    title: "Home",
    icon: GoHome,
  },
  {
    title: "Explore",
    icon: IoSearch,
  },
  {
    title: "Notification",
    icon: BsBell,
  },
  {
    title: "Messages",
    icon: BsEnvelope,
  },
  {
    title: "Lists",
    icon: RiFileList2Line,
  },
  {
    title: "Bookmarks",
    icon: BsBookmark,
  },
  {
    title: "Communities",
    icon: IoPeopleOutline,
  },
  {
    title: "Premium",
    icon: BsTwitterX,
  },
  {
    title: "Profile",
    icon: BiUser,
  },
  {
    title: "More",
    icon: CgMoreO,
  },
];
const LeftSidebar: React.FC<LeftSidebarProps> = ({
  active,
  username,
  accountName,
}) => {
  return (
    <section className="fixed w-[275px] items-stretch flex flex-col h-screen px-6">
      <div className="flex flex-col items-stretch space-y-4 mt-4 h-full">
        {NAVIGATION_ITEMS.map((item) => (
          <div key={item.title}>
            <Link
              className="text-2xl hover:bg-white/10 transition duration-200 flex items-center justify-start w-fit space-x-4 rounded-3xl py-2 px-6"
              href={`/${item.title.toLowerCase()}`}
            >
              <div>
                <item.icon />
              </div>
              <div>
                {item.title !== "X" && (
                  <div
                    className={`${active === item.title.toLowerCase() ? "font-semibold" : ""}`}
                  >
                    {item.title}
                  </div>
                )}
              </div>
            </Link>
          </div>
        ))}
        <button className="rounded-full m-4 bg-primary p-4 font-semibold text-2xl text-center hover:bg-opacity-70 transition duration-200">
          Post
        </button>
      </div>
      <div>
        <button className="flex items-center space-x-2 rounded-full m-4 bg-transparent p-4 text-2xl text-center hover:bg-white/20 transition duration-200 justify-between w-full">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-slate-400 w-10 h-10"></div>

            {/* TODO: Auth to manage this part*/}
            <div className="text-left text-sm">
              <div className="font-semibold">{username}</div>
              <div className="">{accountName}</div>
            </div>
          </div>
          <div className="mr-4">
            <BsThreeDots />
          </div>
        </button>
      </div>
    </section>
  );
};

export default LeftSidebar;
