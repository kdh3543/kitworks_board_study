import useModalStore from "@/store/useModalStore";
import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";

export default function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const { setDiaryModal } = useModalStore();

  const openDiaryModal = (date: Date, i: number) => {
    date.setDate(i);
    setDiaryModal({
      state: true,
      content: "",
      date,
    });
  };

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
    const realDate = new Date();

    const total = 42;
    const days = [];
    const prevDaysInMonth = getDaysInMonth(year, month - 1);
    const commonStyle =
      "border-[#ddd] border h-20 p-1 flex items-baseline cursor-pointer";

    if (startDayOfMonth !== 6) {
      for (let i = startDayOfMonth; i >= 0; i--) {
        days.push(
          <div className={`${commonStyle} opacity-40`} key={`prev-${i}`}>
            {prevDaysInMonth - i}일
          </div>,
        );
      }
    }

    const currentDaysInMonth = getDaysInMonth(year, month);
    for (let i = 1; i <= currentDaysInMonth; i++) {
      days.push(
        <div
          className={`${
            year + month === realDate.getFullYear() + realDate.getMonth() &&
            realDate.getDate() === i &&
            "bg-yellow-200"
          } ${commonStyle} hover:bg-gray-200 relative`}
          key={`current-${i}`}
          onClick={() => openDiaryModal(currentDate, i)}
        >
          {i === realDate.getDate() && (
            <GiCheckMark className="absolute right-1 top-1 text-sm text-green-500" />
          )}
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
        <div className={`${commonStyle} opacity-40`} key={`next-${i}`}>
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
          {currentDate.toLocaleString("default", { year: "numeric" })}{" "}
          {currentDate.toLocaleString("default", { month: "long" })}
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
              i === 0 ? "text-red-600" : i === 6 ? "text-blue-600" : ""
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
}
