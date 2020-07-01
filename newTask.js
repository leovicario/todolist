
function addNewTask(projNum) {
    // let task = document.getElementById("project" + projNum + "task");
    // task.addEventListener("click", function () {

    //     console.log("henlo task");
    // })
    
    console.log(projNum);
    let task = document.getElementById("project" + projNum + "task");

    //call editForm
    addTaskForm(projNum);

}

function createAddNewTaskForm() {
    let newForm = document.createElement("FORM");
    newForm.id = "addTaskForm"
    newForm.className = "form"
    newForm.style.visibility = "visible";

    let editTitle = document.createElement("H3");
    editTitle.innerHTML = "Create a new task"        
    
    let i = document.createElement("input"); //input element, text
    i.setAttribute('type',"text");
    i.setAttribute('title',"title");
    i.id = "newTitle";

    let s = document.createElement("input"); //input element, Submit button
    s.setAttribute('type',"submit");
    s.setAttribute('value',"Submit");
    s.id = "submit";

    let cancelButton = document.createElement("button"); //input element, Submit button
    cancelButton.setAttribute('type',"button");
    cancelButton.id = "cancelForm";
    

    let br = document.createElement("br");
    let br2 = document.createElement("br");

    newForm.appendChild(editTitle);
    newForm.appendChild(br2);
    newForm.appendChild(i);
    newForm.appendChild(br);
    newForm.appendChild(s);
    newForm.appendChild(cancelButton);

    document.body.appendChild(newForm);
    console.log("success")
}

function addTaskForm(projNum) {
    if (newForm = document.getElementById("addTaskForm") == null) {
    createAddNewTaskForm();}

    newForm = document.getElementById("addTaskForm");       

    newForm.onsubmit = function() {
            let newTask = document.createElement("p");
            newTask.innerHTML = "o " + document.getElementById("newTitle").value;
            newTask.className = "task";
            let currentProj = document.getElementById ("project" + projNum);
            currentProj.appendChild(newTask);
            newForm = document.getElementById("addTaskForm");
            document.body.removeChild(newForm);
            return false;
    
    }

}
