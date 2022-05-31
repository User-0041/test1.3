<template>

<div class="divAll1">
  <p class="login1">Add User</p>
   <v-col class="UserName1"
          cols="8"
          sm="15"
          md="15"
        >
          <v-text-field 
            label=" Saisir UserName"
            v-model="UserName"
            outlined
          ></v-text-field>
          <v-text-field type="password" 
            v-model="PassWord"

            label="New PasseWord"
            outlined
            :rules="inputRule2"
          ></v-text-field>
          <v-text-field type="password" 
            label="Confirm PasseWord"
            v-model="PassWordV"

            outlined
            :rules="inputRule2"
          ></v-text-field>
        </v-col>
        <v-btn class="button1" 
              color="blue"
              dark
              large
               @click="SignUp()"
            >
               Add 
            </v-btn>
</div>          
</template>

<script>
import axios from "axios";
import router from "../router";
export default {
  name: 'Add_user',
data(){
  return{
      UserName:'',
      PassWord:'',
      PassWordV:'',
     inputRule2:[
     ch=>ch.length>=8 || 'Minimaum caracter 8'
   ],
  }
},
methods:{
              
              SignUp(){
                if(this.UserName.length===0){alert("Username is emptey");return}
                if(this.PassWord.length===0){alert("Passwords is emptey");return}
                if (this.PassWord!=this.PassWordV){alert("Passwords do not mathch");return}
              const options = {
                   method: 'POST',
                     url: 'http://localhost:3001/api/user',
                    params: {UserName: this.UserName, Password: this.PassWord}
              };

                  axios.request(options).then(function (response) {
            console.log(response.data);
            router.push({ path: '/Login' })
                      }).catch(function (error) {
           console.error(error);
           alert("User name takn")
              });
                
              }

},

  mounted: function () {
  this.$nextTick(function () {
  
  if(localStorage.getItem("token")!=null){router.push('/')}

  })}
}
</script>

<style>
.divAll1{
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
.login1{
  font-family: "Segoe UI";
font-weight: normal;
font-size: 60px;
line-height: 100px;
text-align: left;
color: rgb(22, 130, 202);
position:absolute;
top: 10%;
left: 25%;
}
.UserName1{
position:absolute;
top: 30%;
left: 15%;
}
.button1{
  position:absolute;
top: 75%;
left: 39%;
}
</style>