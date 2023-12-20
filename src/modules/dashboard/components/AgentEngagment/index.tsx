import { FC, useState } from 'react'
import Select, { IOption } from '@/common/elements/Select'
import { Times } from '@/common/utils/constants'
import { Quote } from '@/common/components/Icons'
import Input from '@/common/elements/Input'
import AgentEngagmentCard from './AgentEngagmentCard'

const AgentEngagment: FC = () => {
  const [formValue, setFormValue] = useState<IOption>(Times[0])

  const desc1 = [{ title: 'Change in 30 days', num: '1214' }]
  const desc2 = [
    { title: '% engaged with bot', num: '59%' },
    { title: 'Change in 30 days', num: '1832' },
  ]
  const desc3 = [
    { title: '% engaged with bot', num: '59%' },
    { title: 'Change in 30 days', num: '-635' },
  ]

  const changeFormSelect = (value: IOption) => {
    setFormValue(value)
  }

  return (
    <div className="flex flex-col w-full gap-4 p-6 mt-8 bg-black rounded-xl form-container max-sm:mt-4 max-sm:p-3">
      <div className="flex flex-row items-center gap-3">
        <span className="text-xl font-semibold text-white max-sm:text-base">
          Agent engagement
        </span>
        <Quote />
      </div>
      <div className="flex flex-row gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-50">Time</span>
          <Select
            options={Times}
            value={formValue}
            onChange={(value) => {
              changeFormSelect(value)
            }}
            className="w-[100px]"
          />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-gray-50">
            Deployed Agents
          </span>
          <Input value="Farah" className="w-[100px]" disabled />
        </div>
      </div>
      <div className="flex flex-row gap-6 max-sm:flex-col max-sm:gap-4">
        <AgentEngagmentCard
          title={'Total Interactions'}
          num={9658}
          items={desc1}
        />
        <AgentEngagmentCard
          title={'Engaged with Agent'}
          num={5869}
          items={desc2}
        />
        <AgentEngagmentCard
          title={'Human Escalation'}
          num={960}
          items={desc3}
        />
      </div>
    </div>
  )
}

export default AgentEngagment
