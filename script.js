const submitForm = ()=> {
    const myForm = document.querySelector('.myForm')
    const name = document.getElementById('name')

    myForm.addEventListener('submit', (e)=> {
        e.preventDefault()
        console.log(name.value)
        console.log(email.value)
        console.log(comment.value)
        name.value = ''
        email.value = ''
        comment.value = ''
    })
}

submitForm()

const hamburgerMenu = document.querySelector('.navbar_small')
const dropdown = document.querySelector('.dropdown')

hamburgerMenu.addEventListener('click', (e)=> {
    dropdown.classList.toggle('dropdown')
})