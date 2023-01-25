 import { QuickDB } from "quick.db"
const db = new QuickDB()
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
let savedEmail = db.get(input_email)
if(savedEmail === input_email) {
    return alert("Você ja tem um email cadastrado!") 
} else {
    alert(`Foi salvo seu email e senha!`)
    db.set(input_email, {input_email})
    db.set(input_email, {input_password})
    
}

console.log("Email: " + this.input_email + " Senha: " + this.input_password)
}
},
}

}).mount("#app")

app.listen(5500)