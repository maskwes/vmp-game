<template>
  <div class="panel">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.panel {
  background: grey;
  padding: 20px;

  &:after {
    display: inline-block;
  }
}
</style>
