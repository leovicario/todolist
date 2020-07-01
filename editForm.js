function createEditForm() {
        let newForm = document.createElement("FORM");
        
        // newForm.setAttribute('method',"get");
        // newForm.setAttribute('action', editProjectTitle());
        newForm.id = "editForm"
        newForm.className = "form"
        newForm.style.visibility = "visible";

        let editTitle = document.createElement("H3");
        editTitle.innerHTML = "Choose a new name"        
        
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
        let br3 = document.createElement("br");

        newForm.appendChild(editTitle);
        newForm.appendChild(br2);
        newForm.appendChild(i);
        newForm.appendChild(br);
        newForm.appendChild(s);
        newForm.appendChild(cancelButton);

        document.body.appendChild(newForm);
        console.log("success")
}

function editForm(divNumber) {
        if (newForm = document.getElementById("editForm") == null) {
        createEditForm();}

        newForm = document.getElementById("editForm");       

        newForm.onsubmit = function() {
                let newTitle = document.getElementById("newTitle").value;
                let oldTitle = document.getElementById(divNumber);
                oldTitle.innerHTML = newTitle;
                newForm = document.getElementById("editForm");
                document.body.removeChild(newForm);
                return false;
        
        }

}
