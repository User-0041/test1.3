<template>

<div class="divAll">
  
  <h1 class="login">Login</h1>
  
        <form  @submit.prevent="Login()"  action="http://localhost:3001/api/Login" method="get" enctype="multipart/form-data">
           <v-col class="UserName"
          cols="8"
          sm="15"
          md="15"
        >


           <v-text-field v-model="UserName"
            label="UserName"
            outlined
            :rules="inputRule1" 

          ></v-text-field >
          <v-text-field type="password" v-model="PassWord" 
            label="PasseWord"
            outlined
            :rules="inputRule"
          ></v-text-field>
        </v-col>
        <v-btn class="button" 
              color="blue"
              type="submit"
              dark large
              :loading="loding"

            >
               Login</v-btn>
               <v-img
               class="image"
                max-height="140"
                max-width="200"
                src="../assets/index.png"></v-img>

          
        </form>
        

</div>          
</template>

<script>
import axios from "axios";
import router from "../router";

export default {
  name: 'login_user',
data(){
  return{
  UserName:'',
  PassWord:'',
  loding:false,
   inputRule:[
ch=>ch.length>=4|| 'Minimaum caracter 8' ],
  }
},
methods:{
Afficher: function () {
  if(this.UserName[0]=="a"){
      alert('erreur')
}else alert('ok')},
Login :function(){

 




const options = {
  method: 'GET',
  url: 'http://localhost:3001/api/Login',
  params: {UserName: this.UserName, Password: this.PassWord}
};

axios.request(options).then(   (response) =>{
  
  this.$emit('LogedIN', true)
    localStorage.setItem('token', response.data.token);  
    router.push('/')

}).catch(function (error) {
  alert("User Name or Password false")
  console.error(error);
});
},
  mounted: function () {
  this.$nextTick(function () {
    console.log("test")
  
  if(localStorage.getItem("token")!=null){router.push('/')}

  })}
}
}
</script>

<style>
.divAll{
  width: 541px;
height: 648px;
border-radius: 15px;
background:rgb(255, 255, 255);
border: 1px solid rgba(238, 243, 245, 0.16);
box-shadow: 5px 3px 6px rgba(22, 20, 20, 0.16);

position:absolute;
top: 15%;
left: 35%;
}
.image{
top: 5%;
left: 30%;

}
.login{
  font-family: "Segoe UI";
font-weight: normal;
font-size: 60px;
line-height: 100px;
text-align: left;
color: rgb(22, 130, 202);
position:absolute;
top: 28%;
left: 35%;
}
.UserName{
position:absolute;
top: 45%;
left: 15%;
}
.button{
  position:absolute;
top: 75%;
left: 39%;
}
</style>





