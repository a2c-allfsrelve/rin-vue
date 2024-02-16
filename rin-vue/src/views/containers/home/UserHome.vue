<template>
  <div id="home-content">
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
    <h2 id="box">{{ str }}</h2>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // TODO サイドバーと被らないかつセクションごとに分かれるようなレイアウトにしたい。→ LayoutBasicとの間にもうひとつレイアウトを噛まそう
  name: 'UserHome',
  setup() {
    const str = 'うわぁぁぁぁぁぁああ！！！！！！！！！'
    
    return {
      str
    }
  }
})
</script>

<style>
#home-content {
  margin-left: 200px;
}
</style>