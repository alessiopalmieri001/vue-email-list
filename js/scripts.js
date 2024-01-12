const {createApp} = Vue

createApp({
    data(){
        return{
            numeroIndirizzi: 100,
            emails: []

        }
    },
    methods:{
        
    },
    mounted(){

        for(let i = 0; i < this.numeroIndirizzi; i++){
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((risultato) => {
                
                (this.emails).push(risultato.data.response);
            });
        }

    }
}).mount('#app')



//funzioni
