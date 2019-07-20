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
  padding: 0 0 0 15px;
  line-height: 48px;
  border: none;
  color: $white;
  cursor: pointer;
  width: 140px;
  width: 100%;
  height: 48px;
  text-align: center;

  @media (min-width: 768px) {
    width: 140px;
  }

  &--primary {
    border-radius: 3rem;
  }

  &--icon {
    background-image: url("../../assets/icons/plus.svg");
    background-repeat: no-repeat;
    background-size: 15px;
    background-position: 20px 50%;
  }

  &--green {
    background-color: $green-btn;
  }
}
</style>
