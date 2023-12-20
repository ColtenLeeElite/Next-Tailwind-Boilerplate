import { IAgent } from '@/interfaces'
import request from './request'

const agents = {
  getAgent: (agentId: string) => request.get<IAgent>(`/agents/${agentId}`),

  getAllAgents: () => request.get<IAgent[]>('/agents/all/agents'),

  getAgentsByOwner: (userId: number) =>
    request.get<IAgent[]>(`/agents/all/user?userId=${userId}`),

  createAgent: (userId: number, agentData: IAgent) =>
    request.post<IAgent>(`/agents?user_id=${userId}`, {
      name: agentData.name,
      role: agentData.role,
      image: agentData.image,
      objective: agentData.objective,
      tone: agentData.tone,
      welcome: agentData.welcome,
      prompt: agentData.prompt,
      examples: agentData.examples,
    }),

  updateAgent: (agentId: string, agentData: IAgent) =>
    request.patch<IAgent>(`/agents/${agentId}`, {
      name: agentData.name,
      welcome: agentData.welcome,
      plan: 'basic',
      prompt: agentData.prompt,
      role: agentData.role,
      image: agentData.image,
      objective: agentData.objective,
      tone: agentData.tone,
      examples: agentData.examples,
    }),

  duplicateAgent: (agentId: number, userId: number) =>
    request.post<IAgent>(
      `/agents/duplicate?agent_id=${agentId}&user_id=${userId}`,
      {}
    ),

  archiveAgent: (agentId: number) =>
    request.delete<IAgent>(`/agents/${agentId}`),

  deleteAllAgentsByOwner: (userId: number) =>
    request.post(`/agents/deleteall_for_owner?user_id=${userId}`, {}),

  deleteAllAgents: () => request.post(`/agents/deleteall`, {}),
}

export default agents
