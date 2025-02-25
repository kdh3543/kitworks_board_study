"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import useModalStore from "@/store/useModalStore";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Modal() {
  const { bookModal, resetBookModal } = useModalStore();

  const closeModal = () => {
    resetBookModal();
  };

  return (
    <Dialog open={bookModal.state} onOpenChange={closeModal}>
      <DialogContent className="sm:w-full max-w-[400px] mx-auto">
        <DialogHeader>
          <DialogTitle>{bookModal.title}</DialogTitle>
        </DialogHeader>
        <div className="m-auto mb-5 max-h-[600px]">
          <Image
            src={bookModal?.image || "1.svg"}
            alt="책 이미지"
            width={250}
            height={250}
            onError={(e) => {
              e.currentTarget.src = "1.svg";
            }}
            quality={75}
            loading="lazy"
            className="m-auto my-2 max-h-[350px]"
          />
          <div className="text-left mt-5 h-40 overflow-auto leading-7">
            <p className="text-[#808080]">{bookModal.description}</p>
          </div>
          <div className="flex justify-between mt-10">
            <Button
              variant={"outline"}
              className="w-full rounded-md font-inter"
              onClick={closeModal}
            >
              확인
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
