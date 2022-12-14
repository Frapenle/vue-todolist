
const { createApp } = Vue

createApp({
    data() {
        return {
            // test per controllare che la lista funzioni
            toDoList: ['casa', 'cosa'],
        }
    }
}).mount('#app')