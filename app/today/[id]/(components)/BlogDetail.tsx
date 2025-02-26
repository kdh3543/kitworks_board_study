"use client";
import HeadBanner from "@/components/HeadBanner";
import Image from "next/image";
import { FaHeart, FaRegCommentDots } from "react-icons/fa";
import { BiGhost } from "react-icons/bi";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface BlogDetailProps {
  id: string;
}

export default function BlogDetail({ id }: BlogDetailProps) {
  return (
    <div className="m-auto w-full md:w-1/2 xl:w-1/2 animate-fadein ">
      <HeadBanner />
      <div className="py-5">
        <Image
          src={"/example2.svg"}
          alt="블로그 이미지"
          className="w-full"
          width={300}
          height={300}
        />
        <div className="h-[100%] mt-10">
          <p className="text-2xl">여기1 제목</p>
          <div className="mt-5 flex justify-end text-[#808080]">
            <span>1일전</span>
            <span className="ml-2">by 닉네임</span>
          </div>
          <p className="text-[#808080] mt-10 h-[80%] overflow-hidden">
            여긴 내용임 여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
            내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴
            내용여긴 내용임여긴 내용임여긴 내용임여긴 내용 여긴 내용임 여긴
            내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴
            내용여긴 내용임여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
            내용임여긴 내용임여긴 내용 여긴 내용임 여긴 내용임여긴 내용임여긴
            내용여긴 내용임여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
            내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴 내용
            여긴 내용임 여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
            내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴
            내용여긴 내용임여긴 내용임여긴 내용임여긴 내용 여긴 내용임 여긴
            내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴
            내용여긴 내용임여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
            내용임여긴 내용임여긴 내용
          </p>
          <div className="dark:text-white mt-10  flex items-center justify-between text-[#808080] text-[10px] h-[10%] ">
            <div className="flex items-center gap-2">
              <FaHeart className=" size-[16px]" />
              <span className="text-[16px]">4</span>
            </div>
            <div className="flex items-center gap-2">
              <FaRegCommentDots className="size-[16px]" />
              <span className="text-[16px]">댓글</span>
            </div>
          </div>
          <div className="mt-20">
            <div className="w-full dark:border-white border-black border p-2">
              <div className="flex items-center gap-2 text-[#808080] dark:text-white">
                <BiGhost className="w-6 h-6" />
                <span className="text-xl">user</span>
              </div>
              <div className="mt-5 w-full">
                <Textarea />
              </div>
            </div>
            <div className="w-full border-t-0 dark:border-white border-black border p-2 flex justify-end">
              <Button variant={"outline"}>등록</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
