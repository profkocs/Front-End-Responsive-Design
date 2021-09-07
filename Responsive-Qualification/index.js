const tabs = document.querySelectorAll('[data-target]')
      tabContents = document.querySelectorAll('[data-content]')


      

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(content => {
            // first remove from all content
            content.classList.remove('qualification__active')
        })

        // Add to content
        target.classList.add('qualification__active')

        tab.forEach(t => {
            // Revome from tabs
            t.classList.remove('qualification__active')
        })

        // Add to tab which is clicked
        tab.classList.add('qualification__active')
    })
})