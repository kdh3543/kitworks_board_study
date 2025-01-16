'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useModalStore from '@/store/useModalStore';
import { Input } from './ui/input';
import { Button } from './ui/button';

export default function Modal() {
  const { loginModal, setLoginModal, setSignUpModal } = useModalStore();

  const openSignUpModal = () => {
    setLoginModal(false);
    setSignUpModal(true);
  };

  return (
    <Dialog open={loginModal} onOpenChange={() => setLoginModal(!loginModal)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <div className="mb-5">
          <div className="text-left my-5">
            <span className="text-[#808080]">아이디</span>
            <Input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div className="text-left">
            <span className="text-[#808080]">비밀번호</span>
            <Input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className="text-right text-[#808080]">
            <span onClick={openSignUpModal} className="cursor-pointer text-sm">
              회원가입
            </span>
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => setLoginModal(!loginModal)}
            className="w-[45%] rounded-md bg-[#808080] font-inter"
          >
            취소
          </Button>
          <Button variant={'outline'} className="w-[45%] rounded-md font-inter">
            로그인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
