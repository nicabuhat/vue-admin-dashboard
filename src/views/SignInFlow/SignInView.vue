<template>
  <div
    class="container"
    :class="{ 'light-background': !isDarkMode, 'dark-background': isDarkMode }"
  >
    <div class="request">
      Don't have an account?
      <router-link to="/request">Request an account</router-link>
    </div>
    <div class="login">
      <div
        class="logo"
        :class="{ 'logo-dark': !isDarkMode, 'logo-light': isDarkMode }"
      ></div>
      <h4 :class="{ 'dark-text': !isDarkMode, 'light-text': isDarkMode }">
        Sign into Admin Dashboard
      </h4>
      <input
        :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        type="email"
        placeholder="Email"
      />
      <input
        :class="{ 'dark-field': !isDarkMode, 'light-field': isDarkMode }"
        type="password"
        placeholder="Password"
      />
      <button>Sign In</button>
      <router-link to="/recover">Forgot your password</router-link>
      <button @click="toggleDarkMode">toggle</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "SignInView",
  computed: {
    isDarkMode() {
      return this.$store.getters.isDarkMode;
    },
  },
  methods: {
    toggleDarkMode() {
      this.$store.commit("toggleDarkMode");
    },
  },
};
</script>

<style lang="scss" scoped>
.light-background {
  background-color: $light-gray;
}
.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $white;
}
.dark-text {
  color: $black;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgb(198, 208, 235, 0.2);
  border: 1px solid rgb(0, 0, 0, 0.2);

  &::placeholder {
    color: rgb(0, 0, 0, 0.3);
  }
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  position: relative;
}

.request {
  position: absolute;
  top: 40px;
  right: 40px;
  color: rgba($teal, 0.5);

  a {
    color: $white;
  }
}
.login {
  width: 400px;
}

.logo {
  height: 50px;
  width: 50px;
  margin: 0 auto 1em;
}

.logo-light {
  background-color: pink;
}
.logo-dark {
  background-color: $dark-blue;
}

h4 {
  @include heading-4;
  margin: 0;
}

input {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  height: 60px;
  width: 100%;
  padding: 0 0.5em;
  margin-top: 1em;
  @include medium-text;

  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

button {
  background-color: $teal;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  height: 60px;
  width: 100%;
  margin: 20px 0 40px;
  @include medium-text;
}

a {
  @include normal-text((rgba($teal, 0.5)));
  text-decoration: none;
}
</style>
