<!-- eslint disable -->
 <template>
  <div>
    <h1>Register</h1>
    <input type="email" name="email" v-model="email" placeholder="email" />
    <br />
    <input type="name" name="name" v-model="name" placeholder="name" />
    <br />
    <input type="password" name="password" v-model="password" placeholder="password" />
    <input
      type="password"
      name="passwordConfirm"
      v-model="passwordConfirm"
      placeholder="passwordConfirm"
    />
    <br />
    <button @click="register">Register</button>
  </div>
</template>

<script>
import AuthenticationService from "../services/AuthenticationService"

export default {
  data() {
    return {
      email: "",
      name: "",
      password: "",
      passwordConfirm: ""
    };
  },
  methods: {
      async register () {
          const response = await AuthenticationService.register({
              email: this.email,
              name: this.name,
              password: this.password,
              passwordConfirm: this.passwordConfirm
          })
      }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
