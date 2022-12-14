const note = document.querySelector("#note");
const title = document.querySelector("#title")
const allnote = document.querySelector(".allnote");

function addNote(){
    let card = `<div class="note">
                    <div class="dinline">
                        <p class="title-text">${title.value}</p>
                        <button class="copy-btn cpy"><img class="icon" src="https://img.icons8.com/material-sharp/24/000000/copy.png"/></button>
                    </div>
                    <div class="dinline">
                        <p class="note-text">${note.value}</p>
                        <button class="copy-btn cpy"><img class="icon" src="https://img.icons8.com/material-sharp/24/000000/copy.png"/></button>
                    </div>
                </div>`;
    if (note.value=="") {
        note.value ="note"
    } else {
        allnote.innerHTML += card;
    }

    note.value = "";
    title.value ="";
    


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
    if (text != "") {
        if (selection == "") {
            selection = text
        }
        let boldText = "<b>"+ selection +"</b>"
        note.value = text.replace(selection, boldText)
    }
}

function underLineNote(){
    let text = note.value;
    let selection = window.getSelection().toString();
    if (text != "") {
        if (selection == "") {
            selection = text
        }
        let underText = "<u>"+ selection +"</u>"
        note.value = text.replace(selection, underText)
    }
}
