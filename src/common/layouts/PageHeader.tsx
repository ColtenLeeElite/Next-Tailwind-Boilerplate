import { FC, HtmlHTMLAttributes, ReactNode, useEffect, useState } from 'react'
import { classNames } from '../utils'

interface PageHeaderProps extends HtmlHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

const PageHeader: FC<PageHeaderProps> = ({ children, className }) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 30) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className={classNames(
        className ? className : '',
        'w-full bg-[#11171C80] px-6 py-4 border-b border-[#36393F] border-opacity-50 sticky top-0 z-[500] max-sm:top-[75px] max-sm:z-30 max-sm:px-5 max-sm:py-2',
        scrolled
          ? 'max-sm:bg-[#11171C80] max-sm:border-slate-800'
          : 'max-sm:bg-transparent max-sm:border-transparent'
      )}
    >
      {children}
    </div>
  )
}

export default PageHeader
