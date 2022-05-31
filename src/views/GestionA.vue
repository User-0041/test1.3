<template>

<div class="tabel_div"  style="border-radius:10%">
<div  sty>

        

  
  <v-list-item style="padding-left:0;width: 400px; display: inline-block;" >
    <v-list-item-content>
      <v-text-field v-model="searchTerm" solo style="padding:0% ;" placeholder="Search" @input="searchFruits"></v-text-field>
      

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
          Open Dialog
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="text-h5">User Profile</span>
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
                  label="Legal first name*"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal middle name"
                  hint="example of helper text only on focus"
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
                md="4"
              >
                <v-text-field
                  label="Legal last name*"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Email*"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Password*"
                  type="password"
                  required
                ></v-text-field>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age*"
                  required
                ></v-select>
              </v-col>
              <v-col
                cols="12"
                sm="6"
              >
                <v-autocomplete
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                ></v-autocomplete>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
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
            @click="dialog = false"
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
            Name
          </th>
          <th >
            Calories
          </th>
           <th class="text-center">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>

        
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

            <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>  <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>  <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>  <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>

         <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr> <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr> <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr> <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>Art</td>
          <td>Art</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
        <tr>
          <td>TAHAHANN</td>
          <td>TAHANNNNNNNNNNN</td>
          <td>
            <div class="div_center">
              <v-btn class="tabel_button">Remove</v-btn>
              <v-btn class="tabel_button">Update</v-btn>
              <v-btn class="tabel_button">Consolte</v-btn>
            </div>


          </td>

        </tr>
      </tbody>
    </template>
  </v-simple-table>


</div>
</template>

<script>





export default {
  data: () => ({
      dialog: false,
    })
    
    
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