"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import useModalStore from "@/store/useModalStore";
import { RxHamburgerMenu } from "react-icons/rx";
import { useRouter } from "next/navigation";
import DarkMode from "./DarkMode";

export default function NavBar() {
  const { loginModal, setLoginModal, setHamModal } = useModalStore();
  const router = useRouter();
  return (
    <nav className="w-full py-2 px-2 border-b border-[#808080] flex justify-between items-center">
      <RxHamburgerMenu
        onClick={() => setHamModal(true)}
        size={30}
        className="cursor-pointer"
      />
      <span
        className="text-4xl font-nanumPen cursor-pointer"
        onClick={() => router.push("/")}
      >
        today&apos;s log
      </span>
      <div className="flex items-center">
        <Button
          className="mr-2"
          variant={"outline"}
          onClick={() => setLoginModal(!loginModal)}
        >
          로그인
        </Button>
        <DarkMode />
      </div>
    </nav>
  );
}
