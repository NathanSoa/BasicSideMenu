window.addEventListener('load', () => {
    
    hideMenus()

    const menuAnchors = document.querySelectorAll(".menulink")

    menuAnchors.forEach(eachAnchor => {
        eachAnchor.addEventListener('click', () => {
            const menuOptionList = eachAnchor.parentElement.children[1]

            if(IsThisMenuHidden(menuOptionList)){
                hideMenus()
                changeClass("show-menu", menuOptionList)
            }else{
                changeClass("hide-menu", menuOptionList)
            }
        })
    })

    function IsThisMenuHidden(menuOptionList){
        return menuOptionList.classList.contains("hide-menu")
    }

    function hideMenus(){
        const subMenus = document.querySelectorAll("ul li ul")
        subMenus.forEach(eachMenu => {
           changeClass("hide-menu", eachMenu)
        })
    }

    function changeClass(className, element){
            element.className = className
    }
})