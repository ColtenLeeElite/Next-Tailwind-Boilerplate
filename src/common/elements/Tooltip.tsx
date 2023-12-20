import { FC, HtmlHTMLAttributes } from 'react'

interface TooltipProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  description: string
  children?: React.ReactElement | React.ReactElement[] | string
}

const Tooltip: FC<TooltipProps> = ({ children, description }) => {
  return (
    <div className="relative flex flex-col items-center justify-center w-fit">
      <div className="flex items-center justify-center text-center cursor-pointer group w-max">
        {children}
        <div className="absolute p-2 z-[100] text-xs text-center text-white bg-gray-600 rounded-lg opacity-0 pointer-events-none  group-hover:opacity-100 bottom-[110%] w-max">
          {description}
        </div>
      </div>
    </div>
  )
}

export default Tooltip
