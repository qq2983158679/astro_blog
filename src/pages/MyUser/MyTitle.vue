<template>
  <!-- vue3页面 -->
  <div class="linkList w-[250px] fixed top-[160px] right-[50px] rounded-[10px] bg-text overflow-hidden"
    style="box-shadow: 0 2px 6px 0 rgba(0, 0, 0, .15)">
    <div class="title w-full h-[36px] bg-userBox text-center text-text leading-[36px]">
      目录
    </div>
    <div class="content flex flex-col">
      <a :href="'#' + i.text" v-for="i in porps.headings"> {{ i.text }}</a>
    </div>
  </div>
</template>

<script setup lang='ts'>
const porps = defineProps({
  headings: Array<{
    depth: number
    slug: string
    text: string
  }>

})

</script>

<style scoped></style>