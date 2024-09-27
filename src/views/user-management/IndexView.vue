<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */
import ChangePasswordModal from './components/ChangePasswordModal.vue'
/* ----- Global variables ----- */

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const authStore = useAuthStore()
//#endregion ----- Stores -----

//#region ----- State -----
const state = reactive({
  isFetching: true,
  isPending: false,
  isError404: false
})

//#endregion ----- State -----

//#region ----- Composables -----
//#endregion ----- Composables -----

//#region ----- Variables -----
//#endregion ----- Variables -----

//#region ----- Functions -----
//#endregion ----- Functions -----

//#region ----- Hooks -----
//#endregion ----- Hooks -----
</script>

<template>
  <div>
    <n-grid class="mt-4" cols="1" responsive="screen" :x-gap="12" :y-gap="9">
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding: 0;"
          :bordered="false"
          size="small"
        >
          <n-card :bordered="false">
            <n-grid cols="1" responsive="screen" :x-gap="0" :y-gap="0" style="width: 100%">
              <n-gi>
                <div class="flex items-center">
                  <div>
                    <n-avatar circle :size="64" :src="authStore.profile?.profile.avatar" />
                  </div>
                  <div>
                    <p class="px-4 text-xl">Hi ! {{ authStore.profile?.username }}</p>
                    <p class="px-4 text-gray-400">{{ t('pages.user.intro') }}</p>
                  </div>
                </div>
              </n-gi>
            </n-grid>
          </n-card>
        </n-card>
        <n-card
          :bordered="false"
          title="Thông tin khác"
          class="mt-4 proCard"
          size="small"
          :segmented="{ content: true }"
        >
          <template #header-extra>
            <n-button type="primary">{{ t('page.users.buttons.edit') }}</n-button>
          </template>
          <n-descriptions label-placement="left" class="py-2">
            <n-descriptions-item :label="t('page.users.email')">{{
              authStore.profile?.email
            }}</n-descriptions-item>
            <n-descriptions-item :label="t('page.users.phone')">{{
              authStore.profile?.email
            }}</n-descriptions-item>
            <n-descriptions-item :label="t('page.users.phone')">{{
              authStore.profile?.phone
            }}</n-descriptions-item>
            <n-descriptions-item :label="t('page.users.total-money')"> 21,000</n-descriptions-item>
            <n-descriptions-item :label="t('page.users.roles')">{{
              authStore.profile?.roles?.map((role) => role.name).join(', ') || ''
            }}</n-descriptions-item>
            <n-descriptions-item label="Xác thực">
              <n-tag type="success"> Đã xác thực</n-tag>
            </n-descriptions-item>
          </n-descriptions>
        </n-card>
        <ChangePasswordModal :id="null" :show="true" />
      </n-gi>
    </n-grid>
  </div>
</template>
