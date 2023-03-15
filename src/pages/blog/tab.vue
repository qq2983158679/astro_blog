<template>
  <header class="flex px-[20rem] flex-wrap">
    <button v-for="item in props.tablist"
      class="text-text relative  focus:bg-blue_content bg-blue_box w-[100px] h-[45px] text-center leading-[45px] m-1 rounded-[10px] cursor-pointer hover:bg-blue_content active:bg-blue_content">

      <a :href="'/blog/' + item" class="absolute w-full h-full top-[0] left-[0]"> {{ item }}</a>
    </button>
  </header>
</template>

<script setup lang='ts'>
const props = defineProps({
  tablist: Array<string>,
})
</script>

<style scoped></style>