<template>
  <div :class="'col-'+cols" class="col">
    <slot></slot>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  cols: {
    type: [String, Number],
  }
})
</script>

<style lang="scss">
@for $i from 1 through 12 {
  .col-#{$i} {
    padding: 25px;
    grid-column: span #{$i};
  }
}
</style>
