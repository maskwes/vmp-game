<template>
  <div :id="gameId" :class="$style.game"></div>
</template>

<style module>
.game {
  width: 100vw;
  height: 100vh;
}
</style>

<script lang="ts" setup>
import {startGame} from "../game";
import {onMounted} from "vue";
import DeadSwamp from "../game/scenes/deadSwamp";

const gameId: string = 'game'
let game: Phaser.Game

onMounted(() => {
  return game = startGame(gameId, DeadSwamp)
})
</script>
