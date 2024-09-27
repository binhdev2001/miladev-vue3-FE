import type { Users } from '@/types'
import type { FormRules } from 'naive-ui'

export default function useFormData() {
  // const formData = shallowReactive<Users.Create>({
  //   name: '',
  //   email: '',
  //   password: ''
  // })

  // const formEditData = shallowReactive<Users.Update>({
  //   name: ''
  // })

  const formChangePasswordData = shallowReactive<Users.ChangePassword>({
    oldPassword: '',
    newPassword: '',
    confirmPassword: ''
  })

  const rules: FormRules = {
    name: [
      {
        required: true,
        renderMessage: () => t('rules.required', { field: t('pages.admins.table.name') }),
        trigger: ['blur', 'input']
      }
    ],
    email: [
      {
        required: true,
        renderMessage: () => t('rules.required', { field: t('auth.email') }),
        trigger: ['blur', 'input']
      },
      {
        type: 'email',
        renderMessage: () => t('rules.email'),
        trigger: ['blur', 'input']
      }
    ]
  }

  return {
    // formData,
    // formEditData,
    formChangePasswordData,
    rules
  }
}
