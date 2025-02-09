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
    <div className="fixed bottom-20 right-5">
      <div
        className={` 
            container
            ${state ? "bg-blue-400" : " bg-gray-700"}
          `}
      >
        {!state ? (
          <>
            <span className="star shooting1" />
            <span className="star shooting2" />
            <span className="star shooting3" />
            <span className="star shooting4" />
            <FaStar className="absolute w-2 h-2 top-1 right-2" color="yellow" />
            <FaStar
              className="absolute w-1.5 h-1.5 top-4 right-6"
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
              className="cloud1"
            />
            <Image
              src={"/cloud.svg"}
              alt="구름이미지"
              priority={true}
              quality={75}
              width={10}
              height={10}
              className="cloud2"
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
    </div>
  );
}
