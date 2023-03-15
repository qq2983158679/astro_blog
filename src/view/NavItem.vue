<template>
  <div class="YiYAn">
    <p :class="isYiyan ? 'donghua' : ''">{{ yiyan.hitokoto }}---- <span class="from">「 {{ yiyan.from }} 」</span></p>
  </div>
</template>

<script setup lang='ts'>
import { ref, onMounted } from 'vue'
const yiyan = ref('') as any
const isYiyan = ref(false)
onMounted(async () => {
  try {
    const response = await fetch("https://v1.hitokoto.cn/?c=j&c=b");
    yiyan.value = await response.json();
    setInterval(async () => {
      isYiyan.value = true;
      const response = await fetch("https://v1.hitokoto.cn/?c=j&c=b");
      yiyan.value = await response.json();
      guanbi()
    }, 5000)
  } catch (error) {
    console.log(error)
  }
})
const guanbi = () => {
  setTimeout(() => {
    isYiyan.value = false;
  }, 600)
}
</script>

<style scoped>
.YiYAn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: #fff;
  text-shadow: 0 0 0.521vw #69e0ff, 0 0 1.042vw #69e0ff, 0 0 2.083vw #69e0ff;
}

.from {
  font-size: 10px;
}

.donghua {
  animation-delay: 5s;
  animation: yiyan 0.6s linear;
}

@keyframes yiyan {
  0% {
    transform: translateY(-200%);
  }

  100% {
    transform: translateY(0);
  }
}
</style>