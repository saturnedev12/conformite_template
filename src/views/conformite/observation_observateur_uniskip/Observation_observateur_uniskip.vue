<template>
  <v-card height="400" elevation="2" outlined class="ma-2">
    <h4>OBSERVATION OBSERVATEUR UNISKIP</h4>
    <v-divider></v-divider>
    <v-btn-toggle v-model="text" tile color="orange" group>
      <v-btn>Notification interne</v-btn>
      <v-btn>Répondre au client</v-btn>
    </v-btn-toggle>
    <v-col cols="12" md="25">
      <v-textarea
        label="Réponse"
        auto-grow
        outlined
        rows="1"
        row-height="15"
      ></v-textarea>
    </v-col>
    <v-container style="margin-top: -270px" fluid>
      <v-row justify="space-around" align="center">
        <v-btn outlined color="orange" small>PENDING</v-btn>
        <v-btn outlined color="orange" small>A VALIDER</v-btn>
        <v-btn outlined color="orange" small>NON VALIDE</v-btn>
      </v-row>
    </v-container>
    <v-container style="margin-top: -470px" fluid>
      <v-row justify="space-around" align="center">
        <v-btn outlined color="orange" small>SUSPENDRE</v-btn>
        <v-btn outlined color="orange" small>REACTIVER</v-btn>
        <v-btn outlined color="orange" small>SUPPRIMER</v-btn>
      </v-row>
    </v-container>
    <v-container style="margin-top: -450px; margin-left: -15px" fluid>
      <v-row justify="space-around" style="margin-left: -10px;">
        <div> Contacter le client : </div>
        <v-btn icon color="cyan darken-1" outlined small fab>
          <v-icon>mdi-phone</v-icon>
        </v-btn>
        <v-btn icon color="cyan darken-1" outlined small fab>
          <v-icon>mdi-message</v-icon>
        </v-btn>
        <v-btn icon color="cyan darken-1" outlined small fab>
          <v-icon>mdi-gmail</v-icon>
        </v-btn>
        <v-btn icon color="cyan darken-1" outlined small fab>
          <v-icon>mdi-bell</v-icon>
        </v-btn>
      </v-row>
    </v-container>
    <v-divider></v-divider>
    <div style="margin-top: -240px;">Type de demande :</div>
    <div class="rown">
      <div>Documents complémentaires</div>
      <div class="rowncheck">
        <v-checkbox
          v-model="ex4"
          label="oui "
          color="orange darken-3"
          value="orange darken-3"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          label="non"
          color="red darken-3"
          value="red darken-3"
          hide-details
        ></v-checkbox>
      </div>
    </div>
    <div class="rown">
      <div>Justifications orales</div>
      <div class="rowncheck">
        <v-checkbox
          v-model="ex4"
          label="oui "
          color="orange darken-3"
          value="orange darken-3"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          label="non"
          color="red darken-3"
          value="red darken-3"
          hide-details
        ></v-checkbox>
      </div>
    </div>
    <div class="rown">
      <div>Vérification cohérence éléments</div>
      <div class="rowncheck">
        <v-checkbox
          v-model="ex4"
          label="oui "
          color="orange darken-3"
          value="orange darken-3"
          hide-details
        ></v-checkbox>
        <v-checkbox
          v-model="ex4"
          label="non"
          color="red darken-3"
          value="red darken-3"
          hide-details
        ></v-checkbox>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Observation_observateur_uniskip",
};
</script>

<style>
    .rown{
    display: flex;
    flex-direction: row;
    background: #ffffff;
    align-items: flex-end;
    justify-content: space-between;
    height: 30px;
    border-bottom: 0.5px solid gray;
}
.rown:hover{
    background-color: rgb(255, 237, 220);
}
.rowncheck{
    width: 35%;
    display: flex;
    justify-content: space-around;
}
.carte1{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

</style>