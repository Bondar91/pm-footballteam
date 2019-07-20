<template>
  <table class="table">
    <thead>
      <tr>
        <th></th>
        <th>Full Name</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in users" :key="user.id">
        <ItemElement :user="user" @deleteUser="deleteUser(user.id)" />
      </tr>
    </tbody>
  </table>
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
  methods: {
    deleteUser(id) {
      this.$emit("deleteUser", id);
    }
  },
  components: {
    ItemElement
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.table {
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
  text-align: left;
  display: block;

  @media (min-width: 768px) {
    display: table;
  }

  thead {
    display: block;
    @media (min-width: 768px) {
      display: table-header-group;
    }

    tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
      @media (min-width: 768px) {
        position: static;
      }
    }
  }

  tbody {
    display: block;
    @media (min-width: 768px) {
      display: table-row-group;
    }
  }

  tr {
    border-radius: 5px;
    background: $white;

    display: block;

    @media (min-width: 768px) {
      display: table-row;
    }
    &:nth-child(even) {
      background-color: $background;
    }
  }

  th {
    padding: 12px;
    display: block;
    @media (min-width: 768px) {
      display: table-cell;
    }
  }

  th:first-child,
  th:last-child {
    width: 135px;
  }
}

/* .item-header {
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
} */
</style>
