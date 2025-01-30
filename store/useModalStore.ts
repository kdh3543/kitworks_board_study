import { create } from "zustand";

interface BookModalType {
  state: boolean;
  image: string;
  description: string;
  title: string;
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
}

const useModalStore = create<modalStoreProps>((set) => ({
  loginModal: false,
  setLoginModal: (isOpened) => set({ loginModal: isOpened }),
  signUpModal: false,
  setSignUpModal: (isOpened) => set({ signUpModal: isOpened }),
  hamModal: false,
  setHamModal: (isOpened) => set({ hamModal: isOpened }),
  bookModal: {
    title: "",
    description: "",
    image: "",
    state: false,
  },
  setBookModal: (bookModalData) => set({ bookModal: bookModalData }),
}));

export default useModalStore;
