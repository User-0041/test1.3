<template>
<div >
<v-container >
  <br>
  <h1 class="P0" align="end">Add Article</h1>
    <v-row >
   
     <v-col
          cols="12"
          sm="15"
        >
          <v-text-field
            class="P1"
            v-model="message4"
            label="Ref Article"
            outlined
            clearable
          ></v-text-field>
        </v-col>
      <v-col
        cols="12"
        sm="15"
        class="P1"
      >
        <v-select
          class="P2"
          v-model="e7"
          :items="Fornisseur"
          label="Select"
          multiple
          chips
          hint="choisi les forniseur de cette Article"
          persistent-hint
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="15"
      >
        <v-textarea
         class="P3"
          outlined
          name="input-7-4"
          label="Detail Article"
          value=""
        ></v-textarea>
      </v-col>
      <v-col
        cols="12"
        md="15"
        
      >
 <v-btn
  color="green accent-2"
  elevation="2"
  large
  class="P4"
>Add Article</v-btn>
<v-btn
  color="red darken-1"
  elevation="2"
  large
  
  class="P5"
>Reset</v-btn>
</v-col>
    </v-row>
    
  </v-container>
</div>  
</template>

<script>
export default {
  data(){
    return{
        e7: [],
        Fornisseur: [
         'alpha','beta','omega','delta'
        ]
  }
  }
}
</script>

<style>
.P0{
color: rgb(73, 163, 163);
left: -300%;
}
.P1{
  top: 30%;
  left: 0%;
}
.P2{
  top: 90%;
  left: 0%;
}
.P3{
  top: 70%;
  left: 0%;
}
.P4{
  top: 230%;
  left: 25%;
}

.P5{
  top: 230%;
  left: 32%;
}
</style>


