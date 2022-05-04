class ToDo {
    static PRIORITY = {
       0: "nessuna priorità",
       1: "bassa",
       2: "media",
       3: "alta",
    }

    constructor(title, priority = ToDo.PRIORITY[0], creationDate, tags){
        this.title = title;
        this.priority = priority;
        this.creationDate = new Date ();
        this.tags = tags;
    }

    toString(){
    
        const toDoString = 'Nome: ' + this.title + '\n' +
                           'Priorità: ' + this.priority + '\n' +
                           'Data di creazione: ' + this.creationDate;
        return toDoString;
      }
}

///////////////////////////////////////////////////

class MultipleToDo extends ToDo {
   constructor(subToDo){
       super(priority);
       this.subToDo = subToDo;
   }


   toString(){
       
   }
}

///////////////////////////////////////////////////

class DeadLineToDo {
    constructor(deadLineDate){
        this.deadLineDate = deadLineDate;
    }
}




const toDo1 = new ToDo ('Fare la spesa', ToDo.PRIORITY[3]);

const multiToDo = new MultipleToDo (['comprare il pane', ], ToDo.PRIORITY[2])

console.log(toDo1.toString());

console.log(multiToDo.toString())