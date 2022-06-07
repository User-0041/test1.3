<template>
  <nav>
      <v-app-bar 
     
      flat 
      app
      color="primary"
      dark
      elevation="4"
     >
      <v-app-bar-nav-icon  v-if="LogInStatus"   @click="visible = ! visible" ></v-app-bar-nav-icon>
        <v-toolbar-titel classe="text uppercase white--text">
            <span class="font-weight-light"><h1>SAGEMCOM</h1></span>
            
            </v-toolbar-titel>
            <v-spacer></v-spacer> 
            <v-btn  v-if="LogInStatus"
            @click="SignOut()"
            target="_blank"
            text>
            <span class="mr-2">Sign Out</span>
            <v-icon right>mdi-open-in-new</v-icon>
            </v-btn>
             <v-btn v-if="!LogInStatus" 
            target="_blank"
            text
            @click="login1()"
            >
            <span class="mr-2">Login</span>
            <v-icon right>mdi-account</v-icon>
            </v-btn>|
            <v-btn  v-if="!LogInStatus"
            target="_blank"
            text
            @click="add1()"
            >
            <span class="mr-2">Add-User</span>
            <v-icon right>mdi-account-plus-outline</v-icon>
            </v-btn>
      </v-app-bar>
      <v-navigation-drawer v-if="LogInStatus" v-model="visible" app class="blue darken-3" >
      <v-list elevation="4">
          <v-flex class="mt-5 text-center" align-center>
          <v-avatar color="indigo" size="70">
       <img src="/1.png" alt="" />
    </v-avatar>
    <p class="white--text text-subtitle-1 mt-1">
      Mohamed aziz boubaker
    </p>
    </v-flex>
          <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
              <v-list-item-action>
                 <v-icon class="white--text">{{link.icon}}</v-icon> 
              </v-list-item-action>
              <v-list-item-content>
                  <v-list-item-title class="white--text">{{link.text}}</v-list-item-title>
              </v-list-item-content>
          </v-list-item>
      </v-list>
      </v-navigation-drawer>
  </nav>
</template>

<script>
   import router from "../router";
export default {
    props: {
        LogInStatus:Boolean
    }
    ,
data(){
    return{
    visible:false,
    links :[
     {icon: 'mdi-view-dashboard', text:'Dashboard',route:'/'},
     {icon: 'mdi-plus', text:'Liste Article',route:'/GestionA'},
     {icon: 'mdi-cogs', text:'Liste Fornissor',route:'/GestionF'},
     {icon: 'mdi-cogs', text:'Liste Stock',route:'/GestionS'},
     
    ],
    }},

   methods: {
    SignOut() {
       localStorage.removeItem("token");
       location.reload();  
    },
    login1(){
      router.push('/Login')

    },
    add1(){
        router.push('/SignUp')
    }
   }
    
}
</script>

<style>

</style>