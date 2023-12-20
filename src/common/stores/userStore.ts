import { IUser } from '@/interfaces'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface UserStoreInterface {
  user: IUser | null
  setUser: (user: IUser | null) => void
}

const userStore = (set: any) => ({
  user: null,
  setUser: (user: IUser | null) => {
    set({ user })
  },
})

const persistedCreditStore: any = persist(userStore, { name: 'USER' })
export const useUserStore = create<UserStoreInterface>(persistedCreditStore)
