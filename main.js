const container = document.getElementById("container");
let counter = 1;



function createProj(title, task, div) {
    const project = new Project(title, task, div)
    project.addNewDiv();
    project.create();  
    project.delete();
    project.edit();

}

function addNewProject() {
    let button = document.getElementsByClassName("new");

    button[0].addEventListener("click", function() {
    let newProjectForm = document.getElementById("newProjectForm"); 
    newProjectForm.style.visibility = "visible";

    })
}

function submitProj() {
    
    let f = document.getElementById("newProjectForm"); 
    f.style.visibility = "hidden";
    let title = document.getElementById("project").value;
    createProj(title, "+ Add new todo", counter);
    counter ++;
}

function cancelForm() {
    const cancelButton = document.getElementById("cancelForm");
    cancelButton.addEventListener("click", function() {
    let f = document.getElementById("newProjectForm"); 
    f.style.visibility = "hidden";
    })
}


createProj("Example Project", "+ Add new todo", 0);

addNewProject();
cancelForm();

