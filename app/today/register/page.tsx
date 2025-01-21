"use client";
import Tiptap from "@/components/Tiptap";
import { Input } from "@/components/ui/input";
import React from "react";

export default function page() {
  return (
    <div className="w-full h-full transform animate-fadein">
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
