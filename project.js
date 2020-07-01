
class Project {
    constructor (title, task, div) {
    this.title = title;
    this.task = task;
    this.div = div;
    }

    

    addNewDiv() {
    let newDiv = document.createElement("div");    
    newDiv.id = "project" + this.div;
    newDiv.className = "project";
    newDiv.style.backgroundColor = `hsla(${Math.random() * 360}, 50%, 80%, 1)`
    container.appendChild(newDiv);
     }

    create() {
    let newDiv = document.getElementById("project" + this.div)

    let newTitle = document.createElement("H2");
    newTitle.innerHTML = this.title;
    newTitle.id = "title" + this.div;
    this.title = newTitle;    

    let newTask = document.createElement("button");
    newTask.innerHTML = this.task;
    newTask.id = newDiv.id + "task" ;
    newTask.className = "task";

    let projNum = this.div;
    //do something when clicked
    newTask.addEventListener("click", function() {
        addNewTask(projNum);
    })
    
    this.task = newTask;   
    
    let deleteButton = document.createElement ("button");
    deleteButton.innerHTML = "x";
    deleteButton.id = ("deleteButton" + this.div);
    deleteButton.className = "deleteButton";

    let editButton = document.createElement ("button");
    editButton.innerHTML = "edit";
    editButton.id = ("editButton" + this.div);
    editButton.className = "editButton";

    //append elements
    newDiv.appendChild(deleteButton);
    newDiv.appendChild(editButton);
    newDiv.appendChild(this.title);
    newDiv.appendChild(this.task);
        
    }

    delete() {
    let newDiv = document.getElementById("project" + this.div)
    let button = document.getElementById("deleteButton" + this.div)
    button.addEventListener("click", function() {
    container.removeChild(newDiv);
    })
       
    }

    edit () {
    let newDiv = document.getElementById("project" + this.div)
    let editButton = document.getElementById("editButton" + this.div)
    let projectTitle = newDiv.getElementsByTagName("H2")

    let newThisDiv = this.div;

    editButton.addEventListener("click", function() {
        editForm("title" + newThisDiv);
    })
    }

    editProject(){
        console.log("something");
        return false;
    }
}