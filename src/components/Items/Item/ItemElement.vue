<template>
  <fragment>
    <td>
      <img :src="user.avatar" alt class="image" />
    </td>
    <td>{{`${user.first_name} ${user.last_name}`}}</td>
    <td>
      <span class="icon-wrapper">
        <router-link v-bind:to="'/users/edit/'+user.id" class="icon-edit">
          <font-awesome-icon icon="edit" />
        </router-link>
        <button @click="deleteUser(user.id)" class="icon-trash">
          <font-awesome-icon icon="trash" />
        </button>
      </span>
    </td>
  </fragment>
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
  },
  methods: {
    deleteUser(id) {
      this.$emit("deleteUser", id);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
td {
  display: block;
  position: relative;
  padding-left: 50%;
  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: 768px) {
    display: table-cell;
    padding: 12px;
    position: static;
  }

  &:before {
    position: absolute;
    top: 12px;
    left: 12px;
    width: 45%;
    padding-right: 10px;
    white-space: nowrap;
    font-weight: 700;

    @media (min-width: 768px) {
      display: none;
    }
  }

  &:nth-of-type(1):before {
    content: "";
  }

  &:nth-of-type(2):before {
    content: "Full Name";
  }

  &:nth-of-type(3):before {
    content: "Actions";
  }

  .icon-wrapper {
    display: flex;
    @media (min-width: 768px) {
      display: inline-block;
    }
  }
}

td:first-child,
td:last-child {
  width: 135px;
}

td:first-child {
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
}
td:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

.image {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.icon-edit,
.icon-trash {
  display: inline-block;
  margin-right: 1rem;
  font-size: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: $action-icon;
  transition: color 0.3s;

  &:hover {
    color: $action-icon-hover;
  }
}
</style>


