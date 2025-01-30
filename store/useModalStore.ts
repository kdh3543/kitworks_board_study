import { bookModalType } from "@/utils/type";
import { create } from "zustand";

interface modalStoreProps {
  loginModal: boolean;
  setLoginModal: (isOpened: boolean) => void;
  signUpModal: boolean;
  setSignUpModal: (isOpened: boolean) => void;
  hamModal: boolean;
  setHamModal: (isOpened: boolean) => void;
  bookModal: bookModalType;
  setBookModal: (bookProps: bookModalType) => void;
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
  setBookModal: (props) => set({ bookModal: props }),
}));

export default useModalStore;
