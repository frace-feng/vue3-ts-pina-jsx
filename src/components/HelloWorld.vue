<script setup lang="tsx">
import { ref } from "vue";
import { MyButton } from "./MyButton.tsx";
import { TodoList } from "./Todo";

defineProps({
  msg: String,
});

const count = ref(0);
</script>

<template>
  <h4>{{ msg }}</h4>

  <div class="card">
    <button type="button" @Click="count++">
      count is {{ count }}
    </button>
    <div>
      <MyButton title="点击我" />
    </div>
    <div>
      <TodoList />
    </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
