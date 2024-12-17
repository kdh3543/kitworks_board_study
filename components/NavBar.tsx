'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import useModalStore from '@/store/useModalStore';

export default function NavBar() {
  const { modalState, setModalState } = useModalStore();
  return (
    <nav className="w-full py-2 px-2 border-b border-[#808080] flex justify-between items-center">
      <span>햄버거 버튼</span>
      <span className="text-4xl font-nanumPen">오늘의 기록</span>
      <Button variant={'outline'} onClick={() => setModalState(!modalState)}>
        로그인
      </Button>
    </nav>
  );
}
