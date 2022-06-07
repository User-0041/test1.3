<template>


<div class="tabel_div"  style="border-radius:10%">
<div  sty>

        

  
  <v-list-item style="padding-left:0;width: 400px; display: inline-block;" >
    <v-list-item-content>
      <v-text-field v-model="searchTerm" solo style="padding:0% ;" placeholder="Search" @input="Search()"></v-text-field>
      

    </v-list-item-content>
  </v-list-item>



  

  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">
     <v-btn  large class="tabel_button"  v-bind="attrs"
          v-on="on"  style="display: inline-block; padding:1rem; ;">Add Product
        
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Product Detlies</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Product Ref"
                  required
                  v-model="ref"

                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Product Name"
                  hint="example of helper text only on focus"
                    v-model="nomArt"
                  required

                ></v-text-field>
              </v-col>
      
              <v-col cols="12">
                <v-textarea
                  label="Product Descrtiption"
                  required
                  v-model="DescArt"
                ></v-textarea>
              </v-col>
 
        
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            
            @click="Create()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


     <v-dialog
      v-model="dialogUpdate"
      persistent
      max-width="600px"
    >
      <template >
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Update Detlies</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Product Ref"
                  required
                  v-model="ref"
                  v

                ></v-text-field>

              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Product Name"
                  hint="example of helper text only on focus"
                    v-model="nomArt"
                  required

                ></v-text-field>
              </v-col>
      
              <v-col cols="12">
                <v-textarea
                  label="Product Descrtiption"
                  required
                  v-model="DescArt"
                ></v-textarea>
              </v-col>
 
        
        
            </v-row>
          </v-container>
         
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue darken-1"
            text
            @click="Close()"
          >
            Close
          </v-btn>
          <v-btn
            color="blue darken-1"
            text
            
            @click="Update()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>




  <v-divider class="mt-2"></v-divider>

        
</div>



  

          
  <v-simple-table  fixed-header
    height="45rem" >
    <template v-slot:default >
      <thead >
        <tr>
          <th >
            Ref
          </th>
          <th >
            Name
          </th>
            <th >
            Descrptions
          </th>
           <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
   
        
  

        <tr v-for="item in Arts" :key="item.ref">

          <td>{{item.ref}}</td>
          <td>{{item.nomArt}}</td>
          <td>{{item.DescArt}}</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button" @click="Remove(item.ref)">Remove</v-btn>
              <v-btn class="tabel_button" @click="OpenUpdate(item.ref,item.nomArt,item.DescArt)" >Update</v-btn>
            </div>


          </td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>


</div>
</template>

<script>
import axios from "axios";
export default {
  data: () => (
    
    {
      dialog: false,
      dialogUpdate:false,
      ref: "",
      refOld: "",
      nomArt: "",
      DescArt: "",
      searchTerm:"",
      Arts:[]

    }),
     methods: {
         Close(){
         this.dialog=false;
         this.dialogUpdate=false;
           this.ref=""
  this.nomArt=""
  this.DescArt=""
       },
       OpenUpdate(A,B,C){


        this.dialogUpdate=true;
        this.ref=A
        this.refOld=A
        this.nomArt=B
        this.DescArt=C

      


       },Search(){


         const options = {method: 'POST', url: 'http://localhost:3001/api/articles', params: {ref:this.searchTerm},
         
           headers: {Authorization: 'Bearer '+localStorage.getItem('token')}
         };

axios.request(options).then( (response)=> {
  console.log(response.data);
  this.Arts=response.data;
}).catch(function (error) {
  console.error(error);
});
       }
       
       
       ,Remove(id){
         const options = {
  method: 'DELETE',
  url: 'http://localhost:3001/api/article',
  params: {ref: id},
           headers: {Authorization: 'Bearer '+localStorage.getItem("token")}

};

axios.request(options).then( (response)=> {
  console.log(response.data);
  this.Arts=response.data

}).catch(function (error) {
  console.error(error);
});


       }
       
       
       ,Update(){
         const options = {
  method: 'PUT',
  url: 'http://localhost:3001/api/article',
  params: {refOld:this.refOld , ref: this.ref, nomArt: this.nomArt, DescArt: this.DescArt},
           headers: {Authorization: 'Bearer '+localStorage.getItem("token")}

};

axios.request(options).then((response) =>{
  
  console.log(response.data);
  this.dialogUpdate=false
  this.Arts=response.data
}).catch(function (error) {
  console.error(error);
});

       },


    Create() {
  

      const options = {
  method: 'POST',
  url: 'http://localhost:3001/api/article',
  params: {ref: this.ref, nomArt: this.nomArt, DescArt: this.DescArt},

           headers: {Authorization: 'Bearer '+localStorage.getItem("token")},

};

axios.request(options).then((response)=> {
  this.dialog=false;
  console.log(response)
  this.Arts.push(options.params)

  this.ref="";
  this.nomArt="";
  this.DescArt="";



  
}).catch(function (error) {
  console.log(error)
 alert("Product all redt")
});
    }}, 
    created() {
    
    const options = {method: 'GET', url: 'http://localhost:3001/api/article',
           headers: {Authorization: 'Bearer '+localStorage.getItem("token")}

    };
axios.request(options).then( (response)=> {
 
  console.log(response.data)
  this.Arts=response.data;




}).catch(function (error) {
  console.error(error);
});
  }
    
    
}
</script>

<style>
.tabel_button{
  padding: 3rem;
}
.div_center{
 

border: 5px ;
text-align: center;



}
.tabel_div{
  padding: 5rem;
}
.divAll3 {
  width: 40rem;
  height: 44rem;
  border-radius: 15px;
background:rgb(255, 255, 255);
border: 1px solid rgba(238, 243, 245, 0.16);
box-shadow: 5px 3px 6px rgba(22, 20, 20, 0.16);
position:absolute;
  top: 10%;
  left: 34%;
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