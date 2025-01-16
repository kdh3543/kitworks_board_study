'use client';
import React from 'react';
import { Button } from './ui/button';
import useModalStore from '@/store/useModalStore';

export default function HamModal() {
  const { hamModal, setHamModal, setLoginModal, setSignUpModal } =
    useModalStore();

  return (
    <>
      <div
        className={`fixed top-0 w-full h-full z-10 bg-black/40 
          backdrop-blur-md text-center p-40 font-semibold transform
          ${hamModal ? 'translate-y-0' : 'translate-y-full'}
          transition-transform duration-1000 ease-in-out`}
      >
        {hamModal && (
          <>
            <Button
              variant={'ghost'}
              className="absolute right-10 top-10 hover:bg-transparent"
              onClick={() => setHamModal(false)}
            >
              X
            </Button>
            <div className="relative w-full h-full flex flex-col gap-10 ">
              <Button variant={'ghost'} onClick={() => setLoginModal(true)}>
                로그인
              </Button>
              <Button variant={'ghost'}>main</Button>
              <Button variant={'ghost'}>blog</Button>
              <Button variant={'ghost'}>memory</Button>
              <Button
                variant={'ghost'}
                onClick={() => setSignUpModal(true)}
                className="absolute bottom-10 w-full"
              >
                회원가입
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
}
