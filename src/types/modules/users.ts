export namespace Users {
  export interface Item {
    id: number
    username: string
    email: string
    phone: string
    is_active: number
    email_verified_at: string
    last_login_at: null
    deleted_at: null
    available_permissions: Record<string, 'index' | 'update'[]>
    profile: Profile
  }

  export interface Profile {
    id: number
    account_id: number
    firstname: string
    lastname: string
    nickname: null
    phone: string
    gender: string
    birthday: string
    avatar: string
    fullname: string
  }

  interface Create {
    username: string
    email: string
    phone: string
  }

  export interface Update {
    username: string
    email: string
    phone: string
  }

  export interface ChangePassword {
    oldPassword: string
    newPassword: string
    confirmPassword: string
  }
}
