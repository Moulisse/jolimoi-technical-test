<template>
  <main>
    <form @submit.prevent="submit">
      <input v-model="req" />
      <button type="submit">SVBMIT</button>
    </form>
    <p>
      {{ res }}
    </p>
  </main>
</template>

<script setup lang="ts">
import { ref } from "vue";

const req = ref("");
const res = ref("");

function submit() {
  res.value = req.value;
}
</script>
