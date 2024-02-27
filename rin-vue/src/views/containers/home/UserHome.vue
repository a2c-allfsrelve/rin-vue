<template>
  <template id="home_content" class="full-width row justify-center items-center content-center">
    <div class="home_child col-7" id="postlist_area" v-for="(post) in state.postList" :key="post.postId">
      <PostSection :post="post"/>
    </div>
  </template>

</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import PostSection from '@/views/presentationals/PostSection.vue'
import type { Post } from '@/types'

export default defineComponent({
  // TODO サイドバーと被らないかつセクションごとに分かれるようなレイアウトにしたい。→ LayoutBasicとの間にもうひとつレイアウトを噛まそう
  name: 'UserHome',
  components: {
    PostSection
  },
  setup() {
    const str = [
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！',
      'うわぁぁぁああ！！！'
    ]
    const state = reactive({
      postList: [] as Array<Post>,
    })
    const getPostData = () => {
      // TODO API実行部分を実装
      state.postList = [
        {
          postId: 1,
          accountId: 'asdfg',
          accountName: 'けつげ',
          createDate: '2024年2月18日',
          title: 'ケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポートケツ毛パスポート',
          tags: [
            'AI', 'けつげ', 'けつ毛', 'AI', 'けつげ', 'けつ毛', 'AI', 'けつげ', 'けつ毛', 'AI', 'けつげ', 'けつ毛'
          ],
          stared: true,
          opened: null
        },
        {
          postId: 2,
          accountId: 'aasdf',
          accountName: 'けつげ',
          createDate: '2024年2月18日',
          title: 'けつ毛パスポート',
          tags: [
            'AI', 'けつげ', 'けつ毛'
          ],
          stared: false,
          opened: null
        },
        {
          postId: 3,
          accountId: 'asdf',
          accountName: 'けつげ',
          createDate: '2024年2月18日',
          title: 'ケツ毛パスポート',
          tags: [
            'AI', 'けつげ', 'けつ毛'
          ],
          stared: false,
          opened: null
        },
        {
          postId: 4,
          accountId: 'asdf',
          accountName: 'けつげ',
          createDate: '2024年2月18日',
          title: 'けつ毛パスポート',
          tags: [
            'AI', 'けつげ', 'けつ毛'
          ],
          stared: false,
          opened: null
        }
      ]
    }
    
    getPostData()

    return {
      str,
      state,
    }
  }
})
</script>

<style>
.home_child {
  overflow: auto;
}
#postlist_area {
  padding-top: 28px;
}
</style>