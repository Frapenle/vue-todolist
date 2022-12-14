
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

            // methods
            methods: {
                addItem(item) {
                    this.toDoList.push({ text: item, done: false });
                }
            }

        }
    }
}).mount('#app')