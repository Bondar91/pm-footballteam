<template>
  <div class="search">
    <div class="search__group">
      <input
        type="text"
        class="search__input search__input--icon"
        placeholder="Search for users..."
      />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "SearchItem"
};
</script>

<style lang="scss" scoped>
.search {
  flex-basis: 30%;

  &__input {
    width: 100%;
    padding: 15px;
    font-size: 1.4rem;
    background-color: #f7f8f9;
    border: none;
    border-radius: 0.5rem;

    &--icon {
      padding: 10px 0px 10px 15px;
      background-image: url("../assets/icons/magnifier.svg");
      background-size: 15px;
      background-position: right 15px top 50%;
      background-repeat: no-repeat;
    }
  }
}
</style>
