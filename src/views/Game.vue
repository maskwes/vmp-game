<template>
  <canvas id="game"></canvas>
</template>

<script lang="ts" setup>
import * as ex from 'excalibur';
import {startGame} from "../game";
import {onMounted} from "vue";
import {Loader} from "../game/resources";
import {DeadSwamp} from "../game/levels/deadSwamp";


onMounted(() => {
  startGame()
})
</script>
