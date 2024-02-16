<template>
  <q-layout view="hHh lpR fff">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer"/>
        <q-toolbar-title>
          Title
        </q-toolbar-title>
      </q-toolbar>
    </q-header>
    <q-drawer v-model="leftDrawerOpen" :width="200" side="left" overlay bordered>
      <q-list>
        <template v-for="(menuItem, index) in menuList" :key="index">
          <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple>
            <q-item-section avatar>
              <q-icon :name="menuItem.icon"/>
            </q-item-section>
            <q-item-section>
              {{ menuItem.label }}
            </q-item-section>
          </q-item>
          <q-separator :key="'sep' + index"  v-if="menuItem.separator"/>
        </template>
      </q-list>
    </q-drawer>

    <q-page-container class="container">
      <RouterView />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <div>Title</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'LayoutBasic',
  setup () {
    const leftDrawerOpen = ref(false)
    // TODO メニューごとにリンクを貼る
    // あと別のコンポーネントに逃す
    const menuList = [
      {
        icon: 'home',
        label: 'Home',
        separator: false
      },
      {
        icon: 'person',
        label: 'Mypage',
        separator: false
      },
      {
        icon: 'event',
        label: 'Schedules',
        separator: true
      },
      {
        icon: 'notifications',
        label: 'Notifications',
        separator: false
      },
      {
        icon: 'feedback',
        label: 'Send Feedback',
        separator: false
      },
      {
        icon: 'help',
        iconColor: 'primary',
        label: 'Help',
        separator: false
      }
    ]
    const toggleLeftDrawer = () => {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }
    return {
      RouterView,
      leftDrawerOpen,
      menuList,
      toggleLeftDrawer
    }
  }
})
</script>

<style scoped>

</style>