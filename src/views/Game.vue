<template>
  <canvas id="game"></canvas>
</template>

<script lang="ts" setup>
import {startGame} from "../game";
import {onMounted} from "vue";

onMounted(() => {
  startGame()
})
</script>
