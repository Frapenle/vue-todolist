
const { createApp } = Vue

createApp({
    data() {
        return {
            emptyMess: "",
            errorMess: "",
            // input utente
            inputToDo: "",
            // array di oggetti
            toDoList: [{
                text: "Zucchine",
                done: true,
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
    // methods
    methods: {
        // Funzione per aggiungere un obj dall' input utente all arrayObj
        addItem(content) {
            content = content.trim().toLowerCase();
            let newObject = { text: content, done: false };

            if (content.length <= 0) {
                this.errorMess = "";
                this.emptyMess = "Scrivi qualcosa da aggiungere";
                this.inputToDo = "";
            }   else if (this.toDoList.find((element) => element.text === content)) {
                    this.emptyMess = "";
                    this.errorMess = content + " " + "è già presente in lista";
                    this.inputToDo = "";
                } else {
                    this.errorMess = "";
                    this.emptyMess = "";
                    this.toDoList.push(newObject);
                }
        },

        // remove element from to-do-list
        removeEl(item) {
            if (this.toDoList.indexOf(item) > -1) {
                this.toDoList.splice(this.toDoList.indexOf(item), 1);
            }
        }
    }
}).mount('#app')