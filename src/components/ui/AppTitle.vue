<template>
  <h1 class="HeadingPrimary text-left">{{text}}</h1>
</template>

<script>
/* eslint-disable */
export default {
  name: "AppTitle",
  props: {
    text: {
      type: String,
      required: true
    }
  }
};
</script>




