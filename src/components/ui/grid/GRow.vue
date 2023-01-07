<template>
  <div class="row">
    <slot></slot>
  </div>
</template>

<style lang="scss">
.row {
  display: grid;
  grid-template-columns: repeat(12, minmax(calc(30px), 1fr));
  grid-gap: 40px;
}
</style>
