import AppTitle from '@/components/ui/AppTitle.vue';
<template>
  <div class="add-page">
    <AppTitle text="Edit User" />

    <div class="panels-wrapper">
      <div class="col-of-8">
        <div class="panel">
          <div class="panel__body">
            <div class="form">
              <div class="form__wrapper">
                <div class="form__group">
                  <label for class="form__label">First Name</label>
                  <input
                    type="text"
                    name="first_name"
                    class="form__input form__input--white"
                    placeholder="Add first name..."
                    v-model="user.first_name"
                    required
                  />
                </div>
                <div class="form__group">
                  <label for class="form__label">Last Name</label>
                  <input
                    type="text"
                    name="last_name"
                    class="form__input form__input--white"
                    placeholder="Add last name..."
                    v-model="user.last_name"
                    required
                  />
                </div>
              </div>
              <div class="btn-wrapper">
                <button @click="saveUser" class="btn btn--green btn--add">Update Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="col-of-4">
        <div class="panel">
          <div class="panel__body">
            <div class="image-wrapper">
              <img :src="user.avatar" alt class="image image--avatar" />
            </div>

            <button class="btn btn--block btn--white btn--white-icon" v-on:click="isInput=true">
              <font-awesome-icon icon="camera" class="icon-photo" />Change Photo
            </button>
            <input
              name="avatar"
              type="url"
              class="form__input form__input--white"
              placeholder="Pls add url image..."
              v-model="user.avatar"
              v-if="this.isInput"
              required
            />
          </div>
        </div>
      </div>
    </div>

    <div class="alert" v-if="statusAdd">
      <h4>Dodano poprawnie:</h4>
      <ul class="list-unstyled">
        <li>ID: {{user.id }}</li>
        <li>Avatar: {{user.avatar}}</li>
        <li>First Name: {{user.first_name }}</li>
        <li>Last Name: {{user.last_name }}</li>
        <li>UpdatedAt: {{user.updatedAt }}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import AppTitle from "@/components/ui/AppTitle.vue";
import { setTimeout } from "timers";

export default {
  name: "AddPage",
  components: {
    AppTitle
  },
  data() {
    return {
      user: {
        first_name: "",
        last_name: "",
        avatar: ""
      },
      statusAdd: false,
      isInput: false
    };
  },
  methods: {
    saveUser() {
      this.$http
        .put("https://reqres.in/api/users/" + this.user.id, this.user)
        .then(() => {
          this.statusAdd = true;
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 5000);
        })
        .catch(errorResponse => {
          console.error(errorResponse);
        });
    },
    getUser(id) {
      this.$http
        .get("https://reqres.in/api/users/" + id)
        .then(({ data }) => {
          this.user = data.data;
        })
        .catch(errorResponse => {
          console.error(errorResponse);
        });
    }
  },
  created: function() {
    this.getUser(this.$route.params.userId);
  }
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";

.add-page {
  @include centerJustify;

  flex-direction: column;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 20px;
}

.panels-wrapper {
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
}

.col-of-4 {
  width: 100%;

  @media (min-width: 768px) {
    width: 30%;
  }
}

.col-of-8 {
  width: 100%;

  @media (min-width: 768px) {
    width: 70%;
    margin-right: 3rem;
  }
}

.panel {
  background-color: $white;
  border-radius: 0.5rem;
  border: 1px solid $border;
  padding: 30px 25px;
  margin-bottom: 30px;
  width: 100%;
  min-height: 30vh;
  height: 100%;

  &__body {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }
}

.form {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &__wrapper {
    display: flex;
    flex-direction: column;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  }
  &__group {
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 2rem;
    width: 100%;

    @media (min-width: 768px) {
      margin-bottom: 0;
      width: 50%;
    }
  }

  &__input {
    width: 100%;
    padding: 15px;
    font-size: 1.4rem;
    border: none;
    border-radius: 0.5rem;
  }

  &__input--white {
    background-color: $white;
    border: 1px solid $border;
  }

  &__label {
    display: block;
    font-size: 1.4rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
}

.image {
  border-radius: 50%;

  &-wrapper {
    margin-bottom: 40px;
  }

  &--avatar {
    width: 150px;
    height: 150px;
    border: 2px solid $white;
  }
}

.btn {
  background: none;
  border: none;
  cursor: pointer;
  &-wrapper {
    width: 200px;
  }

  &--add {
    margin: 20px 0 0 15px;
    border-radius: 5px;
    padding: 15px 15px;
  }

  &--green {
    background-color: $green-btn;
    color: $white;
  }

  &--block {
    display: block;
    padding: 10px 20px;
    width: 100%;
  }

  &--white {
    background-color: $white;
    border: 1px solid $border;
    color: $black;
    text-align: center;
  }
}

.icon-photo {
  margin-right: 5px;
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

.list-unstyled {
  list-style: none;
}
</style>
