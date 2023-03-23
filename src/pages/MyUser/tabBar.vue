<template>
  <aside class="basis-1/6 shadow-2xl bg-text min-h-[100vh] pt-[100px]">
    <a :href=post.url v-for="post, index in props.allPosts" class="tabBar item px-3 py-1 flex  text-left text-[#2c3e50]"
      :style="{ color: flag === post.url ? '#3eaf7c' : '' }" :class="flag === post.url ? 'active' : ''">

      {{ post.frontmatter.title }}
    </a>
  </aside>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue"
const flag = ref('')
const props = defineProps({
  allPosts: Array<{
    url: string;
    frontmatter: {
      title: string;
      [key: string]: string;
    }
  }>
})
onMounted(() => {
  flag.value = location.pathname
})
</script>
<style>
.item {
  border-left: 5px solid transparent;
  transition: all 0.6s;
}

.item:hover {
  background-color: rgba(62, 175, 124, .15);
  border-left-color: #3eaf7c;

}

.active {
  background-color: rgba(62, 175, 124, .15);
  border-left-color: #3eaf7c;
  color: #3eaf7c;
}

.item:hover a {
  color: #3eaf7c;
  transition: all 0.6s;
}
</style>