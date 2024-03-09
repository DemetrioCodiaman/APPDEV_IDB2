const modalBtn = document.querySelector('.modal-btn')
const modal = document.querySelector('.modal-overlay')
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener("click", () => {
    console.log(modalBtn.classList)
    modal.classList.add('open-modal')
})

closeBtn.addEventListener('click', () => {
    console.log('Closing the modal')
    modal.classList.remove('open-modal')
})

