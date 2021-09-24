<template>
    <v-card height="500" elevation="2" outlined class="ma-2"
              >
              <h4>DETAIL CLIENT DECLARATIF</h4>
              <v-divider></v-divider>
<template>
    
  <div>
    
      <v-row :align="align" no-gutters style="height: 220px;">
                 <v-col cols="4">
                       <v-col cols="12">
                            <label class="form-check-label" for="nom" id="lblnom" style="font-size:13px;"><b>Nom</b></label><br>
                            <label class="form-check-label" for="nom1" id="lblnom1" style="font-size:13px;">"Nom"</label><br>                               
                            <label class="form-check-label" for="prenom" id="lblprenom" style="font-size:13px;"><b>Prenom</b></label><br>
                            <label class="form-check-label" for="prenom1" id="lblprenom1" style="font-size:13px;">"Prenom"</label><br>  
                            <label class="form-check-label" for="prenom" id="lblprenom" style="font-size:13px;"><b>Adresse</b></label><br>
                            <label class="form-check-label" for="prenom1" id="lblprenom1" style="font-size:13px;">"Adresse"</label><br>        
                        </v-col>       
                 </v-col>
   
                <v-col cols="4">
                          <v-col cols="12">
                            <label class="form-check-label" for="nom" id="lblnom" style="font-size:13px;"><b>Date de Naissance</b></label><br>
                            <label class="form-check-label" for="nom1" id="lblnom1" style="font-size:13px;">"Date de Naissance"</label><br>                               
                            <label class="form-check-label" for="nom" id="lblnom" style="font-size:13px;"><b>Lieu de Naissance</b></label><br>
                            <label class="form-check-label" for="nom1" id="lblnom1" style="font-size:13px;">"Lieu de Naissance"</label><br>
                          </v-col>       
                </v-col >
                
               <v-col cols="4"> 
                  <v-col cols="12">
                          <v-img
                          lazy-src="https://picsum.photos/id/11/10/6"
                          max-height="250"
                          max-width="250"
                          src="https://picsum.photos/id/11/500/300"
                        ></v-img><br>
                        <label class="form-check-label" for="cpville" id="cpville" style="font-size:13px;"><b>Cp Ville</b></label><br>
                            <GmapMap :center="{lat:10, lng:10}" :zoom="4" map-type-id="terrain" style="width: 120px; height: 80px">
                                    <GmapMarker :key="index" v-for="(m, index) in markers" :position="m.position" :clickable="true" :draggable="true" @click="center=m.position"/>
                           </GmapMap> <br>

                  </v-col>       
               </v-col>

       </v-row>
       <br>
              
             <v-row :align="align" no-gutters style="height: 110px;"> 
                    <v-col cols="6">
                          <v-col cols="12">
                                <b><h5>OFFRES FREEMIUM/PREMIUM</h5></b><br>
                                  <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Mail</b></label>
                                  <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Mail"</label><br>                                 
                                  <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Telephone</b></label>
                                  <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Telephone"</label><br>                                      
                            </v-col>       
                    </v-col>
                          
                  <v-col cols="6"> 
                      <v-col cols="12">    <h1><br></h1>
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Fiscal USA</b></label>
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Fiscal USA"</label><br>                                 
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Politique</b></label>
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Politique"</label><br>  
                      </v-col>       
                  </v-col>

            </v-row>
       <v-divider></v-divider>

                <v-row :align="align" no-gutters style="height: 60px;"> 
                    <v-col cols="2">
                          <v-col cols="12">
                                <b><h5>CGU</h5></b>                      
                            </v-col>       
                    </v-col>
                          
                  <v-col cols="5"> 
                      <v-col cols="12">   
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Date d'Affichage</b></label><br> 
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Date d'Affichage</label>                                
                      </v-col>       
                  </v-col>

                  <v-col cols="5"> 
                      <v-col cols="12"> 
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>Date de Validation</b></label><br>
                                          <label class="form-check-label" for="defaultCheck1" style="font-size:13px;">"Date de Validation"</label>                                 
                      </v-col>       
                  </v-col>

            </v-row>
            <v-divider></v-divider>

             <v-row :align="align" no-gutters style="height: 60px;"> 
                    <v-col cols="4">
                          <v-col cols="12">
                                <b><h5>Si Commerçant</h5></b>                      
                            </v-col>       
                    </v-col>
                          
                  <v-col cols="6"> 
                      <v-col cols="12">   
                               <label class="form-check-label" for="defaultCheck1" style="font-size:13px;"><b>FORMEL/INFORMEL</b></label>
                                                             
                      </v-col>       
                  </v-col>

                  <v-col cols="2"> 
                      
                              <v-switch v-model="ex11" label="" color="success" value="success" hide-details></v-switch>                                                                   
                           
                  </v-col>

            </v-row>



  </div>
</template>
                        
            </v-card>
</template>

<script>
export default {
    name:"Detail_client_declaratif",
    alignments: [
        'start',
        'center',
        'end',
      ],
      data () {
        return {
             center: { lat: 10.0 , lng: 10.0 },  
             marker: [ {
               position: {lat: 10.0, lng: 10.0} ,
             },
             {
               position: {lat: 10.0, lng: 10.0} ,
             },
             ]
        }
      }
}
</script>


<style scoped>
#styled-input {
  height: 40px;
  font-size: 20pt;
}
.styled-input label[for] {
  height: 40px;
  font-size: 20pt;
}
</style>