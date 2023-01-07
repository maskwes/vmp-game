<template>
  <div class="is-centered main-menu">
    <div>
      <h1 class="h1 m-bottom-8">Dark ring</h1>
      <nav class="main-menu__nav">
        <g-button to="/game">
          Start game
        </g-button>
      </nav>
    </div>
  </div>
</template>
<script lang="ts" setup>
import GButton from "../ui/GButton.vue";</script>

<style lang="scss">
.main-menu {
  width: 100%;
  height: 100vh;

  &__container {
    transform: translateY(30%);
  }

  &__nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    grid-gap: 20px;
  }
}
</style>
