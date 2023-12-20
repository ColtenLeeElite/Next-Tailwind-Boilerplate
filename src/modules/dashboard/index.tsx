import { FC, useState } from 'react'
import ReactPlayer from 'react-player'
import { Quote } from '@/common/components/Icons'
import Members from './components/Member'
import ProgressBar from './components/ProgressBar'
import CreditChart from './components/CreditChart'
import AgentEngagment from './components/AgentEngagment'
import AgentWorkflow from './components/AgentWorkflow'

const Dashboard: FC = () => {
  const [tab, setTab] = useState(3)

  const onTabClick = (index: number) => {
    setTab(index)
  }

  return (
    <div className="flex flex-col px-6 py-8 max-sm:px-5 max-sm:py-2">
      <div className="flex flex-row w-full gap-6 max-sm:flex-col max-sm:gap-4">
        <div className="flex flex-col flex-initial p-6 w-[70%] bg-black rounded-xl form-container max-sm:w-full max-sm:p-3">
          <div className="flex flex-row justify-between w-full max-sm:flex-col max-sm:gap-4">
            <div className="flex flex-row items-center gap-3">
              <span className="text-xl font-semibold text-white max-sm:text-base">
                Credit Usage
              </span>
              <Quote />
            </div>
            <div className="flex flex-row gap-4 z-[10] ">
              <div
                className="p-1.5 hover:cursor-pointer"
                onClick={() => onTabClick(3)}
              >
                <span
                  className={`font-medium text-sm ${
                    tab === 3 ? 'text-neon-100' : 'text-gray-200'
                  }`}
                >
                  3 Days
                </span>
              </div>
              <div
                className="p-1.5 hover:cursor-pointer"
                onClick={() => onTabClick(7)}
              >
                <span
                  className={`font-medium text-sm ${
                    tab === 7 ? 'text-neon-100' : 'text-gray-200'
                  }`}
                >
                  Week
                </span>
              </div>
              <div
                className="p-1.5 hover:cursor-pointer"
                onClick={() => onTabClick(30)}
              >
                <span
                  className={`font-medium text-sm ${
                    tab === 30 ? 'text-neon-100' : 'text-gray-200'
                  }`}
                >
                  Month
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center h-full px-3 py-4 mt-2">
            <CreditChart period={tab} />
          </div>
        </div>
        <div className="flex flex-col flex-initial p-6 w-[30%] bg-black rounded-xl form-container h-fit max-sm:w-full max-sm:p-3">
          <div className="flex flex-row items-center justify-between w-full">
            <div className="flex flex-row items-center gap-3 ">
              <span className="text-xl font-semibold text-white max-sm:text-base w-max">
                Document storage
              </span>
              <Quote />
            </div>
            <span className="text-xs font-semibold text-gray-50 w-max text-end">
              500mb remaining
            </span>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-[300px] h-[200px]">
              <ProgressBar />
            </div>
            <span className="mt-8 text-base font-medium text-gray-500">
              Document Embeddings
            </span>
          </div>
        </div>
      </div>
      <AgentEngagment />
      <div className="flex flex-row w-full gap-6 mt-3 max-sm:flex-col">
        <AgentWorkflow />
        <div className="flex flex-col flex-initial w-[30%] max-sm:w-full">
          <Members />
          <div className="flex flex-col w-auto p-6 mt-6 bg-black rounded-xl form-container h-fit">
            <div className="flex flex-col">
              <div className="flex flex-row items-center w-full gap-3">
                <span className="text-xl font-semibold text-white max-sm:text-base">
                  Tutorial
                </span>
                <Quote />
              </div>
              <div className="mt-4">
                {/* <ReactPlayer
                  className="react-player"
                  url="https://vimeo.com/861501584?share=copy"
                  width="100%"
                  height="100%"
                  playing
                /> */}
              </div>
              <div className="flex flex-col gap-2 mt-4">
                <span className="text-base font-semibold text-white max-sm:text-sm">
                  Get started with AI
                </span>
                <span className="text-sm font-medium text-gray-500">
                  Here is a text to help explain to the user more clearly what
                  this means.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
