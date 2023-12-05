"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return {
            apiURL: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
        }
    },
    methods: {
        randomEmail() {
            for (let i = 0; i < 10; i++) {
                axios.get(this.apiURL)
                    .then((email) => {
                        console.log(email.data.response);
                        this.emails.push(email.data.response)
                    })
            }
        }
    },
    mounted() {
        console.log("ciao");      
        console.log(this.emails);
    },
    created(){
        this.randomEmail();
    },
}).mount('#app')
