<script setup lang="tsx">
import { ref } from "vue";
import { MyButton } from "./MyButton.tsx";
import { TodoList } from "./TodoList/TodoList";

defineProps({
  msg: {
    type: String,
    default: ''
  },
});

const count = ref(0);
</script>

<template>
  <h4>props传递的值：{{ msg }}</h4>

  <div class="card">
    <button type="button" @Click="count++">
      ref响应式的数据是： {{ count }}
    </button>
  </div>
  <div>
    自定义button：
    <MyButton title="点击我" />
  </div>
  <div>
    <TodoList />
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
