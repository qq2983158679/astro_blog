<template>
  <div class="main">
    <div class="title text-content" :style="{ color: props.color ? props.color : '' }">[ 欢迎来到搜索页面 ]</div>
    <div class="w-full flex">
      <input type="text" name="" id="" class="input" placeholder="请搜索内容" v-model="search" />
      <div class="btn w-[15%] h-full bg-blue_box text-center text-text text-xl leading-[60px]" @click="searchText">
        搜索
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
const props = defineProps<{
  color?: string
}>()
const search = ref('')
const searchText = () => {
  localStorage.setItem('searchText', search.value)
  location.href = '/blog'
}
onMounted(() => {
  localStorage.removeItem('searchText')
  window.addEventListener('keyup', (e: any) => {
    if (e.key === 'Enter') {
      searchText()
    }
  })
})
</script>
<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 40px;
}

.title {
  font-size: 20px;
  padding: 100px 0 30px;
}

.input {
  padding-left: 20px;
  width: 85%;
  height: 60px;
  border: 3px solid rgb(177 122 161);
  border-radius: 10px 0 0 10px;
}

.btn {
  cursor: pointer;
  user-select: none;
  border-radius: 0 10px 10px 0;
}
</style>
