/*---------- Show Social Networks ----------*/
const showSocial = (toggleCard, socialCard) => {
    const toggle = document.getElementById(toggleCard),
            Social = document.getElementById(socialCard)

    toggle.addEventListener('click', () =>{
        if(Social.classList.contains('animation')){
            Social.classList.add('down-animation')

            setTimeout(() =>{
                Social.classList.remove('down-animation')
            }, 1000)
        }

        Social.classList.toggle('animation')
    })
}
showSocial('card-toggle', 'card-social')