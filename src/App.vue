<template>
  <div>
    {{ info }}
    <v-app id="inspire" v-show="isLogin">
      <v-navigation-drawer
        v-model="drawer"
        app color="orange">
        <!-- la bar -->
        <v-list
          nav
          dense
        >
          <v-list-item-group
            v-model="group"
            active-class="deep-purple--text text--accent-4"
          >
            
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
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Application</v-toolbar-title>
      </v-app-bar>
      <v-main>
        <!-- Core Page -->
        <router-view/>
      </v-main>
    </v-app>
    
    <v-app v-show="!isLogin">
        <Login @valid_form="checkUser"/>
    </v-app>
  </div>

  

</template>

<script>
  import Login from './views/Login.vue'
  import Network from './class/Network'
  const network = new Network();
  export default {
    components:{
      Login
    },
    methods: {
      async checkUser(payload){
        //this.isLogin = !this.isLogin;
      
          this.isLogin = await network.login(payload.email,payload.password);
          console.log("yes");
          console.log(this.isLogin);
      },
    },
    data: () => ({
      drawer: null, 
      isLogin:true,
      info: null,
      token : localStorage.token
      }),
    async mounted(){
       if (localStorage.token != "" && localStorage.token != null && (typeof localStorage.token === 'string' || localStorage.token instanceof String)) {
         this.isLogin = !this.isLogin;
       }
       //this.isLogin = network.getFonctionnalite();
      //console.log(network.hello());
      console.log(`test api ${ await network.getFonctionnalite()}`);

    },
    watch:{
      name(){
        this.allow();
      }
    }
    
  }
</script>