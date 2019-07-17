<template>
  <div class="list">
    <AppTitle text="Users List" />

    <div class="panel">
      <div class="panel__header">
        <SearchItem />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AppTitle from "@/components/ui/AppTitle.vue";
import SearchItem from "@/components/SearchItem.vue";

export default {
  components: {
    AppTitle,
    SearchItem
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.list {
  @include centerJustify;

  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 20px;
}

.panel {
  background-color: #ffffff;
  border-radius: 0.5rem;
  border: 1px solid #ebedf0;
  padding: 30px 25px;
  margin-bottom: 30px;
  width: 100%;

  &__header {
    @include centerAlign;

    justify-content: space-between;
  }
}
</style>
