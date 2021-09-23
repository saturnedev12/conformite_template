<template>
    <div class="container" >
        <v-card 
            min-width="500"
            min-height="400px"
            elevation="5"
            class="loginCard"
            rounded="20"
            
        >
            <v-form
                min-width="98%"
                ref="form"
                v-model="valid"
                lazy-validation

                class="loginForm"
            >
            <di class="loginheader">
                <v-img
                max-height="50"
                max-width="50"
                src="../assets/assets_images_uniskip_logo.svg"
              ></v-img>
            </di>
           
                <h4
                  class="logTitle"
                >
                LOGIN</h4>

                <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                require
                filled
                solo-inverted
                type="email"
                class="inp"
                ></v-text-field>

                <v-text-field
                  v-model="password"
                  label="password"
                  type="password"
                  required
                  solo-inverted
                  filled
                  
                  class="inp"
                ></v-text-field>
                <v-btn
                  :disabled="!valid"
                  color="success"
                  class="mr-4"
                  @click="validate"
                  width="60%"
                  height="50"
                  elevation="5"
                  
                >
                Log IN
                </v-btn>
                <br>
                <!--<v-btn
                  color="error"
                  class="mr-4"
                  @click="reset"
                >
                Reset Form
                </v-btn>

                <v-btn
                  color="warning"
                  @click="resetValidation"
                >
                Reset Validation
                </v-btn>-->
            </v-form>
        </v-card>
    </div>
</template>

<script>
 export default {
     name:'Login', 
    data: () => ({
      valid: true,
      email: 'barbara.draimond@uniskip.com',
      password:'motdepasse',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
        this.$refs.form.validate();
        this.$emit('valid_form',{"email":this.email,"password":this.password})
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>

<style >
    .container{
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 500px;
    }
    .loginCard{
        padding: 10px;
        
    }
    .inp{
      width: 90%;
    }
    .loginForm{
        display: flex;
        justify-content: space-between;
        flex-direction: column;
        align-items: center;
    }
    .logTitle{
      font-family:apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
      font-size: 30px;
      margin-bottom: 40px;
    }
    .loginheader{
      width: 100%;
      
    }
</style>