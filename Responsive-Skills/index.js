const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    // .skills__header -> parent -> skills__content
    let itemClass = this.parentNode.className

    // First close all
    for(i = 0; i < skillsContent.length; i++){
        skillsContent[i].className = "skills__content skills__close"
    }

    // Open it which is clicked
    if(itemClass === 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click',toggleSkills)
})