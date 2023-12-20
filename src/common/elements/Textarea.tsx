import { FC, useState } from 'react'
import { classNames } from '@/common/utils'
import React from 'react'

export interface TextAreaProps
  extends React.PropsWithoutRef<JSX.IntrinsicElements['textarea']> {}

const Textarea: FC<TextAreaProps> = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaProps
>(({ className, ...props }, ref) => {
  const [hasFocus, setHasFocus] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.target.style.height = 'auto'
    e.target.style.height = e.target.scrollHeight + 'px'
  }

  return (
    <div
      className={classNames('form-container w-full', hasFocus ? 'active' : '')}
    >
      <textarea
        {...props}
        className={classNames(
          'bg-transparent resize-none text-white px-2 py-3.5 relative outline-none text-sm w-full overflow-y-scroll scrollbar-hide',
          className ? className : ''
        )}
        onFocus={() => {
          setHasFocus(true)
        }}
        onBlur={() => {
          setHasFocus(false)
        }}
        onChange={handleChange}
        ref={ref}
      />
    </div>
  )
})

export default Textarea
