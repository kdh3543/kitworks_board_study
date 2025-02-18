"use client";
import React from "react";
import Image from "next/image";
import HeadBanner from "@/components/HeadBanner";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { FaHeart } from "react-icons/fa";

export default function Today() {
  const router = useRouter();

  return (
    <div className="m-auto w-full mb-10 md:w-1/2 xl:w-1/2 animate-fadein">
      <HeadBanner />
      <div>
        <div className="mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="xl:flex mt-10">
              <Image
                src={"/example2.svg"}
                alt="공유 이미지"
                className="w-full"
                width={300}
                height={300}
              />
              <div className="h-[100%]">
                <p className="text-2xl mt-2 h-[10%]">여기 제목</p>
                <p className="text-[#808080] mt-2 h-[80%] overflow-hidden">
                  여긴 내용임 여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
                  내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴
                  내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴 내용
                </p>
                <div className="mt-3 flex justify-between text-[#808080] text-[12px] items-center h-[10%]">
                  <div>
                    <span>1일전</span>
                    <span className="ml-2">by 닉네임</span>
                  </div>
                  <div className="flex items-center">
                    <FaHeart
                      width={20}
                      height={20}
                      className="dark:text-white"
                    />
                    <span className="ml-1">4</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Button
        onClick={() => router.push("/today/register")}
        variant={"outline"}
        className="fixed bottom-10 right-5"
      >
        공유하기
      </Button>
    </div>
  );
}
