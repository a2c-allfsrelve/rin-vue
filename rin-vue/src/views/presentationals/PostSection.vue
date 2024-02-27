<template>
  <div class="post_section">
    <div class="icon-column">
      <!-- アイコンを取得したものに -->
      <img class="icon-img" src="@/assets/img/icon-img.png" alt="icon">
    </div>
    <div class="article-column">
      <div class="head-row">
        <span class="head-row-left">
          <span id="account-id">{{ post.accountId }}</span> <!-- アカウントへのリンク作成 -->
          <span id="create-date">{{ post.createDate }}</span>
        </span>
        <span class="head-row-right">
          <span v-if="post.opened === true" >公開</span>
          <span v-else-if="post.opened === false" >非公開</span> 
        </span>
      </div>
      <div class="title-row">{{ post.title }}</div>
      <div class="foot-row">
        <div  id="tags_area">
          <span v-for="tag in post.tags" :key="tag">
            <q-btn class="tag_button" outline rounded color="primary" :label="tag" size="xs" />
          </span>
        </div>
        <div class="fav_button">
          <span @click="handleFav">
            <q-btn v-if="fav" class="glossy" color="red" icon="favorite" size="xs" />
            <q-btn v-else class="glossy" color="gray" icon="favorite" size="xs" />
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { Post } from '@/types';
import { defineComponent, reactive, type PropType, ref } from 'vue';

export default defineComponent({
  name: 'PostSection',
  props:{
    'post': {
      type: Object as PropType<Post>,
      required: true
    }
  },
  setup(props) {
    const state = reactive({
    })
    const fav = ref(props.post.stared)

    const handleFav = () => {
      console.log()
      fav.value = !fav.value
    }
    return {
      state,
      fav,
      handleFav
    }
  }
})

</script>

<style lang="scss" scoped>

.my-card {
  background: FFFFFF,
}
.icon-column {
  width: 10%;
}
.icon-img {
  width: 75%;
  height: 60px;
}
.post_section {
  display: flex;
  margin:0 0 1em;
}
.article-column {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  width: 90%;
}
/* FIXME わかりやすいようにボーダーを引いておく */
.head-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
}
#create-date {
  margin-left: 10px;
}
#account-id{
  margin-left: 5px;
}
.foot-row {
  flex: 1;
  display: flex;
  justify-content: space-between;
}
.title-row {
  font-size: larger;
  margin-bottom: 10px;
  width: 80%;
  overflow-y:hidden
}
#tags_area {
  display: flex;
  white-space: nowrap;
  overflow-y: scroll;
  align-items: center;
  width: 80%;
}
.tag_button {
  margin-left: 5px;
}
.fav_button {
  margin-left: auto;
}
</style>