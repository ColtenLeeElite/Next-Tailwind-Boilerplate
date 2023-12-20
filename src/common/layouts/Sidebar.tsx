import { FC, useState, Fragment, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useThemeStore } from '@/common/stores/themeStore'
import { useUserStore } from '@/common/stores/userStore'
import {
  Agent,
  ArrowD,
  Collapse,
  Bookmarks,
  Company,
  Dashboard,
  Logo,
  Settings,
  Workflows,
  Expand,
  Message,
  Storage,
  Menu,
} from '../components/Icons'
import SideButton, { SideButtonProps } from './components/SideButton'
import ChatsPanel from './components/ChatsPanel'
import { appLinks } from '../utils/constants'
import { classNames } from '../utils'
import { useGlobalStore } from '../stores/globalStore'
import MyChats from './components/MyChats'
import Button from '../elements/Button'
import Skeleton from '../elements/Skeleton'

const Profile = dynamic(() => import('./components/Profile'), { ssr: false })
const Credit = dynamic(() => import('./components/Credit'), { ssr: false })

const sideButtons: SideButtonProps[] = [
  {
    icon: <Dashboard />,
    active: false,
    text: 'Dashboard',
    link: appLinks.dashboard,
  },
  {
    icon: <Agent />,
    active: true,
    text: 'Agents',
    link: appLinks.agents,
  },
  // {
  //   icon: <Workflows />,
  //   active: false,
  //   text: 'Workflows',
  //   link: appLinks.workflows,
  // },
  // {
  //   icon: <Bookmarks />,
  //   active: false,
  //   text: 'Bookmarks',
  //   link: appLinks.bookmarks,
  // },
  // {
  //   icon: <Company />,
  //   active: false,
  //   text: 'Company',
  //   link: appLinks.company,
  // },
  // {
  //   icon: <Settings />,
  //   active: false,
  //   text: 'Setting',
  //   link: appLinks.setting,
  // },
]

const SidebarLoading: FC = () => (
  <>
    <div className="flex justify-between px-6">
      <Link href="/dashboard">
        <div className="flex items-center gap-2">
          <div className="w-[37px] max-w-[37px] min-w-[37px]">
            <Logo />
          </div>
          <h3 className="text-xl font-bold text-white">AI</h3>
        </div>
      </Link>
    </div>

    <div className="mt-4">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div className="w-full h-[20px] px-6 mt-3" key={index}>
            <Skeleton
              variant="rectangular"
              isLoading
              width="full"
              height="full"
            />
          </div>
        ))}
    </div>

    <div className={classNames('mt-12 mb-2 px-5')}>
      <div className="w-full p-4 bg-transparent package-card">
        <div className="flex items-center justify-between">
          <div className="w-[100px]">
            <Skeleton variant="text" lines={1} />
          </div>
          {/* <div className="flex items-center gap-1 text-xs">
            <span className="text-gray-500">Plan: </span>
            <div className="w-[50px]">
              <Skeleton variant="text" lines={1} />
            </div>
          </div> */}
        </div>
        <div className="relative flex items-center justify-between mt-3 z-999">
          <div className="flex items-center gap-2">
            <Storage />
            <div className="w-[50px]">
              <Skeleton variant="text" lines={1} />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="flex flex-col flex-1 h-0">
      <div className="flex items-center gap-2 px-6 pt-4 text-sm text-white cursor-pointer">
        <div className="-rotate-90">
          <ArrowD />
        </div>
        <div className="w-[100px]">
          <Skeleton variant="text" lines={1} />
        </div>
      </div>
    </div>
  </>
)

