import { create } from 'zustand';

interface modalStoreProps {
  modalState: boolean;
  setModalState: (isOpened: boolean) => void;
}

const useModalStore = create<modalStoreProps>((set) => ({
  modalState: false,
  setModalState: (isOpened) => set({ modalState: isOpened }),
}));

export default useModalStore;
