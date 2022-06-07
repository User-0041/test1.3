<template>


<div class="tabel_div"  style="border-radius:10%">
<div  sty>

        

  
  <v-list-item style="padding-left:0;width: 400px; display: inline-block;" >
  
     <v-list-item-content >
      <v-text-field v-model="searchTermRefFern" solo style="padding:0% ;  display: inline-block;" placeholder="Ref" @input="Search()"></v-text-field>

      

    </v-list-item-content>
  </v-list-item>



  
      <v-text-field v-model="searchTermRef" solo style="padding:0.5% ;  width: 23%; display: inline-block;" placeholder="RefFern" @input="Search()"></v-text-field>

  <v-dialog
      v-model="dialog"
      persistent
      max-width="600px"
    >
      <template v-slot:activator="{ on, attrs }">

     <v-btn  large class="tabel_button"  v-bind="attrs"
          v-on="on"  style="display: inline-block; padding:1rem; ;">Add Fornnisseur
        
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">Stock Detlies</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
              
                <v-autocomplete
            
            v-model="refFern"
            :items="items"
            dense
            filled
            label="RefFern"
            ></v-autocomplete>
 
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-autocomplete
            
            v-model="ref"
            :items="items2"
            dense
            filled
            label="Ref"
            ></v-autocomplete>
 
              </v-col>
     
                 <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Stock"
              
                    v-model="Stockvalue"
                  required

                ></v-text-field>
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
                  label="Fornnisseur Ref"
                  required
                

                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Fornnisseur Name"
                  hint="example of helper text only on focus"
                  
                  required

                ></v-text-field>
              </v-col>
                 <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Fornnisseur tel"
                  hint="example of helper text only on focus"
            
                  required

                ></v-text-field>
              </v-col>
              
      
              <v-col cols="12">
                <v-text-field
                  label="Fornnisseur Email"
                  required
                 
                ></v-text-field>
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
            
            @click="Update();"
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
            refFern
          </th>
           <th >
            Stock
          </th>
           
           <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
   
        
  

        <tr v-for="item in Stock" :key="item.ref+item.refFern">

          <td>{{item.refFern}}</td>
          <td>{{item.ref}}</td>
          <td>{{item.Stock}}</td>



          <td>
            <div class="div_center">
              <v-btn class="tabel_button" @click="OpenUpdate(item.refFern,item.ref,item.Stock)" >Update</v-btn>
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
      searchTermRefFern:"",
      searchTermRef:"",
      refFern: "",
      ref:"",
      Stockvalue:"",
      items:[],
      items2:[],

      searchTerm:"",
      Stock:[]

    }),
     methods: {

       Close(){
           
           this.dialog=false;
           this.ref=""
           this.refFern=""
           this.Stockvalue=""

       },
       OpenUpdate(A,B,C){

           this.dialog=true;
           this.ref=B
           this.refFern=A
           this.Stockvalue=C

       }



       ,Search(){

        const options = {
  method: 'GET',
  url: 'http://localhost:3001/api/stockt',
  params: {refFernKeyWord: this.searchTermRefFern, RefKeyWord: this.searchTermRef}
};

axios.request(options).then( (response)=> {
  console.log(response.data);
     this.Stock=response.data;

}).catch(function (error) {
  console.error(error);
});


       }
       
       
       ,Remove(ref){
      


       }
       
       
       ,Update(){


       },


    Create() {
const options = {
  method: 'POST',
  url: 'http://localhost:3001/api/stock',
  params: {refFern: this.refFern, ref: this.ref, Stock:this.Stockvalue}
};

axios.request(options).then( (response)=> {
    this.dialog=false
    this.Stock=response.data
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


    }
    
     }, 
    created() {
        let options = {
  method: 'GET',
  url: 'http://localhost:3001/api/Forni',
};

axios.request(options).then( (response)=> {
  let a =response.data
    
  this.items=a.map(a=>a.refFern)
}).catch(function (error) {
  console.error(error);
});

 options = {
  method: 'GET',
  url: 'http://localhost:3001/api/Article',

};

axios.request(options).then( (response)=> {
    let a =response.data
    
  this.items2=a.map(a=>a.ref)
}).catch(function (error) {
  console.error(error);
});
         options = {method: 'GET', url: 'http://localhost:3001/api/stock'};

axios.request(options).then( (response)=> {
    this.Stock=response.data;

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