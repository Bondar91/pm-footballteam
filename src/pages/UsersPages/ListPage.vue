<template>
  <div class="list">
    <AppTitle text="Users" />
  </div>
</template>

<script>
/* eslint-disable */
import AppTitle from "@/components/ui/AppTitle.vue";

export default {
  components: {
    AppTitle
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.list {
  @include centerAlign;

  max-width: 100%;
  padding: 0 20px;
}
</style>
