"use client";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

const Main = () => {
  const { data: session } = useSession();
  if (session) {
    console.log(session);
    redirect("/home");
  }
  // const googleSignIn = () => signIn('google', {redirect:false}).then((res)=>{
  //   if (res?.ok){
  //     navigate('/home')
  //   } else {
  //     navigate('/login')
  //   }
  // }).catch((error)=> {
  //   console.log(error)
  //   navigate('/login')
  // })
  // const AppleSignIn = () => signIn('apple', {redirect:false}).then((res)=>{
  //   if (res?.ok){
  //     navigate('/home')
  //   } else {
  //     navigate('/login')
  //   }
  // }).catch((error)=> {
  //   console.log(error)
  //   navigate('/login')
  // })
  return (
    <div className="h-screen w-screen flex justify-stretch">
      <div className="h-full flex justify-center items-center w-[60%]">
        <BsTwitterX className="size-[450px]" />
      </div>
      <div className="h-full flex items-center justify-center">
        <div className="space-y-4 -translate-x-16 z-2">
          <h1 className="text-6xl py-8 font-bold">Happening Now</h1>
          <div className="text-2xl font-semibold text-white">Join X today</div>
          <div className="relative">
            <div className="border-b-[1px] border-slate-600 relative">
              <div className="py-2 my-2 space-y-4 text-white font-semibold">
                <button
                  className="w-full bg-white text-black h-10 rounded-full hover:bg-white/80 transition duration-50"
                  onClick={() => signIn("google")}
                >
                  {" "}
                  Sign in with Google
                </button>
                <button
                  className="w-full bg-white text-black h-10 rounded-full hover:bg-white/80 transition duration-50"
                  onClick={() => signIn("apple")}
                >
                  Sign in with Apple
                </button>
              </div>
            </div>

            <div className="flex items-center justify-center -translate-y-[10px] ">
              <h1 className="text-sm px-2 bg-black text-white">or</h1>
            </div>
            <Link href={"/register"} className="">
              <button className="text-white font-semibold w-full bg-primary h-10 rounded-full hover:bg-primary/80 transition duration-50 mb-4">
                Create an account
              </button>
            </Link>
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

          <div className="pt-4 text-xl font-semibold">
            Already have an account?
          </div>
          <Link href={"/login"} className="">
            <button className=" mt-4 text-primary ring-2 ring-slate-600 font-semibold w-full bg-black h-10 rounded-full hover:bg-primary/10 transition duration-50">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;

// pages/index.js
// import React from "react";
// import { useMutation, gql } from "@apollo/client";

// const CREATE_POST = gql`
//   mutation CreatePost($input: PostInput!) {
//     createPost(input: $input) {
//       id
//       refId
//       user_accountname
//       datetime
//       msg
//       media
//       replies
//       retweet
//       likes
//       impressions
//       bookmarks
//     }
//   }
// `;
// import { ApolloProvider } from "@apollo/client";
// import { ApolloClient, InMemoryCache } from "@apollo/client";
// const Home = () => {
//   const [createPost] = useMutation(CREATE_POST);

//   const handleCreatePost = async () => {
//     try {
//       const result = await createPost({
//         variables: {
//           input: {
//             id: "1",
//             refId: "ref-1",
//             user_accountname: "user123",
//             datetime: "2024-02-04T12:00:00Z",
//             msg: "Hello, this is a test post!",
//             media: "https://example.com/image.jpg",
//             replies: 0,
//             retweet: 0,
//             likes: 0,
//             impressions: 0,
//             bookmarks: 0,
//           },
//         },
//       });

//       console.log("Post created:", result.data.createPost);
//     } catch (error: any) {
//       console.error("Error creating post:", error.message);
//     }
//   };

//   const client = new ApolloClient({
//     uri: "@/api/graphql/", // Assuming your API endpoint is at '/api/graphql'
//     cache: new InMemoryCache(),
//   });

//   return (
//     <ApolloProvider client={client}>
//       <div>
//         <h1>Next.js with Apollo Client</h1>
//         <button onClick={handleCreatePost}>Create Post</button>
//       </div>
//     </ApolloProvider>
//   );
// };
