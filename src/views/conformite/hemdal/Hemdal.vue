<template>
  <v-card height="400" elevation="2" outlined class="ma-2">
    <h4>HEMDAL</h4>
    <v-divider></v-divider>
    <v-flex>
      <v-btn class="ma-2" color="red" outlined>NEGATIF</v-btn>
    </v-flex>
    <v-flex>
      <v-btn class="ma-2" color="green" outlined>POSITIF</v-btn>
    </v-flex>
    <v-btn block outlined disabled>CONFORMITE HEMDAL</v-btn>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="hemdal_item">BASE 1
            <v-space>KO</v-space>
        </v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-title class="hemdal_item">BASE 2
            <v-space>KO</v-space>
        </v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-title class="hemdal_item">
            BASE 3
            <v-space>KO</v-space>
        </v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-title class="hemdal_item">BASE 4
            <v-space>KO</v-space>
        </v-list-item-title>
        <v-divider></v-divider>
        <v-list-item-title class="hemdal_item">BASE 5
            <v-space>KO</v-space>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <v-list-item>
      <v-list-item-content>
        <v-divider></v-divider>
        <v-list-item-title class="hemdal_item"
          >CONTRAT
          <v-btn outlined x-small color="orange">OK</v-btn>
        </v-list-item-title>
        <v-divider></v-divider>
      </v-list-item-content>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "Hemdal",
};
</script>

<style>
.hemdal_item{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
</style>