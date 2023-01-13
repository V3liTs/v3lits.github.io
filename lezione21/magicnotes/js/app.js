showNotes();
let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", function (e) {
  let addTxt = document.getElementById("addTxt");

  //LocalStorage: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }

  notesObj.push(addTxt.value);
  //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
  localStorage.setItem("notes", JSON.stringify(notesObj));
  addTxt.value = "";
  showNotes();
});

function showNotes() {
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    //NOTE IN MEMORIA... ["Una nuova nota di testo","la mia nota","ciao mondo"]
    console.log ("NOTE IN MEMORIA... "+notes);
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
    notesObj = JSON.parse(notes);
  }
  let html = "";
  notesObj.forEach(function (element, index) {
    html += `<div class="card noteCard m-2" style="width: 18rem;">
              <div class="card-body">
                <h5 class="card-title">Note ${index + 1} </h5>
                <p class="card-text"> ${element} </p>
                <button id='${index}' onClick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
               </div>
             </div>`;
  });
  let noteElm = document.getElementById("notes");
  if (notesObj.length != null) {
    noteElm.innerHTML = html;
  } else {
    noteElm.innerHTML = "Nessuna nota presente";
  }
}
//fuction to delete a note
function deleteNote(index) {
  console.log("Sto cancellando una nota", index);
  let notes = localStorage.getItem("notes");
  if (notes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(notes);
  }
  notesObj.splice(index, 1);
  localStorage.setItem("notes", JSON.stringify(notesObj));
  showNotes();
}
//function to filter in search bar
let search = document.getElementById("searchTxt");
search.addEventListener("input", function () {
  let inputVal = search.value.toLowerCase();
  let noteCard = document.getElementsByClassName("noteCard");
  Array.from(noteCard).forEach(function (element) {
    let cardTxt = element.getElementsByTagName("p")[0].innerText;
    if (cardTxt.includes(inputVal)) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});