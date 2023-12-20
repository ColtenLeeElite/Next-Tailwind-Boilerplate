import { Fragment } from 'react'
import { nanoid } from 'nanoid'
import { Menu, Transition } from '@headlessui/react'
import { classNames } from '@/common/utils'

export interface DropDownMenuTypes {
  options: DropdownOptionTypes[]
  dropdownText?: string
  icon?: JSX.Element
  rowData?: Record<string, any>
  align: 'left' | 'right'
}

export interface DropdownOptionTypes {
  title?: string
  action?: (
    arg?: Record<string, string | number | any> | string | number | undefined
  ) => void
  icon?: JSX.Element
  color?: string
  isSeparator?: boolean
}

export default function DropdownMenu({
  options,
  dropdownText,
  icon,
  rowData,
  align = 'right',
}: DropDownMenuTypes) {
  const nanoID = nanoid()

  return (
    <div className="text-neutral-400">
      <Menu
        as="div"
        className="relative text-slate-500 hover:text-slate-700 active:text-slate-500"
      >
        <div>
          <Menu.Button className="flex items-center capitalize focus:outline-none">
            {dropdownText && dropdownText} {icon && icon}
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items
              className={classNames(
                'absolute mt-1 z-10 w-max origin-top-right rounded-lg bg-[#202225] focus:outline-none p-2 shadow-[0_4px_23px_0_#777AA91F]',
                align === 'left' ? 'left-0' : 'right-0'
              )}
            >
              {options?.map((option, optIdx) =>
                option.isSeparator ? (
                  <div className="w-full py-1" key={optIdx}>
                    <div className="w-full border-b border-slate-200" />
                  </div>
                ) : (
                  <Menu.Item key={optIdx}>
                    <div
                      className={classNames(
                        'bg-[#202225] hover:bg-[#36393F] text-sm block px-2 py-2 cursor-pointer rounded-lg',
                        option.color ? option.color : 'text-white'
                      )}
                      key={nanoID}
                      onClick={() => option.action!(rowData)}
                      role="presentation"
                    >
                      <div className="flex items-center">
                        {option?.icon && (
                          <span className="mr-3 text-sm">{option?.icon}</span>
                        )}
                        <span>{option.title}</span>
                      </div>
                    </div>
                  </Menu.Item>
                )
              )}
            </Menu.Items>
          </Transition>
        </div>
      </Menu>
    </div>
  )
}
