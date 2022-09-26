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


function addNote(){
    let card = `<div class="note">
                    <p class="note-text">${note.value}</p>
                    <button class="copy-btn"><img src="https://img.icons8.com/material-sharp/24/000000/copy.png"/></button>
                </div>`;
    if (note.value=="") {
        note.value ="note"
    } else {
        allnote.innerHTML += card;
    }
    note.value = "";

    var cards = allnote.childNodes;
    // console.log(cards.length)

    const alnote = document.querySelectorAll(".allnote");
    const ele = []
    
    for (let i=0;i<cards.length; i++) {
        // console.log(cards[i])
        const copyBtn = document.querySelector(".copy-btn")
        copyBtn.addEventListener("click",function hello() {
            console.log(cards[i])
        });

        // function copyNote(e) {
            // const element = e.currentTarget.parentElement;
            // navigator.clipboard.writeText(element.textContent);
        // }
    }
}

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