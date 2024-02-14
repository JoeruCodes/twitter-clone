'use client'
import React from 'react'
import { BsBookmark, BsDot } from "react-icons/bs";
import { FaRegComment, FaRegSmile } from "react-icons/fa";
import { FaRetweet } from "react-icons/fa6";
import { CiHeart } from "react-icons/ci";
import {  IoStatsChart } from "react-icons/io5";
import { MdIosShare, MdVerified } from "react-icons/md";
import Link from "next/link";
import tweetReplySchemaInfer from '@/schemas/global_schema/tweetReplySchema';
import UniversalValidator from '@/schemas/schemaValidators';
import { tweetReplySchemaPROP } from '@/schemas/global_schema/tweetReplySchema';
import { subscriptionTypeClassesEnum } from './MainContent';
import { redirect } from 'next/navigation';
const TweetsContent:React.FC<{tweets?:tweetReplySchemaInfer[]}> = ({tweets}) => {
    UniversalValidator(tweets, tweetReplySchemaPROP);
    if (!tweets){
      redirect('/home')
    }
    return (
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
  )
}

export default TweetsContent