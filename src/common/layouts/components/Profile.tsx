import { FC, useEffect, useState, Fragment } from 'react'
import Avatar from '@/common/elements/Avatar'
import { Logout } from '@/common/components/Icons'
import { useThemeStore } from '@/common/stores/themeStore'
import { classNames } from '@/common/utils'
import { attemptSignOut } from '@/api/firebase'
import { useRouter } from 'next/router'
import { useUserStore } from '@/common/stores/userStore'
import { useGlobalStore } from '@/common/stores/globalStore'
import { ImageUrl } from '@/common/utils/constants'

const Profile: FC = () => {
  const [isSidebarCollapsed] = useThemeStore((state) => [
    state.isSidebarCollapsed,
  ])
  const [isClient, setIsClient] = useState(false)
  const [user, setUser] = useUserStore((state) => [state.user, state.setUser])
  const [setIsSignedIn] = useGlobalStore((state) => [state.setIsSignedIn])

  useEffect(() => {
    setIsClient(true)
  }, [user])

  const router = useRouter()

  const logOut = () => {
    attemptSignOut({
      onSuccess: () => {
        setUser(null)
        setIsSignedIn(false)
        router.push('/')
      },
      onFail: (error: any) => {},
    })
  }

  return (
    <Fragment>
      {isClient && (
        <div
          className={classNames(
            'flex sm:gap-4 items-center',
            isSidebarCollapsed ? 'flex-col' : ''
          )}
        >
          <Avatar
            src={user ? user.image : ImageUrl!}
            alt="Avatar"
            width={36}
            height={36}
            badgeIcon={'status'}
          />
          {!isSidebarCollapsed && (
            <div className="flex-1">
              <h3 className="text-sm font-medium text-neon-100 max-sm:hidden">
                {user?.name}
              </h3>
              {/* <span className="text-xs font-normal text-gray-50 max-sm:hidden" onClick={}>
                Edit Profile
              </span> */}
            </div>
          )}
          <div
            className="flex hover:cursor-pointer max-sm:hidden"
            onClick={logOut}
          >
            <Logout />
          </div>
        </div>
      )}
      <div
        className={classNames(
          'border-t border-gray-600 max-sm:border-none',
          isSidebarCollapsed ? 'sm:my-3' : 'sm:mt-3'
        )}
      />
    </Fragment>
  )
}

export default Profile
