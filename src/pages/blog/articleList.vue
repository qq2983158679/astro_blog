<template>
  <main class="article_item" v-for="Post in posts" :key="Post.url">
    <a :href='Post.url'
      class="flex hover:bg-blue_content max-h-[1650px] p-1 rounded-[10px] transition-all duration-600 cursor-pointer">
      <div>
        <img class="max-w-[200px] rounded-[10px] object-cover max-h-[145px]" :src='Post.frontmatter.image.url'
          :alt='Post.frontmatter.image.alt' />
      </div>
      <div class="text-text flex flex-col px-4 overflow-hidden">
        <p class="text-xs">
          <span v-for="item in Post.frontmatter.tags">
            ﹝ {{ item }} ﹞
          </span>
        </p>
        <p class="text-2xl my-3">
          {{ Post.frontmatter.title }}
        </p>
        <p class="text-sl w-full" style="overflow: hidden; white-space: nowrap; text-overflow: ellipsis;">
          {{ Post.frontmatter.description }}
        </p>
      </div>
    </a>
  </main>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
const porps = defineProps<{
  allPosts: {
    url: string;
    frontmatter: {
      title: string;
      image: {
        url: string;
        alt: string;
      };
      tags: string[];
      description: string;
    }
  }[]
}>();

let posts = ref(porps.allPosts)
onMounted(() => {
  const searchText = localStorage.getItem('searchText')
  if (searchText) {
    const regexp = new RegExp('^(?=.*' + searchText + ').*$', 'i')
    posts.value = posts.value.filter(item => {
      return item.frontmatter.title.match(regexp)
    })
  }
})
</script>