// let heading1 = document.getElementById("e1")

// console.log(heading1.dataset)


function toggleClass(event){
    console.log(event.target.dataset)

    let target = document.querySelector(event.target.dataset.targetElement)

    console.log(target)

    target.classList.toggle(event.target.dataset.toggleClass)
}