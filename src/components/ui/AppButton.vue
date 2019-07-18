<template>
  <router-link to="/users/add" class="btn btn--primary btn--green btn--icon">{{text}}</router-link>
</template>

<script>
/* eslint-disable */
export default {
  name: "AppButton",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.btn {
  font-size: 1.6rem;
  text-decoration: none;
  padding: 15px 30px;
  border: none;
  color: #ffffff;
  cursor: pointer;
  width: 140px;
  height: 48px;

  &--primary {
    border-radius: 3rem;
  }

  &--icon {
    background-image: url("../../assets/icons/plus.svg");
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 20px 50%;
    padding: 14px 20px 14px 40px;
  }

  &--green {
    background-color: $green-btn;
  }
}
</style>
