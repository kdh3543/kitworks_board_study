import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="m-auto w-1/2 mb-10">
      {/* 첫번째 영역 */}
      <div className="mt-5">
        <p className="font-nanumPen text-8xl">힐링 게시판, 오늘의 기록</p>
        <p className="font-nanumMyungjo text-black text-opacity-30 text-6xl leading-snug mt-2">
          행복을 즐겨야 할 시간은 지금이다.
          <br />
          행복을 즐겨야 할 장소는 여기다.
        </p>
        <p className="font-nanumMyungjo text-black text-opacity-15 text-5xl mt-2">
          - 로버트 인젠솔
        </p>
      </div>
      {/* 두번째 영역 */}
      <div className="mt-20 text-center">
        <p className="font-nanumMyungjo text-3xl">오늘의 힐링북</p>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="relative h-auto">
              <div>
                <Image
                  src={'/example.svg'}
                  alt="책 이미지"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
                <p className="mt-2 font-nanumMyungjo font-semibold">책 제목</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* 세번째 영역 */}
      <div className="mt-40">
        <div className="relative">
          <p className="font-nanumMyungjo text-3xl text-center">
            오늘의 일상 공유
          </p>
          <Button variant={'outline'} className="absolute right-0 top-0">
            공유하기
          </Button>
        </div>

        <div className="grid grid-cols-3 mt-5 gap-5">
          {Array.from({ length: 3 }, (_, i) => (
            <div key={i}>
              <Image
                src={'/example2.svg'}
                alt="공유 이미지"
                width={300}
                height={300}
              />
              <p className="text-2xl mt-2">여기 제목</p>
              <p className="text-[#808080] mt-2">
                여긴 내용임 여긴 내용임여긴 내용임여긴 내용여긴 내용임여긴
                내용임여긴 내용임여긴 내용여긴 내용임여긴 내용임여긴 내용임여긴
                내용여긴 내용임여긴 내용임여긴 내용임여긴 내용
              </p>
              <div className="mt-3 flex justify-between text-[#808080] text-[12px] items-center">
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
          ))}
        </div>
      </div>
    </div>
  );
}
