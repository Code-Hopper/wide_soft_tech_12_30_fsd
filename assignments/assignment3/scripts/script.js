let add_notes_button = document.querySelector("#add-notes-button")

let targetElement = document.querySelector(".add-notes-pop-up")

let closeButton = document.querySelector('#close-pop-up')

let taskForm = document.querySelector("#task-form")

let addNotesFormContainer = document.querySelector(".add-notes-form")

add_notes_button.addEventListener('click', (event) => {
    targetElement.classList.add("active")
})

closeButton.addEventListener('click', () => {
    targetElement.classList.remove("active")
})

// {
//     titile: "some title",
//         description : "some description",
//             timeStamp : "T:12:50:00 D: 09/09/2025"
// }

addNotesFormContainer.addEventListener("mouseleave", () => {
    document.getElementById("formSubmitButton").click()
})

taskForm.addEventListener('submit', (event) => {
    event.preventDefault()
    // alert('tring to add a new task form submit !')
    console.log(event.target)
})