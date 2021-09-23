import axios from "axios";

export default class Network {
    constructor() {}
    async login(email,password){
       await axios.post(
            'http://lumen.localhost/login', 
                {
                      email:email,
                      password:password,
                }, 
                {
                    headers: {}
                }
              ).then(response => {
                  localStorage.token = response.data.api_key;
                  // this.token = localStorage.token;
                  console.log(this.token);
                  return true;
                  //this.info = response.data;
            })
            .catch(erreur=>{
                console.log(erreur);
                return false;
            });
    }

    async getFonctionnalite(){
        /*await axios.get(
            'http://lumen.localhost/api/fonctionnalite/23',
            {
               
            },
                {
                    headers: 
                    {
                        token:"VkNwYzdLcXVqbFpWTjRzTWxQZ1g="
                    }
                }).then(response => {                  
                console.log(JSON.parse(JSON.stringify(response.data.status)));
                console.log("satus getf "+JSON.stringify(response.data));
                if (response.data.status == "OK") {
                    return true;
                }else{
                    return false;
                }
                  
                  //this.info = response.data;
            })
            .catch(erreur=>{
                console.log(erreur);
                return false;
            });*/
            /*axios({
                method: 'get',
                url: 'http://lumen.localhost/api/fonctionnalite/',
                //responseType: 'stream',
                headers: { 
                    'Access-Control-Allow-Origin': '*',
                    "Access-Control-Allow-Methods": "GET, POST, PUT",
                    "Access-Control-Allow-Headers": "Content-Type",
                     token:"VkNwYzdLcXVqbFpWTjRzTWxQZ1g="
                }
              })
                .then(function (response) {
                  console.log(response);
                });*/
    }


    hello(){
        console.log("hello");
    }
}