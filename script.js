let input = document.querySelector(".task-input");
let ul = document.querySelector(".task-list");   // 'ul' here is variable and not tag

function deleteTask(e) {
    e.currentTarget.remove();
}

input.addEventListener("keypress", function(e) {   //eventListener -> detects keypress
    if(e.key == "Enter") {
        let task = input.value;
        if(!task) {
            alert("Error! No task added.");
            return;
        }
        input.value = "";
        let li = document.createElement("li");               // created li tag
        li.addEventListener("dblclick" , deleteTask);
        li.innerText = task;                                //  add task to li
        ul.insertBefore(li , ul.firstChild);               //   append li inside ul
    }
})