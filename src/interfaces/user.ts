export type UserRole = 'admin' | 'user'

export interface IUser {
  uuid: string
  id: number
  email: string
  phone: string
  name: string
  role: string
  image: string
  business_profile: string
  disabled: boolean
  subscription: {
    id: number
    stripe_price_id: string
    balance: number
    plan: string
  }
  chatrooms: []
  agents: []
}
