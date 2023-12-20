import { FC } from 'react'
import { ImageUrl } from '@/common/utils/constants'
import { Quote } from '@/common/components/Icons'
import { IAgentWorkflow } from '@/interfaces'
import AgentWorkflowCard from './AgentWorkflowCard'

const AgentWorkflow: FC = () => {
  const agentWorkflows: IAgentWorkflow[] = [
    {
      agent: {
        name: 'Farah',
        role: 'Customer Service Agent',
        avatar: `${ImageUrl}/Default.png`,
      },
      items: [
        { name: 'Extended Warranty ', status: true },
        { name: 'Logistics Information', status: false },
      ],
    },
    {
      agent: {
        name: 'Farah',
        role: 'Customer Service Agent',
        avatar: `${ImageUrl}/Default.png`,
      },
      items: [
        { name: 'WhatsApp Escalation ', status: true },
        { name: 'Contact Partner', status: false },
      ],
    },
  ]

  return (
    <div className="flex flex-col flex-initial p-6 gap-6 rounded-xl bg-black w-[70%] form-container max-sm:w-full max-sm:p-3">
      <div className="flex flex-col items-center">
        <div className="flex flex-row items-center w-full gap-3">
          <span className="text-xl font-semibold text-white max-sm:text-base">
            Agent workflows
          </span>
          <Quote />
        </div>
        <div className="flex flex-col w-full gap-6 mt-6">
          {agentWorkflows.map((agentWorkflow, index) => {
            return (
              <AgentWorkflowCard agentWorkFlow={agentWorkflow} key={index} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default AgentWorkflow
