// import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/react";
import { Image } from "@nextui-org/react";
import LeftBg from "../public/docs-left.png";
import RightBG from "../public/docs-right.png";
import Todo from "@/components/Todo";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <div className="bg-[linear-gradient(to right, #DD2476, #FF512F)] w-[200px] h-[300px]"></div> */}
      <Todo />
      {/* Background */}
      {/* <div
        aria-hidden="true"
        className="fixed hidden md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
      >
        <Image
          src={"https://nextui.org/gradients/docs-left.png"}
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-1000 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          // width={1000}
          // height={1000}
          alt="docs left background"
          data-loaded="true"
        />
      </div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
      >
        <Image
          src={"https://nextui.org/gradients/docs-right.png"}
          className="relative z-10 opacity-0 shadow-black/5 data-[loaded=true]:opacity-1000 shadow-none transition-transform-opacity motion-reduce:transition-none !duration-300 rounded-large"
          alt="docs right background"
          // width={1000}
          // height={1000}
          data-loaded="true"
        />
      </div> */}
    </main>
  );
}
