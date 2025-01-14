import React from 'react';
import Image from 'next/image';
import HeadBanner from '@/components/HeadBanner';

export default function page() {
  return (
    <div className="m-auto w-1/2 mb-10">
      <HeadBanner />
      <div className="sm:w-full">
        <div className="mt-5">
          {Array.from({ length: 10 }, (_, i) => (
            <div key={i} className="md:flex mt-10">
              <Image
                src={'/example2.svg'}
                alt="공유 이미지"
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
                    <Image src={'/love.svg'} width={20} height={20} alt="찜" />
                    <span className="ml-1">4</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
