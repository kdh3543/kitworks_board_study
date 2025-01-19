'use client';
import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import useModalStore from '@/store/useModalStore';
import { usePathname, useRouter } from 'next/navigation';

export default function HamModal() {
  const { hamModal, setHamModal, setLoginModal, setSignUpModal } =
    useModalStore();
  const [pathName, setPathName] = useState('');
  const menuList = [
    {
      link: '/',
      value: 'main',
    },
    {
      link: '/today',
      value: 'blog',
    },
    {
      link: '/diary',
      value: 'memory',
    },
  ];

  const router = useRouter();
  const path = usePathname();
  useEffect(() => {
    if (path) {
      setPathName(path);
    }
  }, [path]);

  const moveToLink = (link: string) => {
    router.push(link);
    setHamModal(false);
  };

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
              {menuList.map(({ link, value }) => (
                <Button
                  className={link === path ? 'text-[#A52A2A]' : ''}
                  key={link}
                  disabled={link === path}
                  variant={'ghost'}
                  onClick={() => moveToLink(link)}
                >
                  {value}
                </Button>
              ))}
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
