import { create } from 'zustand';

interface modalStoreProps {
  loginModal: boolean;
  setLoginModal: (isOpened: boolean) => void;
  signUpModal: boolean;
  setSignUpModal: (isOpened: boolean) => void;
}

const useModalStore = create<modalStoreProps>((set) => ({
  loginModal: false,
  setLoginModal: (isOpened) => set({ loginModal: isOpened }),
  signUpModal: false,
  setSignUpModal: (isOpened) => set({ signUpModal: isOpened }),
}));

export default useModalStore;
