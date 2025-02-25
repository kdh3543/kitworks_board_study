"use client";
import React, { useEffect, useState } from "react";
import "@/components/styles/dark-mode.css";
import { useTheme } from "next-themes";
import { FaStar } from "react-icons/fa6";
import Image from "next/image";

export default function DarkMode() {
  const { setTheme } = useTheme();
  const [state, setState] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      setState(false);
    }
  }, []);

  useEffect(() => {
    if (mounted) {
      setTimeout(() => {
        setTheme(state ? "light" : "dark");
        localStorage.setItem("theme", state ? "light" : "dark");
      }, 500);
    }
  }, [state, mounted]);

  if (!mounted) return null;

  return (
    <div
      className={` 
            w-[60px] rounded-full border-none p-[4px] flex items-center 
            transition-all duration-500 ease-in-out relative overflow-hidden
            ${state ? "bg-blue-400" : " bg-gray-700"}
          `}
    >
      {!state ? (
        <>
          <span className="star animate-meteor right-[35px]" />
          <span className="star animate-meteor delay-1000 right-[20px]" />
          <span className="star animate-meteor delay-700 right-[10px]" />
          <span className="star animate-meteor delay-300 right-[-10px]" />
          <FaStar
            className="absolute w-2 h-2 top-1 right-2 animate-floating delay-500"
            color="yellow"
          />
          <FaStar
            className="absolute w-1.5 h-1.5 top-4.5 right-6 animate-floating"
            color="yellow"
          />
        </>
      ) : (
        <>
          <Image
            src={"/cloud.svg"}
            alt="구름이미지"
            priority={true}
            quality={75}
            width={15}
            height={10}
            className="absolute top-[2px] left-[18px] animate-floating"
          />
          <Image
            src={"/cloud.svg"}
            alt="구름이미지"
            priority={true}
            quality={75}
            width={10}
            height={10}
            className="absolute top-[10px] left-[5px] animate-floating delay-700"
          />
        </>
      )}
      <div
        className={`
              w-5 h-5 bg-white rounded-full cursor-pointer 
              transition-transform duration-500 ease-in-out
              ${state ? "translate-x-8" : "translate-x-0"}
            `}
        onClick={() => setState(!state)}
      ></div>
    </div>
  );
}
