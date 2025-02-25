"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import "@/components/styles/calendar.css";
// import { v4 as uuidv4 } from "uuid";
import HeadBanner from "@/components/HeadBanner";
import { useRouter } from "next/navigation";
import Calendar from "@/components/Calendar";
import useModalStore from "@/store/useModalStore";
import { FaHeart } from "react-icons/fa";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Item {
  image: string;
  title: string;
  description: string;
}

type MainProps = {
  items: Item[];
};

export default function MainPage({ items }: MainProps) {
  const router = useRouter();
  const { setBookModal } = useModalStore();
  const [list, setList] = useState<Item[]>([]);
  useEffect(() => {
    const arr = items
      .sort(() => Math.random() - 0.5)
      .filter(
        (v: Item) => v.description.includes("힐링") || v.title.includes("힐링"),
      )
      .splice(0, 6);
    setList(arr);
  }, []);

  return (
    <div className="m-auto w-full md:w-1/2 xl:w-1/2 animate-fadein">
      <HeadBanner />
      {/* blog 영역 */}
      <div className="mt-20 relative">
        <div>
          <p className="font-nanumPen text-3xl text-center">
            today&apos;s blog
          </p>
        </div>
        <Button
          variant={"outline"}
          size={"sm"}
          className="absolute right-0 top-0"
          onClick={() => router.push("/today")}
        >
          더 보기
        </Button>
        <div className="grid grid-cols-3 mt-5 gap-5">
          {Array.from({ length: 3 }, (_, i) => (
            <Link href={`/today/${i}`} key={i}>
              <Image
                src={"/example2.svg"}
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
                  <FaHeart width={20} height={20} className="dark:text-white" />
                  <span className="ml-1">4</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {/* diary 영역 */}
      <div className="mt-20 relative">
        <p className="font-nanumPen text-3xl text-center">
          today&apos;s memory
        </p>
        <Button
          variant={"outline"}
          size={"sm"}
          className="absolute right-0 top-0"
          onClick={() => router.push("/diary")}
        >
          더 보기
        </Button>
        <div>
          <Calendar />
        </div>
      </div>
      {/* book 영역 */}
      <div className="pb-20 text-center">
        <p className="font-nanumPen text-3xl">today&apos;s book</p>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {list.map((v, i) => (
            <div key={i} className="relative h-auto">
              <div>
                <Image
                  src={v.image}
                  alt="책 이미지"
                  width={300}
                  height={300}
                  className="mx-auto cursor-pointer lg:min-h-[350px] min-h-[200px] max-h-[400px]"
                  onClick={() =>
                    setBookModal({
                      image: v.image,
                      title: v.title,
                      description: v.description,
                      state: true,
                    })
                  }
                />
                <p className="mt-2 font-nanumPen font-semibold">{v.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
