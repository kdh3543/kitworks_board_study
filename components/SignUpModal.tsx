'use client';

import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import useModalStore from '@/store/useModalStore';
import { Input } from './ui/input';
import { Button } from './ui/button';
import Image from 'next/image';

export default function Modal() {
  const { signUpModal, setSignUpModal } = useModalStore();

  return (
    <Dialog
      open={signUpModal}
      onOpenChange={() => setSignUpModal(!signUpModal)}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>회원가입</DialogTitle>
        </DialogHeader>
        <div className="mb-5">
          <div className="text-left mt-5">
            <span className="text-[#808080]">아이디</span>
            <Input type="text" placeholder="아이디를 입력해주세요." />
          </div>
          <div className="text-left mt-5">
            <span className="text-[#808080]">비밀번호</span>
            <Input type="password" placeholder="비밀번호를 입력해주세요." />
          </div>
          <div className="text-left mt-5">
            <span className="text-[#808080]">비밀번호 확인</span>
            <Input
              type="password"
              placeholder="비밀번호를 한번 더 입력해주세요."
            />
          </div>
          <div className="flex items-center justify-center my-5 relative">
            <span className="absolute left-0 text-[#808080]">프로필(선택)</span>
            <Image
              width={100}
              height={100}
              src={'/profile.svg'}
              alt="프로필 이미지"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <Button
            onClick={() => setSignUpModal(!signUpModal)}
            className="w-[45%] rounded-md bg-[#808080] font-inter"
          >
            취소
          </Button>
          <Button variant={'outline'} className="w-[45%] rounded-md font-inter">
            회원가입
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
