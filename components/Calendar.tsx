import React, { useState } from 'react';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ['일', '월', '화', '수', '목', '금', '토'];

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1,
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    // const date = currentDate.getDay();

    const total = 42;
    const days = [];
    const prevDaysInMonth = getDaysInMonth(year, month - 1);

    if (startDayOfMonth !== 6) {
      for (let i = startDayOfMonth; i >= 0; i--) {
        days.push(
          <div
            className={`border-[#ddd] border h-20 p-1 flex justify-end items-baseline opacity-40 cursor-pointer`}
            key={`prev-${i}`}
          >
            {prevDaysInMonth - i}일
          </div>,
        );
      }
    }

    const currentDaysInMonth = getDaysInMonth(year, month);
    for (let i = 1; i <= currentDaysInMonth; i++) {
      days.push(
        <div
          className={`border-[#ddd] border h-20 p-1 flex justify-end items-baseline cursor-pointer`}
          key={i}
        >
          {i}일
        </div>,
      );
    }

    let remainDaysInMonth = total - days.length;
    if (startDayOfMonth === 6) {
      remainDaysInMonth -= 7;
    }
    if (remainDaysInMonth >= 7) {
      remainDaysInMonth -= 7;
    }

    for (let i = 1; i <= remainDaysInMonth; i++) {
      days.push(
        <div
          className={`border-[#ddd] border h-20 p-1 flex justify-end items-baseline opacity-40 cursor-pointer`}
          key={`next-${i}`}
        >
          {i}일
        </div>,
      );
    }

    return days;
  };

  return (
    <div className="w-full font-nanumPen text-[18px] pb-20">
      <div className="flex justify-between items-center p-10">
        <FaAngleLeft
          onClick={prevMonth}
          className="bg-none border-none text-[18px] cursor-pointer"
        />
        <h2 className="m-0 text-3xl">
          {currentDate.toLocaleString('default', { year: 'numeric' })}{' '}
          {currentDate.toLocaleString('default', { month: 'long' })}
        </h2>

        <FaAngleRight
          onClick={nextMonth}
          className="bg-none border-none text-[18px] cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-7 py-0">
        {daysOfWeek.map((day, i) => (
          <div
            className={`text-center font-semibold border-[#ddd] border ${
              i === 0 ? 'text-red-600' : i === 6 ? 'text-blue-600' : ''
            }`}
            key={day}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">{renderDays()}</div>
    </div>
  );
};

export default Calendar;
