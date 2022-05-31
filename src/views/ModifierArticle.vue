<template>

    <div>
  <div class="divAll3">

   <AddArticle v-if="window==1" ></AddArticle>
   <ModifierArticle v-if="window==2"></ModifierArticle>
    <p v-if="window==3">Delete</p>
      <v-btn 
            class="AddArticle"
            target="_blank"
            rounded
            x-large
            text
            @click="window=1">
            <span class="mr-2 grey--text">Add Article</span>
            <v-icon right color="normal">mdi-plus</v-icon>
            </v-btn>
            <v-btn 
            class="ModifierArticle"
            target="_blank"
            rounded
            x-large
             @click="window=2"
            text>
            <span class="mr-2 grey--text">Modifier Article</span>
            <v-icon right color="primary">mdi-pencil</v-icon>
            </v-btn>
            <v-btn 
            class="DeleteArticle"
            target="_blank"
            rounded
             @click="window=3"
            x-large
            text>
            <span class="mr-2 grey--text">Delete Article</span>
            <v-icon right color="error">mdi-delete</v-icon>
            </v-btn>
            
  </div>
  <router-view></router-view>
  </div>
</template>

<script>
import AddArticle from "./AddArticle.vue"
import ModifierArticle from "./ModifierArticle.vue";
import router from "../router";

export default {
    data() {
        return {
            window: 1,
        };
    },
    methods: {
        
    },
    components: { AddArticle, ModifierArticle },
      mounted: function () {
  this.$nextTick(function () {
    console.log(localStorage.getItem("token")===null)
  if(localStorage.getItem("token")===null){router.push('/Login')}

  })}
}
</script>

<style>
.divAll3 {
  width: 80rem;
  height: 40rem;
  border-radius: 15px;
background:rgb(255, 255, 255);
border: 1px solid rgba(238, 243, 245, 0.16);
box-shadow: 5px 3px 6px rgba(22, 20, 20, 0.16);
position:absolute;
  top: 18%;
  left: 17%;
}

.image1{
    top: 20%;
  left: 26%;
}

.AddArticle{
  
    top: -60%;
  left: -0.04%;
  background-color: rgb(255, 255, 255);
}
.ModifierArticle{
 top: -60%;
  left: -0.04%;
  background-color: rgb(255, 255, 255);
}
.DeleteArticle{
  top: -60%;
  left: -0.04%;
  background-color: rgb(255, 255, 255);
}
</style>