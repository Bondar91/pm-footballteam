<template>
  <button class="btn btn--primary btn--green btn--icon">{{text}}</button>
</template>

<script>
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
</style>


