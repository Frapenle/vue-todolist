
const { createApp } = Vue

createApp({
    data() {
        return {
            toDoList: [{
                name: "Zucchine",
                done: false,
            },
            {
                name: "Patate",
                done: false,
            },
            {
                name: "Pasta",
                done: false,
            },
            {
                name: "Nutella",
                done: false,
            }],
        }
    }
}).mount('#app')