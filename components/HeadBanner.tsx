import React from 'react';

/* 첫번째 영역 */
export default function HeadBanner() {
  return (
    <div className="mt-5">
      <p className="font-nanumPen text-8xl">힐링 게시판, today&apos;s log</p>
      <p className="font-nanumMyungjo text-black text-opacity-30 text-6xl leading-snug mt-2">
        행복을 즐겨야 할 시간은 지금이다.
        <br />
        행복을 즐겨야 할 장소는 여기다.
      </p>
      <p className="font-nanumMyungjo text-black text-opacity-15 text-5xl mt-2">
        - 로버트 인젠솔
      </p>
    </div>
  );
}
