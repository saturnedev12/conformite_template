<template>
    <v-container fluid style="margin: 0px; padding: 0; width: 100%">
        <v-row no-gutters>
          <v-col cols="2" >

            <!--Liste Clien  -->
            <Liste_client />

            <!--  HEMDAL-->
            <Hemdal/>

          </v-col>

          <v-col cols="3">
            <!--DETAIL CLIENT DECLARATIF  -->
            <Detail_client_declaratif />
            
            <!--SIGNATURE ET TAMPON ENTREPRISE  -->
            <Signature_tampon_entreprise/>

            <!--OBSERVATION OBSERVATEUR UNISKIP  -->
            <Observation_observateur_uniskip />


          </v-col>

          <v-col cols="4">
            
            <!--VISIONNEUSE  -->
            <Visionneuse />

            <!--IDENTITE  -->
              <Identite/>
            
            <!--JUSTIFICATIF DE DOMICILE  -->
            <Justificatif_domicile />

          </v-col>

          <v-col cols="3">

            <!--BANQUE  -->
            <Banque/>

            <!--IDENTITE MANDATAIR  -->
             <Identite_mandataire />

            <!--IDENTIFICATION ENTREPRISE  -->
             <Identification_entreprise />

            <!--JUSTIFICATIF ADRESSE ENTREPRISE  -->
             <Justificatif_adreese_entreprise />
            
            <!--VALIDATION  -->
             <Validation/>

          </v-col>

        </v-row>
      </v-container>
</template>

<script>

import Banque from './conformite/banque/Banque.vue'
import Liste_client from './conformite/liste_client/Liste_client.vue'
import Hemdal from './conformite/hemdal/Hemdal.vue'
import Detail_client_declaratif from './conformite/detail_client_declaratif/Detail_client_declaratif.vue'
import Signature_tampon_entreprise from './conformite/signature_tampon_entreprise/Signature_tampon_entreprise.vue'
import Observation_observateur_uniskip from './conformite/observation_observateur_uniskip/Observation_observateur_uniskip.vue'
import Justificatif_domicile from './conformite/justificatif_domicile/Justificatif_domicile.vue'
import Validation from './conformite/validation/Validation.vue'
import Visionneuse from './conformite/visionneuse/Visionneuse.vue'
import Identite from './conformite/identite/Identite.vue'
import Identite_mandataire from './conformite/identite_mandataire/Identite_mandataire.vue'
import Identification_entreprise from './conformite/identification_entreprise/Identification_entreprise.vue'
import Justificatif_adreese_entreprise from './conformite/justificatif_adresse_entreprise/Justificatif_adresse_entreprise.vue'
 


export default {
  name: 'Conformite',
  components: {
    Banque,
    Liste_client, 
    Hemdal,
    Detail_client_declaratif, 
    Signature_tampon_entreprise, 
    Observation_observateur_uniskip,
    Justificatif_domicile ,
    Validation , 
    Visionneuse , 
    Identite ,
    Identite_mandataire ,
    Identification_entreprise , 
    Justificatif_adreese_entreprise ,
  }
}
</script>
