"use client";
import Tiptap from "@/components/Tiptap";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import React from "react";

export default function Register() {
  const router = useRouter();
  return (
    <div className="w-full h-full transform animate-fadein relative">
      <div className="absolute top-5 right-10 flex ">
        <Button className="font-nanumPen bg-green-400 hover:bg-white hover:border-green-400 border hover:text-green-400">
          저장
        </Button>
        <Button
          variant={"outline"}
          className="font-nanumPen ml-2 border-red-400 text-red-400 hover:bg-red-400 hover:text-white"
          onClick={() => router.push("/today")}
        >
          취소
        </Button>
      </div>
      {/* title */}
      <div className="w-4/5 h-[30%] m-auto flex items-end">
        <Input
          placeholder="제목을 입력해주세요."
          className="w-full text-4xl md:text-4xl font-inter border-none"
        />
      </div>
      <hr className="my-10" />
      {/* editor */}
      <div className="h-[70%] w-4/5 m-auto">
        <Tiptap />
      </div>
    </div>
  );
}
