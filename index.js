let homeEl = document.getElementById("home-el")
let guestEl = document.getElementById("guest-el")
let countH = 0
let countG = 0

function add1(){
    countH += 1
    homeEl.textContent = countH
}
function add2(){
    countH += 2
    homeEl.textContent = countH
}
function add3(){
    countH += 3
    homeEl.textContent = countH
}
function add11(){
    countG += 1
    guestEl.textContent = countG
}
function add21(){
    countG += 2
    guestEl.textContent = countG
}
function add31(){
    countG += 3
    guestEl.textContent = countG
}
function newGame(){
    countG=0
    countH=0
    homeEl.textContent = countH
    guestEl.textContent = countG
}