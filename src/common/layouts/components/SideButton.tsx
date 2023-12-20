import { FC, useMemo } from 'react'
import { useRouter } from 'next/router'
import { useThemeStore } from '@/common/stores/themeStore'
import { classNames } from '@/common/utils'

export interface SideButtonProps {
  icon: JSX.Element
  text: string
  active: boolean
  link: string
}

const SideButton: FC<SideButtonProps> = ({ icon, text, link }) => {
  const [isSidebarCollapsed, setMobileSidebarCollapsed] = useThemeStore(
    (state) => [state.isSidebarCollapsed, state.setMobileSidebarCollapsed]
  )
  const router = useRouter()
  const active = useMemo(
    () => (router.pathname.indexOf(link) !== -1 ? true : false),
    [router.pathname, link]
  )

  return (
    <div
      className={classNames(
        active ? 'px-3' : 'hover:bg-gradient-to-r from-startGrey to-endGrey',
        'px-3'
      )}
    >
      <button
        className={classNames(
          'w-full mt-3 p-3 flex gap-3 items-center text-white rounded-xl text-sm',
          active
            ? 'bg-gradient-to-r from-darkGradientStart to-darkGradientEnd'
            : '',
          isSidebarCollapsed ? 'justify-center' : ''
        )}
        onClick={() => {
          setMobileSidebarCollapsed(true)
          router.push(link)
        }}
      >
        {icon}
        <h3 className={classNames(isSidebarCollapsed ? 'sm:hidden' : '')}>
          {text}
        </h3>
      </button>
    </div>
  )
}

export default SideButton
