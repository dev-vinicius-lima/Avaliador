const firstCard = document.querySelector('.rating-card')
const secondCard = document.querySelector('.thanks-card')

const note = document.querySelectorAll('.note')
const result = document.querySelector('.result')

let noteValue = 1;

for (let i = 0; i < note.length; i++) {
    note[i].onclick = () => {
        note[i].classList.add('checked')
        noteValue = i + 1

        for (let j = 0; j < note.length; j++) {
            if(j !== i) {
              note[j].classList.remove('checked')
            }
    }
    
}}

const submit = document.querySelector('.submit')

submit.addEventListener('click', () => {
    result.innerHTML = `You selected ${noteValue} out of 5`
    firstCard.style.display = 'none'
    secondCard.style.display = 'flex'
})
