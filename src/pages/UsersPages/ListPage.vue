<template>
  <div class="list-page">
    <AppTitle text="Users List" />

    <div class="panel">
      <div class="panel__header">
        <SearchItem />
        <AppButton text="Add user" />
      </div>

      <div class="divaider"></div>

      <div class="panel__body">
        <ItemList :users="users" @deleteUser="deleteUser" />
      </div>
    </div>

    <WithPagination :pagination="pagination" v-on:next="getUsers" />

    <div class="alert" v-if="isDeleted">Usunięto poprawnie</div>
  </div>
</template>

<script>
/* eslint-disable */
import AppTitle from "@/components/ui/AppTitle.vue";
import SearchItem from "@/components/SearchItem.vue";
import AppButton from "@/components/ui/AppButton.vue";
import ItemList from "@/components/Items/ItemList.vue";
import WithPagination from "@/components/layout/WithPagination.vue";

export default {
  name: "ListPage",
  data() {
    return {
      users: [],
      pagination: {
        last_page: null,
        current_page: 1,
        prev_page_url: null
      },
      isDeleted: false
    };
  },
  methods: {
    getUsers(page = 1) {
      this.$http
        .get("https://reqres.in/api/users", {
          params: {
            page
          }
        })
        .then(({ data }) => {
          this.users = data.data;
          this.pagination.last_page = data.total_pages;
          this.pagination.current_page = data.page;
          this.pagination.prev_page_url = data.page;
        });
    },
    deleteUser(id) {
      this.$http.delete("https://reqres.in/api/users/" + id).then(response => {
        this.isDeleted = true;
        this.getUsers(this.pagination.current_page);

        setTimeout(() => {
          this.isDeleted = false;
        }, 3000);
      });
    }
  },
  created() {
    this.getUsers();
  },
  components: {
    AppTitle,
    SearchItem,
    AppButton,
    ItemList,
    WithPagination
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.list-page {
  @include centerJustify;

  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 20px;
}

.panel {
  background-color: $white;
  border-radius: 0.5rem;
  border: 1px solid $border;
  padding: 30px 25px;
  margin-bottom: 30px;
  width: 100%;

  &__header {
    @include centerAlign;

    justify-content: space-between;
  }
}

.divaider {
  border: 1px solid $border;
  margin: 25px 0;
}

.alert {
  background-color: $green-btn;
  padding: 20px;
  font-size: 2.2rem;
  color: $white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  text-align: center;
}
</style>
