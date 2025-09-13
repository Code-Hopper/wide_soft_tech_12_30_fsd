let tasks = JSON.parse(localStorage.getItem("data")) || []

let add_notes_button = document.querySelector("#add-notes-button")

let targetElement = document.querySelector(".add-notes-pop-up")

let closeButton = document.querySelector('#close-pop-up')

let taskForm = document.querySelector("#task-form")

let isEdit = false

let TaskEditIndex = null

let searchBar = document.querySelector("#search-bar-field")

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
        event.target["category"].value = ""
        closeButton.click()
        displayTask(tasks)
        SaveDataIntoLocalStorage(tasks)
    } catch (err) {
        console.log("please added task data before submitting ! : ", err)
    }
})

function displayTask(arrayToBeDisplayed) {

    if (arrayToBeDisplayed.length == 0) {
        document.querySelector("#task-container-title").innerText = "No Data To Display !"
    } else {
        document.querySelector("#task-container-title").innerText = "Task Data !"
    }

    document.querySelector('.tasks-container').innerHTML = ""
    arrayToBeDisplayed.forEach((task, index) => {
        let singleTask = document.createElement("div")
        singleTask.classList.add("task-object")
        singleTask.innerHTML = `
                            <h4 class="title">${task.title}</h4>
                            <p class="description">
                                ${task.description}
                            </p>
                            <div class="d-flex gap-3 justify-content-between flex-column">
                                <span class="timeStamp">${task.timeStamp}</span>
                                <div class="d-flex gap-3">
                                    <button class="flex-grow-1 btn btn-danger" onClick='deleteTask(${index})'>delete</button>
                                    <button class="flex-grow-1 btn btn-primary" onClick='editTask(${index})'>Edit</button>
                                </div>
                            </div>
    `
        document.querySelector('.tasks-container').appendChild(singleTask)
    })
}
function deleteTask(deleteIndex) {
    let confirmDelete = window.confirm(`do you really want to delete ${deleteIndex} element ?`)
    if (confirmDelete) {
        tasks = tasks.filter((task, index) => { return index != deleteIndex })
        SaveDataIntoLocalStorage(tasks)
        displayTask(tasks)
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

searchBar.addEventListener("change", (event) => {
    console.log(event.target.value)
    let searchString = event.target.value

    let filteredTasksArray = tasks.filter((task, index) => {
        if (task.title.includes(searchString)) {
            return task
        }
    })

    displayTask(filteredTasksArray)
})

function SaveDataIntoLocalStorage(data) {
    localStorage.setItem("data", JSON.stringify(data))
}

displayTask(tasks)