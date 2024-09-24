<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */

/* ----- Import Components ----- */

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
    <n-grid class="mt-4" cols="2 s:1 m:1 l:2 xl:2 2xl:2" responsive="screen" :x-gap="12" :y-gap="9">
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
                    <p class="px-4 text-gray-400">{{ t('pages.home.intro') }}</p>
                  </div>
                </div>
              </n-gi>
            </n-grid>
          </n-card>
        </n-card>
      </n-gi>
      <n-gi>
        <n-card
          :segmented="{ content: true }"
          content-style="padding-top: 0;padding-bottom: 0;"
          :bordered="false"
          size="small"
          title="Hoạt động"
        >
          <template #header-extra><a href="javascript:;">Xem thêm</a></template>
          <n-list style="max-height: 500px; overflow-y: auto">
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="authStore.profile?.profile.avatar" />
              </template>
              <n-thing title="Bạn vừa mới nạp thành công số tiền 1.000.000 thành công">
                <template #description>
                  <p class="text-xs text-gray-500">2021-07-04 22:37:16</p>
                </template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="authStore.profile?.profile.avatar" />
              </template>
              <n-thing title="Đơn hàng buff like tiktok đã được duyệt">
                <template #description>
                  <p class="text-xs text-gray-500">2021-07-04 09:37:16</p>
                </template>
              </n-thing>
            </n-list-item>
            <n-list-item>
              <template #prefix>
                <n-avatar circle :size="40" :src="authStore.profile?.profile.avatar" />
              </template>
              <n-thing title="Đơn hàng #43578 đã được đã có trạng thái hoàn thành">
                <template #description>
                  <p class="text-xs text-gray-500">2021-07-04 09:37:16</p>
                </template>
              </n-thing>
            </n-list-item>
          </n-list>
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>
