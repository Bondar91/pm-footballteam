import AppTitle from '@/components/ui/AppTitle.vue';
<template>
  <div class="add-page">
    <AppTitle text="Add User" />

    <div class="panel-wrapper" v-if="!statusAdd">
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
            <div class="panel__body-wrapper">
              <div class="image-wrapper">
                <img src="https://unsplash.it/200/200" alt class="image image--avatar" />
              </div>

              <button class="btn btn--block btn--white btn--white-icon">Change Photo</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="success-alert" v-else>
      <h4>Dodano poprawnie:</h4>
      <ul>
        <li>ID: {{user.id }}</li>
        <li>First Name: {{user.first_name }}</li>
        <li>Last Name: {{user.last_name }}</li>
        <li>CreatedAt: {{user.createdAt }}</li>
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
        last_name: ""
      },
      statusAdd: false
    };
  },
  methods: {
    saveUser() {
      this.$http
        .post("https://reqres.in/api/users", this.user)
        .then(response => {
          this.statusAdd = true;
          this.user = response.data;
          console.log(response.data);
          setTimeout(() => {
            this.$router.push({ path: "/" });
          }, 5000);
        });
    }
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

.panel-wrapper {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
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
  }
}

.col-of-4 {
  flex-basis: 30%;
}

.col-of-8 {
  flex-basis: 68%;
}

.form {
  width: 100%;

  &__wrapper {
    display: flex;
    flex-direction: row;
  }
  &__group {
    padding-left: 15px;
    padding-right: 15px;
    width: 50%;
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

.btn-wrapper {
  flex-grow: 1;
  display: flex;
  flex-direction: column;

  justify-content: flex-end;
  width: 200px;
}

.btn--add {
  margin: 20px 0 0 15px;
  border-radius: 5px;
  padding: 15px 15px;
}

.btn--green {
  background-color: $green-btn;
  color: $white;
}

.panel__body-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.image-wrapper {
  margin-bottom: 40px;
}

.image {
  border-radius: 50%;
}

.image--avatar {
  width: 150px;
  height: 150px;
  border: 2px solid $white;
}

.btn--block {
  display: block;
  padding: 10px 20px;
  width: 100%;
}

.btn--white {
  background-color: $white;
  border: 1px solid $border;
  color: $black;
  text-align: center;
}

.success-alert {
  background: $green-btn;
  color: $white;
  font-size: 2.4rem;
  width: 100%;
  padding: 20px;

  @include center;
  flex-direction: column;
}
</style>

