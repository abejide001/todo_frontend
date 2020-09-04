<template>
<div></div>
</template>

<script>
import jwt_decode from 'jwt-decode'
export default {
  beforeMount () {
    try {
      const decoded = jwt_decode(this.$route.query.token)
      if (decoded) {
        this.$store.dispatch('setToken', this.$route.query.token)
        this.$router.push({
          name: 'todos'
        })
        return
      }
    } catch (error) {
      console.log(error.message)
      if (error.message) {
        this.$router.push({
          name: 'login'
        })
      }
    }
  }
}
</script>
