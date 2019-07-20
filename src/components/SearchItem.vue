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
  display: flex;
  flex-direction: column;
  flex: 0 0 100%;
  order: 1;
  width: 100%;
  margin-top: 20px;

  @media (min-width: 768px) {
    flex: 0 0 30%;
    max-width: 30%;
    width: 30%;
    order: 0;
    margin-top: 0;
  }

  &__input {
    width: 100%;
    padding: 15px;
    font-size: 1.4rem;
    background-color: #f7f8f9;
    border: none;
    border-radius: 0.5rem;
    height: 45px;

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
