import { FC, Fragment } from 'react'
import Avatar from '@/common/elements/Avatar'
import { IAgentWorkflow } from '@/interfaces'
import { Bookmark, BookmarkOutline } from '@/common/components/Icons'

interface AgentWorkflowCardProps {
  agentWorkFlow: IAgentWorkflow
}
const AgentWorkflowCard: FC<AgentWorkflowCardProps> = ({ agentWorkFlow }) => {
  return (
    <div className="flex flex-row gap-8 max-sm:flex-col max-sm:gap-4">
      <div className="flex flex-col items-center justify-center max-sm:items-start max-sm:flex-row max-sm:gap-3">
        <Avatar
          src={agentWorkFlow.agent.avatar}
          width={80}
          height={80}
          alt="Avatar"
          border
          isHuman={true}
        />
        <div className="flex flex-col items-center justify-center ">
          <span className="mt-3 text-base font-semibold text-white ">
            {agentWorkFlow.agent.name}
          </span>
          <span className="text-sm font-normal text-gray-300 w-max">
            {agentWorkFlow.agent.role}
          </span>
        </div>
      </div>
      <div className="flex flex-col w-full bg-black rounded-xl package-card">
        <div className="w-full p-4 bg-gray-800 border-b rounded-t-xl border-b-gray-600 h-fit">
          <div className="flex flex-row justify-between w-full">
            <span className="text-sm font-normal text-gray-400">Workflow</span>
            <span className="text-sm font-normal text-gray-400">Status</span>
          </div>
        </div>
        <div className="flex flex-col w-full gap-4 px-4 py-6">
          {agentWorkFlow.items.map((item, index) => (
            <div className="flex flex-row justify-between w-full" key={index}>
              <div className="flex flex-row items-center gap-3">
                {item.status ? (
                  <Fragment>
                    <Bookmark />
                    <span className="text-sm font-normal text-neon-100">
                      {item.name}
                    </span>
                  </Fragment>
                ) : (
                  <Fragment>
                    <BookmarkOutline />
                    <span className="text-sm font-normal text-white">
                      {item.name}
                    </span>
                  </Fragment>
                )}
              </div>
              <div className="flex flex-row items-center gap-2">
                {item.status ? (
                  <div className="rounded-full w-2.5 h-2.5 bg-neon-100" />
                ) : (
                  <div className="rounded-full w-2.5 h-2.5 bg-red" />
                )}
                <span>
                  {item.status ? (
                    <span className="text-sm font-normal text-white">
                      Active
                    </span>
                  ) : (
                    <span className="text-sm font-normal text-gray-500">
                      Disabled
                    </span>
                  )}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default AgentWorkflowCard
