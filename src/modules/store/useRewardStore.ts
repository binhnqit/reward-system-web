import { create } from 'zustand'; // Nếu chưa cài, chạy: npx expo install zustand

interface RewardState {
  balance: number;
  history: Array<{id: string, amount: number, date: string, code: string}>;
  addReward: (amount: number, code: string) => void;
}

export const useRewardStore = create<RewardState>((set) => ({
  balance: 0,
  history: [],
  addReward: (amount, code) => set((state) => ({
    balance: state.balance + amount,
    history: [
      { 
        id: Math.random().toString(), 
        amount, 
        date: new Date().toLocaleString('vi-VN'), 
        code 
      }, 
      ...state.history
    ]
  })),
}));