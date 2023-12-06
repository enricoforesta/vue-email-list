"use strict"

const { createApp } = Vue;

createApp({
    data() {
        return {
            numberEmail:null,
            apiURL: "https://flynn.boolean.careers/exercises/api/random/mail",
            emails: [],
        }
    },
    methods: {
        randomEmail() {
            this.emails = [];
            for (let i = 0; i < this.numberEmail; i++) {
                axios.get(this.apiURL)
                    .then((email) => {
                        console.log(email.data.response);
                        this.emails.push(email.data.response)
                    })
            }
        }
    },
    mounted() {
        console.log(this.emails);
    },
    created(){
        // this.randomEmail();
    },
}).mount('#app')
