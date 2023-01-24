const { createApp } = Vue 

createApp({
    data() {
        return {
input_email: "",
input_password: ""
    }
    },
methods: {
submitLogin(e){
if(!this.input_email || !this.input_password) {
return alert("Coloque um email e senha!")
} else {
    return console.log('Email: ' + this.input_email + "\nSenha: " + this.input_password)
}
},
}
    
}).mount("#app")