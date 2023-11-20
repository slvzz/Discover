function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
 
    // pega a tag img
    const img = document.querySelector("#profile img")

    // substitui a img
    if (html.classList.contains('light')) {
        // se tiver light mode, adiciona a img light
        img.setAttribute("src", "./assets/avatar-light.png")
    } else {
        // se tiver dark mode, deixa a img normal
        img.setAttribute("src", "./assets/Avatar.png")
    }  
}

    //  --- maneira de fazer ---
    // if (html.classList.contains('light')) {
    //    html.classList.remove('light')
    // } else {
    //   html.classList.add('light')
    // }