<template>
  <button :class="$style.button" class="clip" @click="clickEvent">
    <div class="clip">
      <slot></slot>
    </div>
  </button>
</template>

<script lang="ts" setup>
import router from "../../router";

const props = defineProps({
  to: {
    type: String
  }
})

function clickEvent() {
  if (props.to) {
    router.push(props.to)
  }
}

</script>

<style lang="scss" module>
.button {
  position: relative;
  display: inline-block;
  z-index: 1;
  background: black;
  border: none;
  cursor: pointer;
  font-family: 'Bitm Gothic', sans-serif;
  font-size: 40px;
  padding: 3px;
  color: white;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80px;
    width: 300px;
    background: black;

    &:first-letter {
      text-transform: uppercase;
    }
  }


  &:before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0px;
    left: 0;
    right: 0;
    background-color: #c20000;
    z-index: -1;
  }

}
</style>
