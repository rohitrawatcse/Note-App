
function copyNote(){
    
    // const title = document.querySelector("#title")
    const note = document.querySelector("#note")
    const copSelection = window.getSelection();
    // // Select the text field
    // title.select();
    // title.setSelectionRange(0, 99999); // For mobile devices
    note.select();
    note.setSelectionRange(0, 99999); // For mobile devices

   // Copy the text inside the text field
//   navigator.clipboard.writeText(title);
   navigator.clipboard.writeText(note.value);
  alert("Copied the text: " + note.value);
}

function boldNote(){
    // const title = document.querySelector("#title")
    const note = document.querySelector("#note")
    // const boldSelection = window.getSelection();
   
    let text = note.value
    let selection = window.getSelection();
    let boldText = "<b>" + selection + "</b>"
    note.value = text.replace(selection, boldText) 
  
}

function underlineNote(){
    // const title = document.querySelector("#title")
    const note = document.querySelector("#note")
    // const boldSelection = window.getSelection();
   
    let text = note.value
    let selection = window.getSelection();
    let boldText = "<u>" + selection + "</u>"
    note.value = text.replace(selection, boldText) 
  
}



function addNote(){
    
    // const title = document.querySelector("#title").value
const note = document.querySelector("#note").value
const allnote = document.querySelector(".allnote")
    const titleText = document.querySelector(".title-text")
    const noteText = document.querySelector(".note-text")
    
    // <!--<h4 class="title-text">${title}</h4>-->
    let card = `<div class="note">
                    
                    <p class="note-text">${note}</p>
                </div>`;
    allnote.innerHTML += card;
    // title.select();
    // note.select();
    // title.setSelectionRange(0, 99999);
    // note.setSelectionRange(0, 99999);
    // titleText.textContent = title.value;
    // noteText.textContent = note.value;
    
    // title.value = "";
    note.value = "";

    


}

















































$("#search-icon").click(function() {
    $(".nav").toggleClass("search");
    $(".nav").toggleClass("no-search");
    $(".search-input").toggleClass("search-active");
  });
  
  $('.menu-toggle').click(function(){
     $(".nav").toggleClass("mobile-nav");
     $(this).toggleClass("is-active");
  });
  