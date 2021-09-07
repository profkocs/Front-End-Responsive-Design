const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((btn,key) => {
    btn.addEventListener('click', () => {
        modal(key)
    })
} )

modalCloses.forEach((modal) => {
    modal.addEventListener('click', () => {
        modalViews.forEach((view) => {
            view.classList.remove('active-modal')
        })
    })
})