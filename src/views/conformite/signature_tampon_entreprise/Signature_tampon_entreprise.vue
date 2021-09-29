<template>
  <v-card height="200" elevation="2" outlined class="ma-2">
    <h4>SIGNATURE ET TAMPON ENTREPRISE</h4>
    <v-divider></v-divider>
    <v-row :align="align" no-gutters>
          <v-col cols="4">
            <v-col cols="12">
            </v-col>
          </v-col>

          <v-col cols="6">
            <v-col cols="12">
              <label
                class="form-check-label"
                for="defaultCheck1"
                style="font-size: 13px"
                ><b>Signature (CGU)</b></label
              >
            </v-col>
          </v-col>

          <v-col cols="2">
            <v-switch
              v-model="ex11"
              label=""
              color="success"
              value="success"
              hide-details
            ></v-switch>
          </v-col>
          <v-col cols="4">
            <v-col cols="12">
            </v-col>
          </v-col>

          <v-col cols="6">
            <v-col cols="12">
              <label
                class="form-check-label"
                for="defaultCheck1"
                style="font-size: 13px"
                ><b>Tampon attestaion d'activités</b></label
              >
            </v-col>
          </v-col>

          <v-col cols="2">
            <v-switch
              v-model="ex11"
              label=""
              color="success"
              value="success"
              hide-details
            ></v-switch>
          </v-col>
        </v-row>
  </v-card>
</template>
<script>
export default {
  name: "Signature_tampon_entreprise",
};
</script>