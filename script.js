// const noteText = document.querySelector("#note");
// 
// function underlineNote(){
    // const note = document.querySelector("#note");
    // let text = note.value
    // let selection = window.getSelection();
    // let boldText = "<u>" + selection + "</u>"
    // note.value = text.replace(selection, boldText)   
// }
const note = document.querySelector("#note");
const allnote = document.querySelector(".allnote");

const copyBtn = document.querySelector(".copy-btn");

function addNote(){
    let card = `<div class="note">
                    <p class="note-text">${note.value}</p>
                    <button class="copy-btn"><img src="https://img.icons8.com/material-sharp/24/000000/copy.png"/></button>
                </div>`;
    allnote.innerHTML += card;
    note.value = "";
}

// function copyNote() {
let cards = allnote.childNodes;
console.log(cards)
cards.forEach( function cardList(current){
    // const cp = current.childNodes[3].getAttribute('class');
    copyBtn.addEventListener("click",function nope(){
        console.log("hello");
    })
})
    // const noteText = document.querySelector(".note-text");
    // navigator.clipboard.writeText(noteText.textContent);
// }
// function boldNote(){
    // const note = document.querySelector("#note")
// 
    // let text = note.value;
    // let selection = window.getSelection();
    // let boldText = "<b>" + selection + "</b>"
    // note.value = text.replace(selection, boldText) 
// 
// }


















































// $("#search-icon").click(function() {
    // $(".nav").toggleClass("search");
    // $(".nav").toggleClass("no-search");
    // $(".search-input").toggleClass("search-active");
//   });
//   
//   $('.menu-toggle').click(function(){
    //  $(".nav").toggleClass("mobile-nav");
    //  $(this).toggleClass("is-active");
//   });
//   