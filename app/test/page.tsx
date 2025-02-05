"use client";
import React, { useEffect, useState } from "react";
import "./index.css";
import { useTheme } from "next-themes";

export default function page() {
  const { setTheme } = useTheme();
  const [state, setState] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setTheme(state ? "light" : "dark");
    }, 500);
  }, [state]);

  return (
    <div className="min-h-full flex items-end justify-end pb-20 pr-20">
      <div
        className={` 
            container
            ${state ? "bg-blue-400" : " bg-gray-700"}
          `}
      >
        {state ? null : (
          <>
            <span className="star star1" />
            <span className="star star2" />
            <span className="star star3" />
            <span className="star star4" />
          </>
        )}
        <div
          className={`
              w-5 h-5 bg-white rounded-full cursor-pointer 
              transition-transform duration-500 ease-in-out
              ${state ? "translate-x-7" : "translate-x-0"}
            `}
          onClick={() => setState(!state)}
        ></div>
      </div>
    </div>
  );
}
