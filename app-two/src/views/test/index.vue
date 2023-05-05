<script setup lang="ts">
import SubComp from './components/sub-comp.vue'
</script>

<template>
 <div>
  <div class="sub-test">这是子应用</div>
  <SubComp item="fendt"/>
 </div>
</template>

<style lang="scss" scoped>
.sub-test {
  @apply my-20px text-green-400 text-16px;
}
</style>
