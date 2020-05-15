<template>
  <div class="profile">
    <h1> Profile User Id ( {{userId}} )</h1>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  data () {
    return {
     userId : this.$route.params.user_id
    }
  },
  methods:{
      updateId(){
          this.userId = this.$route.params.user_id
      }
  },
//   watch:{
//       $route: 'updateId'
//   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
    color: green;
}
</style>