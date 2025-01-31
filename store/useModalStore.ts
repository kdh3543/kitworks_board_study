import { create } from "zustand";

interface BookModalType {
  state: boolean;
  image: string;
  description: string;
  title: string;
}

interface DiaryModalType {
  state: boolean;
  date: string;
  content?: string;
}

interface modalStoreProps {
  loginModal: boolean;
  setLoginModal: (isOpened: boolean) => void;
  signUpModal: boolean;
  setSignUpModal: (isOpened: boolean) => void;
  hamModal: boolean;
  setHamModal: (isOpened: boolean) => void;
  bookModal: BookModalType;
  setBookModal: (bookProps: BookModalType) => void;
  resetBookModal: () => void;
  diaryModal: DiaryModalType;
  setDiaryModal: (isOpened: DiaryModalType) => void;
  resetDiaryModal: () => void;
}

const bookInitData: BookModalType = {
  state: false,
  image: "",
  description: "",
  title: "",
};

const diaryInitData: DiaryModalType = {
  state: false,
  date: "",
  content: "",
};

const useModalStore = create<modalStoreProps>((set) => ({
  loginModal: false,
  setLoginModal: (isOpened) => set({ loginModal: isOpened }),
  signUpModal: false,
  setSignUpModal: (isOpened) => set({ signUpModal: isOpened }),
  hamModal: false,
  setHamModal: (isOpened) => set({ hamModal: isOpened }),
  ...bookInitData,
  bookModal: bookInitData,
  setBookModal: (bookModalData) => set({ bookModal: bookModalData }),
  resetBookModal: () => {
    set({ bookModal: bookInitData });
  },
  ...diaryInitData,
  diaryModal: diaryInitData,
  setDiaryModal: (diaryModalData) => set({ diaryModal: diaryModalData }),
  resetDiaryModal: () => {
    set({ diaryModal: diaryInitData });
  },
}));

export default useModalStore;
