import { useRouter } from 'next/router'
import React from 'react'
import MainContent from '@/components/MainContent';
import TweetsContent from '@/components/tweets';
const lists = ({ params }: { params: { slug: string } }) => {

  return (
  //   <MainContent
  //   current="for you"
  //   lists={[{ id: "2313", name: "List" }]}
  // >
    <TweetsContent tweets={[
      {
        id: "2312312",
        user: {
          username: "JoelTw",
          accountname: "@joeltw",
          type: "PUBLIC",
          subscription: { type: "USER" },
        },
        datetime: "1h",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo distinctio ipsam perspiciatis asperiores earum ex, culpa voluptatibus sunt.",
        replies: 6,
        retweets: 10,
        likes: 69,
        impressions: 10,
      },
      {
        id: "2312312",
        user: {
          username: "JoelTw",
          accountname: "@joeltw",
          type: "PUBLIC",
          subscription: { type: "USER" },
        },
        datetime: "1h",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo distinctio ipsam perspiciatis asperiores earum ex, culpa voluptatibus sunt.",
        replies: 6,
        retweets: 10,
        likes: 69,
        impressions: 10,
      },
      {
        id: "2312312",
        user: {
          username: "JoelTw",
          accountname: "@joeltw",
          type: "PUBLIC",
          subscription: { type: "USER" },
        },
        datetime: "1h",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo distinctio ipsam perspiciatis asperiores earum ex, culpa voluptatibus sunt.",
        replies: 6,
        retweets: 10,
        likes: 69,
        impressions: 10,
      },
      {
        id: "2312312",
        user: {
          username: "JoelTw",
          accountname: "@joeltw",
          type: "PUBLIC",
          subscription: { type: "USER" },
        },
        datetime: "1h",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo distinctio ipsam perspiciatis asperiores earum ex, culpa voluptatibus sunt.",
        replies: 6,
        retweets: 10,
        likes: 69,
        impressions: 10,
      },
      {
        id: "2312312",
        user: {
          username: "JoelTw",
          accountname: "@joeltw",
          type: "PUBLIC",
          subscription: { type: "USER" },
        },
        datetime: "1h",
        msg: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat illo distinctio ipsam perspiciatis asperiores earum ex, culpa voluptatibus sunt.",
        replies: 6,
        retweets: 10,
        likes: 69,
        impressions: 10,
      },
    ]}/>
    // {/* </MainContent> */}
  )
}

export default lists