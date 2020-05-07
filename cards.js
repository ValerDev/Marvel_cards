let card1 = document.getElementById("card1")
let card2 = document.getElementById("card2")
let card3 = document.getElementById("card3")
let card4 = document.getElementById("card4")
let card5 = document.getElementById("card5")
let card6 = document.getElementById("card6")
let card7 = document.getElementById("card7")
let cards = document.getElementsByClassName("cards")[0]
cards.childNodes.forEach( e => {
    e.onclick = () => {
        e.classList.toggle("card_open")
        if(e.id == "card1"){
            e.classList.toggle("card1")
        }
        if(e.id == "card2"){
            e.classList.toggle("card2")
        }
        if(e.id == "card3"){
            e.classList.toggle("card3")
        }
        if(e.id == "card4"){
            e.classList.toggle("card4")
        }
        if(e.id == "card5"){
            e.classList.toggle("card5")
        }
        if(e.id == "card6"){
            e.classList.toggle("card6")
        }
        if(e.id == "card7"){
            e.classList.toggle("card7")
        }
        
    }
})