const Sidebar: FC = () => {
  const [isChatOpened, setChatOpened] = useState(false)
  const [
    isSidebarCollapsed,
    setSidebarCollapsed,
    isMobileSidebarCollapsed,
    setMobileSidebarCollapsed,
  ] = useThemeStore((state) => [
    state.isSidebarCollapsed,
    state.setSidebarCollapsed,
    state.isMobileSidebarCollapsed,
    state.setMobileSidebarCollapsed,
  ])
  const user = useUserStore((state) => state.user)
  const [isLoading] = useGlobalStore((state) => [state.isPageLoading])

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed)
    setChatOpened(false)
  }

  const toggleMobileSidebar = () => {
    setMobileSidebarCollapsed(!isMobileSidebarCollapsed)
  }

  const toggleChatOpened = () => {
    setChatOpened(!isChatOpened)
  }

  return (
    <div
      className={classNames(
        'fixed left-0 z-[1000] flex flex-col bg-bgSub py-5 top-0 h-screen transition-all overflow-hidden max-sm:right-0 max-sm:w-full max-sm:py-0',
        isSidebarCollapsed ? 'sm:w-[80px]' : 'sm:w-[285px]',
        isMobileSidebarCollapsed ? 'max-sm:h-[75px]' : ''
      )}
    >
      {isLoading || user === null ? (
        <SidebarLoading />
      ) : (
        <Fragment>
          <div
            className={classNames(
              'flex px-6 max-sm:px-5 justify-between max-sm:py-3 items-center',
              isSidebarCollapsed
                ? 'sm:flex-col sm:gap-4 max-sm:border-b max-sm:border-[#A9A3C233] max-sm:h-[75px]'
                : ''
            )}
          >
            <Button
              onClick={toggleMobileSidebar}
              text={''}
              variant="solid"
              icon={<Menu />}
              className="px-0 py-1 bg-transparent border-none sm:hidden"
            />
            <Link href="/dashboard">
              <div className="flex items-center gap-2">
                <div className="w-[37px] max-w-[37px] min-w-[37px]">
                  <Logo />
                </div>
                <h3
                  className={classNames(
                    'text-xl font-bold text-white',
                    isSidebarCollapsed ? 'sm:hidden' : ''
                  )}
                >
                  Azara
                </h3>
              </div>
            </Link>
            <Button
              onClick={toggleSidebar}
              text={''}
              variant="solid"
              icon={isSidebarCollapsed ? <Expand /> : <Collapse />}
              className="max-sm:hidden"
            />
            <div className="sm:hidden ">
              <Profile />
            </div>
          </div>
          <div
            className={classNames(
              'overflow-hidden flex-1 flex flex-col',
              isSidebarCollapsed ? 'max-sm:w-0' : 'max-sm:w-full'
            )}
          >
            <div className="mt-4">
              {sideButtons.map((sideButton, index) => (
                <SideButton key={index} {...sideButton} />
              ))}
            </div>
            <div
              className={classNames(
                'mt-12 mb-2',
                isSidebarCollapsed ? 'px-2' : 'px-5'
              )}
            >
              <Credit user={user!} />
            </div>
            <div
              className={classNames(
                'mt-3 max-sm:hidden',
                isSidebarCollapsed
                  ? 'px-2 flex justify-center flex-col'
                  : 'px-6'
              )}
            >
              <Profile />
            </div>
            {!isSidebarCollapsed && (
              <div className={classNames('flex flex-col flex-1 h-0')}>
                <div
                  className={classNames(
                    isSidebarCollapsed ? 'py-2' : 'py-4',
                    'flex gap-2 items-center text-white text-sm cursor-pointer px-6'
                  )}
                  onClick={() => {
                    setChatOpened(!isChatOpened)
                  }}
                >
                  <div
                    className={classNames(
                      isChatOpened ? '' : '-rotate-90',
                      'transition-all'
                    )}
                  >
                    <ArrowD />
                  </div>
                  <h3>My Chats</h3>
                </div>
                <div
                  className={classNames(
                    isChatOpened ? 'visible' : 'invisible',
                    'flex-1 overflow-y-auto scrollbar-hide h-0'
                  )}
                >
                  <MyChats />
                </div>
              </div>
            )}
            {isSidebarCollapsed && (
              <div className="relative flex justify-center">
                <div
                  className={classNames(
                    isChatOpened
                      ? 'bg-gradient-to-r from-startGrey to-endGrey w-full flex justify-center'
                      : '',
                    'py-3 cursor-pointer'
                  )}
                  onClick={toggleChatOpened}
                >
                  <Message />
                  <div
                    className={classNames(
                      'absolute top-0 px-1 left-full',
                      isChatOpened ? 'opacity-100' : 'opacity-0'
                    )}
                  >
                    <ChatsPanel />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Fragment>
      )}

      <div className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%] max-sm:hidden">
        <div className="w-[164px] h-[157px] bg-[#48BAFB] filter blur-[100px]" />
      </div>
    </div>
  )
}

export default Sidebar
