import { IOption } from '../elements/Select'

export const appLinks = {
  dashboard: '/dashboard',
  agents: '/agents',
  chat: '/chat',
  edit: '/agents/edit',
  create: '/agents/create',
  workflows: '/workflows',
  bookmarks: '/bookmarks',
  company: '/company',
  setting: '/setting',
}

export const DEMO_CHAT = 'demo##chats'

export const Roles: IOption[] = [
  {
    id: 0,
    label: 'Director',
  },
  {
    id: 1,
    label: 'Employee',
  },
]

export const Models: IOption[] = [
  {
    id: 0,
    label: 'Claude 2',
  },
  {
    id: 1,
    label: 'Llama 2',
  },
  {
    id: 2,
    label: 'Bard',
  },
  {
    id: 3,
    label: 'GPT-4',
  },
  {
    id: 4,
    label: 'GPT-3.5',
  },
]

export const Times: IOption[] = [
  { id: 0, label: '1 Day' },
  { id: 1, label: '1 Week' },
  { id: 2, label: '1 Month' },
]

export const ImageUrl = process.env.NEXT_PUBLIC_ASSET_URL
