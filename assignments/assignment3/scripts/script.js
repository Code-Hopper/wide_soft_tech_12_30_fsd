let tasks = []

let add_notes_button = document.querySelector("#add-notes-button")

let targetElement = document.querySelector(".add-notes-pop-up")

let closeButton = document.querySelector('#close-pop-up')

let taskForm = document.querySelector("#task-form")

let isEdit = false

let TaskEditIndex = null

let addNotesFormContainer = document.querySelector(".add-notes-form")

add_notes_button.addEventListener('click', (event) => {
    targetElement.classList.add("active")
})

closeButton.addEventListener('click', () => {
    targetElement.classList.remove("active")
})

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click()
})


taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    try {
        if (isEdit && TaskEditIndex != null) {
            tasks[TaskEditIndex].title = event.target["title"].value
            tasks[TaskEditIndex].description = event.target["description"].value
        } else {
            if (!event.target["title"].value || !event.target["description"].value) {
                throw ("empty fields !")
            }
            tasks.push({
                title: event.target["title"].value,
                description: event.target["description"].value,
                timeStamp: `T: ${new Date().toLocaleTimeString()} D: ${new Date().toLocaleDateString()}`
            })
        }
        event.target["title"].value = ""
        event.target["description"].value = ""
        closeButton.click()
        displayTask()
    } catch (err) {
        console.log("please added task data before submitting ! : ", err)
    }
})

function displayTask() {
    document.querySelector('.tasks-container').innerHTML = ""
    tasks.forEach((task, index) => {
        let singleTask = document.createElement("div")
        singleTask.classList.value = "task border p-4"
        singleTask.innerHTML = `
                            <h4 class="title">${task.title}</h4>
                            <p class="description">
                                ${task.description}
                            </p>
                            <span class="timeStamp">${task.timeStamp}</span>
                            <button onClick='deleteTask(${index})'>delete</button>
                            <button onClick='editTask(${index})'>Edit</button>
    `
        document.querySelector('.tasks-container').appendChild(singleTask)
    })
}
function deleteTask(deleteIndex) {
    let confirmDelete = window.confirm(`do you really want to delete ${deleteIndex} element ?`)
    if (confirmDelete) {
        tasks = tasks.filter((task, index) => { return index != deleteIndex })
        displayTask()
    } else {
        alert("delete cancelled !")
    }
}

function editTask(editIndex) {
    // open pop up
    targetElement.classList.add("active")
    // access the data for selected task
    console.log(tasks[editIndex].title)
    console.log(tasks[editIndex].description)
    // put selected data into input fields
    taskForm["title"].value = tasks[editIndex].title
    taskForm["description"].value = tasks[editIndex].description
    // edit variable set
    isEdit = true
    TaskEditIndex = editIndex
}