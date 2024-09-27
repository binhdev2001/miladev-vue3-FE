import axios from '@/configs/axios'
import type { Users } from '@/types'

const prefix = 'api/v1/user'

export const apiUsers = {
  get: (id: string) => axios.get<Users.Item>(`${prefix}/${id}`),
  update: (id: string, data: Users.Update) => axios.put<Users.Item>(`${prefix}/${id}`, data),
  delete: (id: string) => axios.delete(`${prefix}/${id}`),
  updateActive: (id: string, isActive: boolean) =>
    axios.put<Users.Item>(`${prefix}/lock/${id}`, { isActive: isActive }),
  changePassword: (id: string, data: Users.ChangePassword) =>
    axios.put<Users.ChangePassword>(`${prefix}/change-password/${id}`, data)
}
