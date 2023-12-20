import React, { FC, HtmlHTMLAttributes } from 'react'
import { classNames } from '@/common/utils'

interface CardBodyProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactElement | React.ReactElement[] | string
}

const CardBody: FC<CardBodyProps> = ({ children, className }) => {
  return (
    <div
      className={classNames(
        'flex flex-col justify-center mt-2 pb-2 text-white w-full',
        className ? className : ''
      )}
    >
      {children}
    </div>
  )
}

export default CardBody
