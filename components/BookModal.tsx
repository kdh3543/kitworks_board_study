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
  const { bookModal, setBookModal } = useModalStore();

  const closeModal = () => {
    setBookModal({
      title: "",
      description: "",
      state: false,
      image: "",
    });
  };

  return (
    <Dialog open={bookModal.state} onOpenChange={closeModal}>
      <DialogContent className="w-[400px]">
        <DialogHeader>
          <DialogTitle>{bookModal.title}</DialogTitle>
        </DialogHeader>
        <div className="m-auto mb-5">
          <Image
            src={bookModal?.image || "1.svg"}
            alt="책 이미지"
            width={300}
            height={300}
          />
          <div className="text-left mt-5">
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
