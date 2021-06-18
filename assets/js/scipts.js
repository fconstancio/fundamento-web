function theme() {
    let currentTheme = document.documentElement.getAttribute("data-theme")
    var switchToTheme = currentTheme === "purple" ? "light" : "purple"
    document.documentElement.setAttribute("data-theme", switchToTheme)
}

function extra() {
    let sectionList = document.querySelectorAll('section')
    for(let i = 0; i < sectionList.length; i++ ) {
        sectionList[i].style.display='none'
    }
    document.querySelector("#snake").style.display ='block'
}
