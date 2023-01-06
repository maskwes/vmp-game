<template>
  <div class="main-layout">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.main-layout {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.55) 52.75%, rgba(0, 0, 0, 0) 100%), url("@/assets/img/backgrounds/menu.gif") black center no-repeat;
  background-size: contain;
  height: 100vh;
  width: 100vw;
}
</style>

