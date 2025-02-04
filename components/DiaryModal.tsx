"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/store/useModalStore";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";

export default function Modal() {
  const { diaryModal, resetDiaryModal } = useModalStore();

  const closeModal = () => {
    resetDiaryModal();
  };

  return (
    <Dialog open={diaryModal.state} onOpenChange={closeModal}>
      <DialogContent className="sm:w-full max-w-[400px] mx-auto">
        <DialogHeader>
          <DialogTitle>today&apos;s memory</DialogTitle>
        </DialogHeader>

        <div className="my-5 w-full min-h-[200px]">
          <div className="h-[15%] bg-[#80808050] flex items-center pl-1 font-semibold">
            <span>{`${diaryModal.date.getFullYear()}. ${
              diaryModal.date.getMonth() + 1
            }. ${diaryModal.date.getDate()}`}</span>
          </div>
          <div className="h-[85%]">
            <Textarea
              className="h-full resize-none"
              placeholder="오늘의 일기를 작성해주세요."
              defaultValue={diaryModal.content || ""}
            />
          </div>
        </div>
        <div className=" flex justify-between my-5">
          <Button
            className="w-[45%] rounded-md bg-[#808080] font-inter"
            onClick={closeModal}
          >
            취소
          </Button>
          <Button variant={"outline"} className="w-[45%] rounded-md font-inter">
            확인
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
