const {createApp} = Vue   // estraggo varibile globale per poter usufruire di Vue

createApp({
    data() {
        return {
            discsList: []    // Furuta lista che verra popolata con la risposta di una chiamata Api
        }
    },
    methods: {
        getDiscsList(){

            axios.get('http://localhost/php-dischi-json/Api/')  // chiamata axios in get alla indirizzo della mia API
            .then((response) => {
                // handle success
                console.log(response.data);
                this.discsList = response.data  // prelevo la risposta e individuo il dato che mi serve, quindi sovrascrivo una variabile locale
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
                    }
                },
    created(){
        this.getDiscsList();  // hook per quando il componente viene creato chiamo la funzione
    }
}).mount('#app')