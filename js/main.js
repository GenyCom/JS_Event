/*
add/delete tasks functions
*/

// déclarations
const inputTask = document.getElementById("textToDo");
const btnTask = document.getElementById("btnTask");
const listTask = document.getElementById("listTask");
let arrayTasks = [];

// add task
function addTask() {
    const textTask = inputTask.value.trim();
    if (textTask === "") {
        alert("merci de renseigner une tâche valide");
        return; // Renvoie undefined
    }

    arrayTasks.push(textTask);

    const liTask = document.createElement("li");
    liTask.innerHTML = `
        <span>${textTask}</span>
        <button class="clsdelete">supprimer</button>
    `;
    // ajouter l'objet <li> crée
    listTask.appendChild(liTask);
    inputTask.value = "";

    // mettre à jour le count Task
    const countTask = document.getElementById("nbTask");
    countTask.textContent = `(${arrayTasks.length})`;
}

// delete task
function deleteTask(liTask) {
    // Retirer l'élément <li> du DOM
    listTask.removeChild(liTask);

    // Supprimer la tâche correspondante du tableau arrayTasks
    const taskText = liTask.querySelector("span").innerText;
    arrayTasks = arrayTasks.filter(task => task !== taskText);

    // mettre à jour le count Task
    const countTask = document.getElementById("nbTask");
    countTask.textContent = `(${arrayTasks.length})`;
}

// Event delegation for delete buttons
listTask.addEventListener("click", function(event) {
    if (event.target.classList.contains("clsdelete")) {
        const liTask = event.target.parentElement; // Trouver l'élément <li> parent
        deleteTask(liTask);
    }
});

// count tasks
function coutTasks() {
    return arrayTasks.length;
}

// appel addTask
btnTask.addEventListener("click", addTask);

let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50
  }
};

let clone = Object.assign({}, user);

alert( user.sizes === clone.sizes ); // true, c'est le même objet

// user et clone partage l'objet sizes
user.sizes.width = 60;    // changer une propriété d'un endroit
alert(clone.sizes.width);