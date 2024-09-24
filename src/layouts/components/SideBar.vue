<script setup lang="ts">
/* ----- Import Type ----- */

/* ----- Import Variables ----- */
import { menuOptions } from '@/data/sidebarMenu'

/* ----- Import Components ----- */

/* ----- Global variables ----- */
const route = useRoute()

//#region ----- Element Ref -----
//#endregion ----- Element Ref -----

//#region ----- Stores -----
const appStore = useAppStore()
//#endregion ----- Stores -----

//#region ----- State -----
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
  <n-layout-sider
    bordered
    collapse-mode="width"
    :collapsed="appStore.sideBarCollapsed"
    :collapsed-width="64"
    :width="280"
  >
    <n-scrollbar style="height: calc(100% - 140px); padding-top: 8px">
      <n-menu
        :collapsed-width="64"
        :collapsed-icon-size="22"
        :options="menuOptions"
        :default-expand-all="true"
        :value="appStore.getBreadcrumbRoot?.routeName"
      />
    </n-scrollbar>
  </n-layout-sider>
</template>
