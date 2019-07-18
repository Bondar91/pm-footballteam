<template>
  <div class="pagination">
    <a
      href="#"
      class="pagination__link"
      :class="{ 'disabled': (pagination.prev_page_url === 1) }"
      @click="next(pagination.current_page-1)"
    >&laquo;</a>

    <a
      href="#"
      v-for="page in pagination.last_page"
      :key="page"
      :class="{ 'active':pagination.current_page === page }"
      @click.prevent="next(page)"
      class="pagination__link"
    >{{ page }}</a>

    <a
      href="#"
      :class="{ 'disabled': pagination.current_page === pagination.last_page }"
      class="pagination__link"
      @click="next(pagination.current_page+1)"
    >&raquo;</a>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  name: "WithPagination",
  props: ["pagination"],
  methods: {
    next(page) {
      this.$emit("next", page);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.pagination {
  display: flex;

  &__link {
    color: $green-btn;
    padding: 8px 16px;
    text-decoration: none;
    background-color: $white;
    border: 1px solid #ebedf0;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
      background-color: $green-btn;
      color: $white;
    }

    &:first-child {
      border-radius: 5px 0 0 5px;
    }

    &:last-child {
      border-radius: 0 5px 5px 0;
    }
  }
}

.active {
  background-color: $green-btn;
  color: $white;
}

.disabled {
  cursor: not-allowed;
  pointer-events: none;
  background-color: rgb(229, 229, 229) !important;
}
</style>
