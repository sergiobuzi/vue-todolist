// Descrizione:
// Rifare l’esercizio della to do list.
// Questa volta però ogni todo sarà un oggetto, formato da due proprietà:
// - text, una stringa che indica il testo del todo
// - done, un booleano (true/false) che indica se il todo è stato fatto oppure no
// MILESTONE 1
// Stampare all’interno di una lista HTML un item per ogni todo.
// Se la proprietà done è uguale a true, visualizzare il testo del todo sbarrato.
// MILESTONE 2
// Visualizzare a fianco ad ogni item ha una “x”: cliccando su di essa, il todo viene rimosso dalla lista.
// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante “aggiungi”: cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo todo, che quindi viene aggiunto alla lista dei todo esistenti.


const {createApp} = Vue;

createApp({
    data() {
        return {
            //imposto la flag a 0
            activeTodo: 0,

            //completo la funzione v-model nell'html
            message:"",

            //array di oggetti di base
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],

        }
    },

    methods: {

        //funzione per eliminnare il todo tramite la x. splice ci consente di eliminare il todo selezionato in todos
        delTodo(i) {
            this.todos.splice(i, 1);
        },


        //funzione per aggiungere  il todo tramite il v-model con la struttura di un oggetto. unshift ci consente di inserirlo nell'array come primo della lista
        addTodo() {
            this.todos.unshift ({
                text: this.message,
                done: false
            });
            //queasto comando mi fa tornare l input text vuoto  dopo aver inviato la stringa con il bottone
            this.message= "";
            console.log(this.todos);
        },

        //funzione che mi consente di cambiare done
        changeDone(i) {
            this.todos[i].done = !this.todos[i].done;
        },
    }
    
}).mount('#app')