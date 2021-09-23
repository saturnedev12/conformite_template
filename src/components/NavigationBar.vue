<template>

   <v-list>
        <v-list-item-group v-model="model" color="orange">
          <router-link to="/" style="text-decoration: none; color: inherit;">
            <v-list-item style="background-color: ">
                <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>Accueil</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
           </router-link>
          <v-divider></v-divider>

            <router-link to="/conformite" style="text-decoration: none; color: inherit;">
            <v-list-item style="background-color: ">
                <v-list-item-icon>
                <v-icon>mdi-star-check</v-icon>
                </v-list-item-icon>
                <v-list-item-content>
                <v-list-item-title>Conformité</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </router-link>

          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-alert</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Alertes</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-account-group</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Gestion client</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-database</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Base et profiles</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-cash-multiple</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Cash</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-chart-bell-curve-cumulative</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Indicateurs</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-face-agent</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>CRM</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-piggy-bank-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Comptabilité</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>
          <v-list-item style="background-color: ">
            <v-list-item-icon>
              <v-icon>mdi-account-supervisor-circle</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>Superviseur</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>


     <!--<v-list nav dense >
            
            <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
                <router-link to="/">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Home</v-list-item-title>
                </v-list-item>
                </router-link>
                
                <router-link to="/conformite">
                    <v-list-item>
                    <v-list-item-icon>
                        <v-icon>mdi-account</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>Conformite</v-list-item-title>
                    </v-list-item>
                </router-link>
            </v-list-item-group>

    </v-list>-->
</template>
<script>
export default {
    name:"NavigationBar",
    methods:{
        showBar(){
            this.$emit;
        }
    }
}
</script>