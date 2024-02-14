
import React from "react";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import { SlEnvolope } from "react-icons/sl";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import MainContent from "@/components/MainContent";
export default async function layout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession();
  if (!session || !session.user) redirect("/");
  return (
    <div className="w-full h-full flex justify-center items-center bg-black relative">
      <div className="max-w-screen-xl w-full h-full flex relative">
        <LeftSidebar active="home" username="Joel" accountName="@JoelPOGIES" />
        <MainContent
    current="for you"
    lists={[{ id: "2313", name: "List" }]}
  >
        {children}
        </MainContent>
        <RightSidebar
          toFollow={[
            { username: "Joel1", accountname: "@joel1", type: "PUBLIC" },
            { username: "Joel1", accountname: "@joel1", type: "PUBLIC" },
            { username: "Joel1", accountname: "@joel1", type: "PUBLIC" },
          ]}
          trending={[
            { genre: "Hi", hashtag: "#12", postNum: 69 },
            { genre: "Hi", hashtag: "#12", postNum: 69 },
            { genre: "Hi", hashtag: "#12", postNum: 69 },
            { genre: "Hi", hashtag: "#12", postNum: 69 },
            { genre: "Hi", hashtag: "#12", postNum: 69 },
          ]}
        />
      </div>
      <div className="fixed bottom-0 mx-auto right-0 flex flex-col-reverse items-end">
        <button className="w-[325px] h-[47px] z-20  bg-black ring-white ring-4 ring-opacity-10 rounded-t-xl flex justify-between items-center mr-60 px-4">
          <div className="text-lg font-semibold">Message</div>
          <div className="flex items-center ">
            <div className="p-[10px] hover:bg-gray-600/30 rounded-full">
              <SlEnvolope className="size-5" />
            </div>
            <div className="p-2 rounded-full hover:bg-gray-600/30">
              <MdKeyboardDoubleArrowUp className="size-6" />
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
