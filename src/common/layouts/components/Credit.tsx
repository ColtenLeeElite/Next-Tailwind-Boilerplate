import { Storage } from '@/common/components/Icons'
import Button from '@/common/elements/Button'
import { useThemeStore } from '@/common/stores/themeStore'
import { classNames } from '@/common/utils'
import { IUser } from '@/interfaces'
import { FC } from 'react'

interface CreditProps {
  user: IUser
}

const Credit: FC<CreditProps> = ({ user }) => {
  const [isSidebarCollapsed] = useThemeStore((state) => [
    state.isSidebarCollapsed,
  ])

  return (
    <div className="flex flex-col justify-center w-full p-4 bg-transparent package-card">
      {!isSidebarCollapsed && (
        <div className="flex justify-left">
          <h3 className="text-xs font-medium text-white">Credits</h3>
          {/* <div className="text-xs">
            <span className="text-gray-500">Plan: </span>
            <span className="font-bold text-white">
              {user.subscription?.plan ? user.subscription.plan : 'Free'}
            </span>
          </div> */}
        </div>
      )}
      <div
        className={classNames(
          'flex items-center relative z-999',
          isSidebarCollapsed ? 'justify-center' : 'mt-3 justify-between'
        )}
      >
        <div
          className={classNames(
            'flex gap-2',
            isSidebarCollapsed ? ' flex-col items-center' : ''
          )}
        >
          <Storage />
          <h3 className="font-semibold gradient-text">
            {user ? user.subscription?.balance : 0}
          </h3>
        </div>
        {/*DEMO*/}
        {/* {!isSidebarCollapsed && <Button text="Upgrade" size="sm" />} */}
      </div>
    </div>
  )
}

export default Credit
