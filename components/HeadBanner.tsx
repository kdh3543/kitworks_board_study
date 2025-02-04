import common from "@/lib/common";
import React, { useEffect, useState } from "react";

/* 첫번째 영역 */
export default function HeadBanner() {
  const [head, setHead] = useState({
    id: 0,
    text1: "",
    text2: "",
    author: "",
  });
  const { HEAD_TEXT } = common();
  useEffect(() => {
    const selectedIndex = Math.floor(Math.random() * HEAD_TEXT.length);
    setHead(HEAD_TEXT[selectedIndex]);
  }, [HEAD_TEXT]);

  return (
    <div className="mt-5 text-center md:text-left">
      <p className="font-nanumPen text-8xl">힐링 게시판, today&apos;s log</p>
      <p className="font-nanumMyungjo text-black text-opacity-30 text-6xl leading-snug mt-2">
        {head.text1}
        <br />
        {head.text2}
      </p>
      <p className="font-nanumMyungjo text-black text-opacity-15 text-5xl mt-2">
        - {head.author}
      </p>
    </div>
  );
}
