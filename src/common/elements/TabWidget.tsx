import { FC, useState, Fragment } from 'react'
import { classNames } from '../utils'

export interface ITab {
  title: string
  content: JSX.Element
  width?: string
}

export interface TabWidgetProps {
  tabs: ITab[]
  activeTab: number
}

interface TabHeaderProps {
  title: string
  active: boolean
  onClick: () => void
}

export const TabHeader: FC<TabHeaderProps> = ({ title, active, onClick }) => (
  <button
    className={classNames(
      'inline-block rounded-t-lg  text-base text-center',
      active
        ? 'text-transparent bg-clip-text bg-gradient-to-r from-startBlue to-endBlue transition font-semibold'
        : 'text-[#F2F3F5]'
    )}
    onClick={onClick}
  >
    <span className="p-3 whitespace-nowrap max-sm:p-1">{title}</span>
    {active && (
      <div className="bg-gradient-to-r from-[#4FDAED] to-[#4FEDE400] h-0.5 transition mt-3"></div>
    )}
  </button>
)

const TabWidget: FC<TabWidgetProps> = ({ tabs, activeTab }) => {
  const [tabIndex, setTabIndex] = useState(activeTab)

  return (
    <Fragment>
      <div className="flex items-start justify-start gap-4 max-sm:gap-2 max-sm:justify-center">
        {tabs.length !== 0 &&
          tabs.map((tab, index) => (
            <TabHeader
              key={index}
              title={tab.title}
              active={index === tabIndex}
              onClick={() => {
                setTabIndex(index)
              }}
            />
          ))}
      </div>
      {tabs.map((tab, index) => (
        <div
          className={classNames(
            'pt-4',
            index === tabIndex ? 'block' : 'hidden',
            tab.width ? `${tab.width}` : ''
          )}
          key={index}
        >
          {tab.content}
        </div>
      ))}
    </Fragment>
  )
}

export default TabWidget
