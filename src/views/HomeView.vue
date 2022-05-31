<template>
  <div></div>
</template>
<script>
import router from "../router";

export default {
     mounted: function () {
  this.$nextTick(function () {
   
  if(localStorage.getItem("token")===null){router.push('/Login')}

  })}

}
</script>

<style>

</style>