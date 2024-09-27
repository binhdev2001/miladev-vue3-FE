<script setup lang="ts">
/* ----- Import Type ----- */
import type { FormInst, FormRules } from 'naive-ui'
import useFormData from '@/views/user-management/composables/useFormData'

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

/* ----- Global variables ----- */

const emit = defineEmits<{
  (e: 'success'): void
}>()

const isShow = defineModel<boolean>('show', {
  required: true
})

//#region ----- Element Ref -----
const formRef = ref<FormInst | null>(null)
//#endregion ----- Element Ref -----

//#region ----- Stores -----
//#endregion ----- Stores -----

//#region ----- State -----
const state = reactive({
  isFetching: true,
  isPending: false
})
//#endregion ----- State -----

//#region ----- Composables -----
const { formChangePasswordData: formData } = useFormData()
const authStore = useAuthStore()
const $message = useMessage()
//const { showMessageError } = useHelper()

//#endregion ----- Composables -----

//#region ----- Variables -----
const rules: FormRules = {
  oldPassword: [
    {
      required: true,
      renderMessage: () => t('rules.required', { field: t('auth.old_password') }),
      trigger: ['blur', 'input']
    }
  ],
  newPassword: [
    {
      required: true,
      renderMessage: () => t('rules.required', { field: t('auth.new_password') }),
      trigger: ['blur', 'input']
    }
  ],
  confirmPassword: [
    {
      required: true,
      renderMessage: () => t('rules.required', { field: t('auth.confirm_password') }),
      trigger: ['blur', 'input']
    },
    {
      validator: (rule, value) => {
        if (value !== formData.newPassword) {
          return new Error(t('rules.password_mismatch'))
        }
        return true
      },
      trigger: ['blur', 'input']
    }
  ]
}
//#endregion ----- Variables -----

//#region ----- Functions -----
function onSubmit() {
  formRef.value?.validate(async (errors) => {
    if (!errors) {
      const userID = authStore.profile?.id
      if (!userID) return

      state.isPending = true
      try {
        await apiUsers.changePassword(userID.toString(), formData)
        $message.success(t('messages.actions.change_success', { name: t('auth.password') }))
        isShow.value = false
        emit('success')
      } catch (error: any) {
        //showMessageError(error)
      }
      state.isPending = false
    }
  })
}
//#endregion ----- Functions -----

//#region ----- Hooks -----
//#endregion ----- Hooks -----
</script>

<template>
  <NSpace class="mt-4" item-style="width: 100%;">
    <NCard title="Thay đổi mật khẩu">
      <NForm
        ref="formRef"
        label-placement="left"
        label-width="140"
        label-align="left"
        require-mark-placement="left"
        :model="formData"
        :rules="rules"
        @submit.prevent="onSubmit"
      >
        <NFormItem path="oldPassword" :label="t('auth.old_password')">
          <NInput v-model:value="formData.oldPassword" type="password" show-password-on="click" />
        </NFormItem>
        <NFormItem path="newPassword" :label="t('auth.new_password')">
          <NInput v-model:value="formData.newPassword" type="password" show-password-on="click" />
        </NFormItem>
        <NFormItem path="confirmPassword" :label="t('auth.confirm_password')">
          <NInput
            v-model:value="formData.confirmPassword"
            type="password"
            show-password-on="click"
          />
        </NFormItem>
        <div class="flex justify-end">
          <NButton
            :loading="state.isPending"
            :disabled="state.isPending"
            type="success"
            attr-type="submit"
          >
            {{ t('page-users.buttons.change_pass') }}
          </NButton>
        </div>
      </NForm>
    </NCard>
  </NSpace>
</template>
