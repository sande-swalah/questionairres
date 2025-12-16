const inputs = document.querySelectorAll(".input")

console.log(inputs)


inputs.forEach(input =>{
    input.addEventListener("focus", (e) =>{
        console.log(e)
    input.parentElement.classList.add("focus")
    })

    input.addEventListener("blur", ()=>{
        if(input.value.trim() === ''){
        input.parentElement.classList.remove('focus')
        }

    })
     
})

//pick element to target
//const nameInputs = document.getElementById("name")
//console.log(nameInputs)

//nameInputs.addEventListener("input", validateUsername)

//const validateUsername = (event) => (
    //console.log(event.target.value)

//)


//document.body.addEventListener('submit', ()=>(
    // console.log("Submit event on body level")
//))

const form = document.querySelector('form')
console.log(form)
form.addEventListener("submit", (e) =>{
    e.preventDefault()
    // e.stopPropagation()
    console.log("the submit button was clicked  ")
    window.location.href = "thanks.html"

})




//pick the elements to target
//const nameInputs= document.getElementsByName("")
//const nameInputs= doc
//phases of an event cycle
//trigger phase- when the user interacts with the element in a manner that can be understood by the browser
//capture phase- when the event travels down the DOM tree
//target phase- when the event has reached the target element. when the user causes the logic to run
// 

// const submit_input = document.getElementById("submit-input")

// submit_input.addEventListener("'click", ()=>{
//     window.location.href = "index.html"
// })
