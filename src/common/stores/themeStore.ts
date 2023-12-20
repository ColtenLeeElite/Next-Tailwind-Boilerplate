import { persist } from 'zustand/middleware'
import { create } from 'zustand'

interface ThemeStoreInterface {
  isSidebarCollapsed: boolean
  setSidebarCollapsed: (isSidebarCollapsed: boolean) => void

  isMobileSidebarCollapsed: boolean
  setMobileSidebarCollapsed: (isMobileSidebarCollapsed: boolean) => void

  isChatbarOpened: boolean
  setChatbarOpened: (isChatbarOpened: boolean) => void

  isMobileChatbarOpened: boolean
  setMobileChatbarOpened: (isMobileChatbarOpened: boolean) => void

  isProfilebarOpened: boolean
  setProfilebarOpened: (isProfilebarOpened: boolean) => void

  isMobileProfilebarCollapsed: boolean
  setMobileProfilebarCollapsed: (isMobileProfilebarCollapsed: boolean) => void
}

const themeStore = (set: any) => ({
  isSidebarCollapsed: false,
  setSidebarCollapsed: (isSidebarCollapsed: boolean) =>
    set({ isSidebarCollapsed }),

  isChatbarOpened: false,
  setChatbarOpened: (isChatbarOpened: boolean) => set({ isChatbarOpened }),

  isMobileChatbarOpened: false,
  setMobileChatbarOpened: (isMobileChatbarOpened: boolean) =>
    set({ isMobileChatbarOpened }),

  isMobileSidebarCollapsed: true,
  setMobileSidebarCollapsed: (isMobileSidebarCollapsed: boolean) =>
    set({ isMobileSidebarCollapsed }),

  isProfilebarOpened: true,
  setProfilebarOpened: (isProfilebarOpened: boolean) =>
    set({ isProfilebarOpened }),

  isMobileProfilebarCollapsed: true,
  setMobileProfilebarCollapsed: (isMobileProfilebarCollapsed: boolean) =>
    set({ isMobileProfilebarCollapsed }),
})

// const persistedAuthStore: any = persist(themeStore, { name: 'THEME_STORE' })
export const useThemeStore = create<ThemeStoreInterface>(themeStore)
