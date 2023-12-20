import { FC, Fragment, useEffect, useState } from 'react'
import { Transition, Combobox } from '@headlessui/react'
import { classNames } from '../utils'
import { ArrowD, GradientCircleCheck, Spinner } from '../components/Icons'

export interface IOption {
  id: string | number
  label: string
  value?: number
}

export interface SelectProps {
  options: Array<IOption>
  value: IOption
  onChange: (value: IOption) => void
  className?: string
  isLoading?: boolean
  selectClass?: string
  isSearchable?: boolean
  disabled?: boolean
  size?: 'small' | 'normal'
}

const Select: FC<SelectProps> = ({
  options,
  value,
  onChange,
  className,
  isLoading,
  selectClass,
  isSearchable = false,
  disabled = false,
  size = 'normal',
}) => {
  const [query, setQuery] = useState('')
  const [filtered, setFiltered] = useState(options)

  useEffect(() => {
    setFiltered(
      options.filter(
        (option) =>
          option.label.toLowerCase().indexOf(query.toLowerCase()) !== -1
      )
    )
  }, [query, options])

  return (
    <Combobox value={value} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <Fragment>
          <div className={classNames('relative', className || '')}>
            {isSearchable ? (
              <div>
                <Combobox.Input
                  className={classNames(
                    'relative h-full w-full cursor-text rounded-xl border border-slate-300 py-2 pl-3 pr-10 text-left shadow-sm focus:border-blue-500 focus:outline-none sm:text-sm',
                    disabled ? 'text-slate-400 cursor-not-allowed' : 'bg-white'
                  )}
                  onChange={(e) => {
                    setQuery(e.target.value)
                  }}
                  displayValue={() => value.label}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center px-2 rounded-r-md focus:outline-none">
                  <ArrowD />
                </Combobox.Button>
              </div>
            ) : (
              <Combobox.Button
                className={classNames(
                  selectClass ||
                    'relative h-full w-full form-container cursor-default rounded-xl px-2 py-3.5 text-left bg-gray-800 text-white text-sm',
                  size === 'small' ? 'py-1 text-sm' : 'py-2'
                )}
              >
                <span className="block text-left truncate">
                  {isLoading && <Spinner />}
                  {isLoading && (
                    <span className="absolute top-0 bottom-0 left-0 right-0 bg-gray-800 opacity-30" />
                  )}
                  {value.label}
                </span>
                <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                  <ArrowD />
                </span>
              </Combobox.Button>
            )}

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Combobox.Options className="py-1.5 absolute z-[200] mt-1 max-h-60 w-full overflow-auto rounded-xl bg-gray-800 text-base shadow-lg ring-opacity-5 focus:outline-none hover:cursor-pointer">
                {filtered.map((option) => (
                  <Combobox.Option
                    key={option.id}
                    className={({ active }) =>
                      classNames(
                        active
                          ? 'bg-gray-800'
                          : 'text-gray-900 rounded-xl px-3',
                        'relative cursor-pointer select-none py-2 px-3 hover:bg-gray-500'
                      )
                    }
                    value={option}
                  >
                    <div className="flex items-center justify-between w-full">
                      <span
                        className={classNames(
                          'break-all flex-1 text-sm text-white',
                          size === 'small' ? 'text-xs' : 'text-sm'
                        )}
                      >
                        {option.label}
                      </span>

                      {value.id === option.id && (
                        <span className="flex items-center">
                          <GradientCircleCheck />
                        </span>
                      )}
                    </div>
                  </Combobox.Option>
                ))}
                {filtered.length === 0 && (
                  <div className="p-2 text-sm text-white">Nothing found</div>
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Fragment>
      )}
    </Combobox>
  )
}

Select.defaultProps = {
  className: '',
  isLoading: false,
}

export default Select
