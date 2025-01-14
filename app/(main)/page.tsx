'use client';
import { Button } from '@/components/ui/button';
import FullCalendar from '@fullcalendar/react';
import Image from 'next/image';
import daygridPlugin from '@fullcalendar/daygrid';
import './calendar.css';
import interactionPlugins from '@fullcalendar/interaction';
import { DateSelectArg, EventClickArg } from '@fullcalendar/core/index.js';
import { v4 as uuidv4 } from 'uuid';
import HeadBanner from '@/components/HeadBanner';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleDateClick = (arg: DateSelectArg) => {
    let title = prompt('일정을 적어주세요');
    let calendarApi = arg.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: uuidv4(),
        title,
        start: arg.startStr,
        end: arg.endStr,
        allDay: arg.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    // clickInfo.event.remove();
  };

  // useEffect(() => {
  //   getBook();
  // }, []);
  // const getBook = async () => {
  //   try {
  //     const res = await fetch(
  //       `/v1/search/book.json?query='힐링'&display=10&start=1`,
  //       {
  //         method: 'GET',
  //         headers: {
  //           'X-Naver-Client-Id': process.env.NEXT_PUBLIC_NAVER_CLIENT_ID || '',
  //           'X-Naver-Client-Secret':
  //             process.env.NEXT_PUBLIC_NAVER_CLIENT_SECRET || '',
  //         },
  //       },
  //     );

  //     const { items } = await res.json();
  //     console.log('data ', items);
  //   } catch (err) {
  //     console.error(err);
  //   }
  // };

  return (
    <div className="m-auto w-1/2 mb-10">
      <HeadBanner />
      {/* 두번째 영역 */}
      <div className="mt-20 text-center">
        <p className="font-nanumMyungjo text-3xl">today's book</p>
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
          <p className="font-nanumMyungjo text-3xl text-center">today's blog</p>
          <Button
            variant={'outline'}
            className="absolute right-0 top-0"
            onClick={() => router.push('/today')}
          >
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
      {/* 네번째 영역 */}
      <div className="mt-40">
        <p className="font-nanumMyungjo text-3xl text-center">today's memory</p>
        <div className="mt-10">
          <FullCalendar
            editable
            selectable
            contentHeight={450}
            headerToolbar={{
              start: 'prevYear prev',
              center: 'title',
              end: 'next nextYear',
            }}
            plugins={[daygridPlugin, interactionPlugins]}
            initialView="dayGridMonth"
            locale={'ko'}
            select={handleDateClick}
            eventClick={handleEventClick}
            selectAllow={(selectInfo) => {
              const isSingleDay =
                selectInfo.start.getDate() === selectInfo.end.getDate() - 1;
              return isSingleDay;
            }}
          />
        </div>
      </div>
    </div>
  );
}
