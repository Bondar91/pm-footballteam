<template>
  <div class="list">
    <div class="list__items">
      <div class="item-header">
        <h4 class="item-header__image"></h4>
        <h4 class="item-header__text">Name</h4>
        <h4 class="item-header__icon">Action</h4>
      </div>
      <div class="list__item" v-for="user in users" :key="user.id">
        <ItemElement :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import ItemElement from "@/components/Items/Item/ItemElement.vue";

export default {
  name: "ItemList",
  props: {
    users: {
      type: Array
    }
  },
  components: {
    ItemElement
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.list {
  width: 100%;

  &__item {
    &:nth-child(even) {
      background-color: $background;
    }
  }
}

.item-header {
  @include centerAlign;
  padding: 2.5rem 1rem;
  &__image {
    flex-basis: 10%;
  }

  &__text {
    flex-basis: 80%;
  }

  &__icon {
    flex-basis: 10%;
  }
}
</style>
