
const { createApp } = Vue

createApp({
    data() {
        return {
            // input utente
            inputToDo: "",
            // array di oggetti
            toDoList: [{
                text: "Zucchine",
                done: false,
            },
            {
                text: "Patate",
                done: false,
            },
            {
                text: "Pasta",
                done: false,
            },
            {
                text: "Nutella",
                done: false,
            }],
        }
    },
    // methods fratello di data
    methods: {
        addItem() {
            this.toDoList.push({ text: this.inputToDo, done: false });
        }
    }
}).mount('#app')