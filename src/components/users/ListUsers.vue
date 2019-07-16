<template>
  <div class="wrapper">
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
          <td>
            <img :src="user.avatar" alt class="image" />
          </td>
          <td>{{`${user.first_name} ${user.last_name}`}}</td>
          <td>
            <a href="#" class="edit-link">
              <i class="fas fa-edit"></i>
            </a>
            <a href="#" class="trash-link">
              <i class="fas fa-trash"></i>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: []
    };
  },
  methods: {
    getUsers() {
      this.$http
        .get("https://reqres.in/api/users")
        .then(({ data }) => (this.users = data.data));
      // .then({ data } => (this.users = data));
    }
  },
  created() {
    this.getUsers();
  }
};
</script>

<style lang="scss" scoped>
</style>

