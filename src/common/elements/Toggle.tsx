import { FC } from 'react'

interface ToggleProps {
  text?: string
  onToggle: () => void
}

const Toggle: FC<ToggleProps> = ({ text, onToggle }) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        value=""
        className="sr-only peer"
        onClick={onToggle}
      />
      <div className="w-9 h-5 bg-gray-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all  peer-checked:bg-gradient-to-r peer-checked:from-darkGradientStart peer-checked:to-darkGradientEnd"></div>
      <h3 className="ml-2 text-sm font-medium text-white">{text && text}</h3>
    </label>
  )
}

export default Toggle
