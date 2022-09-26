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

    var copyBtn = document.querySelectorAll(".copy-btn")
    var copyArr = [...copyBtn]
    copyArr.forEach( function copyBtn(e) {
        e.addEventListener("click",copyNote)
    })
    function copyNote(btn) {
        const element = btn.currentTarget.parentElement;
        navigator.clipboard.writeText(element.textContent);
    }
}

function boldNote(){
    let text = note.value;
    let selection = window.getSelection().toString();
    let boldText = "<b>" + selection + "</b>"
    note.value = text.replace(selection, boldText) 

}

function underlineNote(){
    let text = note.value
    let selection = window.getSelection();
    let underText = "<u>" + selection + "</u>"
    note.value = text.replace(selection, underText)   
}












































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