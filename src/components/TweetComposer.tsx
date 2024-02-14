
import React from 'react'
import { FaRegSmile } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {MdOutlineGifBox} from "react-icons/md";
import { GoFileMedia } from "react-icons/go";
import { BiPoll } from "react-icons/bi";
import { GrSchedulePlay } from "react-icons/gr";

const TweetComposer = () => {
  return (
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
  )
}

export default TweetComposer