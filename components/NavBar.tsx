'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import useModalStore from '@/store/useModalStore';
import { RxHamburgerMenu } from 'react-icons/rx';
import { useRouter } from 'next/navigation';

export default function NavBar() {
  const { loginModal, setLoginModal } = useModalStore();
  const router = useRouter();
  return (
    <nav className="w-full py-2 px-2 border-b border-[#808080] flex justify-between items-center">
      <RxHamburgerMenu size={30} className="cursor-pointer" />
      <span
        className="text-4xl font-nanumPen cursor-pointer"
        onClick={() => router.push('/')}
      >
        today's log
      </span>
      <Button variant={'outline'} onClick={() => setLoginModal(!loginModal)}>
        로그인
      </Button>
    </nav>
  );
}
