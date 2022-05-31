<template>
<v-app >
  <NavBar :LogInStatus="LogInStatus" />
  <v-content>
    <router-view @LogedIN="UpdateLogIn"></router-view>
  </v-content>
  
  </v-app>  
</template>



<script>
import NavBar from "./components/NavBar.vue";
export default {
  name: 'App',
  components:{NavBar},
  data: () => ({
    LogInStatus:false
  }),methods: {
    UpdateLogIn(value) {
        this.LogInStatus=value
    }
}
  ,
  mounted: function () {
  this.$nextTick(function () {
  if(localStorage.getItem("token")===null){return}
  this.LogInStatus=true
  })
}
};
</script>
<style>
#app{
  background: fixed;
background: linear-gradient(DodgerBlue,Turquoise);}
</style>
