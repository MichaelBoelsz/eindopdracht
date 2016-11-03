/*
=================================================================

    LEPRA

=================================================================
*/

var banner = document.querySelector(".rood")
var michael = document.querySelector(".body")

function myFunction() {
    michael.classList.add("afbeelding")
}

function back() {
    michael.classList.remove("afbeelding")
}

banner.addEventListener("mouseenter", myFunction, false)
banner.addEventListener("click", myFunction, false)

banner.addEventListener("mouseleave", back, false)

/*
=================================================================

    CHARLIE SHEEN

=================================================================
*/

var banner2 = document.querySelector(".groen1")

function myFunction2() {
    michael.classList.add("afbeelding2")
}

function back2() {
    michael.classList.remove("afbeelding2")
}

banner2.addEventListener("mouseenter", myFunction2, false)

banner2.addEventListener("mouseleave", back2, false)


/*
=================================================================

    VERLIEFD

=================================================================
*/

var banner3 = document.querySelector(".groen2")

function myFunction3() {
    michael.classList.add("afbeelding3")
}

function back3() {
    michael.classList.remove("afbeelding3")
}

banner3.addEventListener("mouseenter", myFunction3, false)

banner3.addEventListener("mouseleave", back3, false)




