<template>
  <div class="item">
    <div class="item__image">
      <img :src="user.avatar" alt class="image" />
    </div>
    <p class="item__text">{{`${user.first_name} ${user.last_name}`}}</p>
    <div class="item__icon">
      <router-link to="/users/edit" class="icon__edit">
        <font-awesome-icon icon="edit" />
      </router-link>
      <button @click="deleteUser(user.id)" class="icon__trash">
        <font-awesome-icon icon="trash" />
      </button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "ItemElement",
  props: {
    user: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
.item {
  @include centerAlign;
  width: 100%;
  padding: 2.5rem 1rem;
  color: $black;

  &__image {
    flex-basis: 10%;
  }

  &__text {
    flex-basis: 80%;
  }

  &__icon {
    flex-basis: 10%;
    display: flex;

    & .icon__trash,
    & .icon__edit {
      background: none;
      border: none;
      font-size: 2.5rem;
      margin-right: 1rem;
      color: $action-icon;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: $action-icon-hover;
      }
    }
  }
}

.image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}
</style>


