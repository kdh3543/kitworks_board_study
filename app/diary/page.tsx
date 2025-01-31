"use client";
import React from "react";
import HeadBanner from "@/components/HeadBanner";
import useModalStore from "@/store/useModalStore";

export default function Diary() {
  const { setDiaryModal } = useModalStore();
  const content =
    "여긴 내용임 여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴 내용";
  const date = "2024. 11. 21";

  const openDiaryModal = (id: number) => {
    setDiaryModal({
      state: true,
      content: content + id,
      date,
    });
  };
  return (
    <div className="m-auto w-full mb-10 md:w-1/2 xl:w-1/2 animate-fadein">
      <HeadBanner />
      <div className="mt-5 pb-10">
        {Array.from({ length: 10 }, (_, i) => (
          <div
            key={i}
            className="mt-10 cursor-pointer"
            onClick={() => openDiaryModal(i)}
          >
            <p className="font-semibold text-2xl">{date}</p>
            <div>
              <p className="text-[#808080] mt-2 overflow-hidden">
                {content + i}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
