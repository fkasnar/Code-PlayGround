const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something"); //give alert that input is mandatory to make a note
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value; //copy content from input field to li html element content
        listContainer.appendChild(li); //show added note
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }
    inputBox.value = ""; //Added to delete value in input box after adding note
    saveData()
}

listContainer.addEventListener("click", function(e){ //this is to make note checked
    if(e.target.tagName ==="LI"){ // if we clicked on li
        e.target.classList.toggle("checked"); // then add markup as done - styling
        saveData()
    }
    else if(e.target.tagName === "SPAN"){  //if we clicked on span
        e.target.parentElement.remove();  //delete task (li)
        saveData()
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();