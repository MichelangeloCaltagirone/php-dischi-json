const {createApp} = Vue

createApp({
    data() {
        return {
            discsList: []
        }
    },
    methods: {
        getDiscsList(){

            axios.get('http://localhost/php-dischi-json/Api/')
            .then((response) => {
                // handle success
                console.log(response.data);
                this.discsList = response.data
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
        this.getDiscsList();
    }
}).mount('#app')