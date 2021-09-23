<template>
  <div>
    {{ info }}
    <v-app id="inspire" v-show="isLogin">
      
      <v-navigation-drawer v-model="drawer" app color="orange">
        <!-- la bar -->
       <NavigationBar/>
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
  import NavigationBar from './components/NavigationBar.vue'
  const network = new Network();
  export default {
    components:{
      Login,
      NavigationBar,
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
      }),
  }
</script>