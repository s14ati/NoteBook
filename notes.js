let notesContainer = document.querySelector(".notes");
let createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

// if notes are in the browser it will displayed on web page
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}

// Display saved notes when the page loads
// showNotes() call this function and it will display the localStorage int the "notes"
showNotes();

// if we write notes and refresh the website the notes will disappear becoz we donot store things in the browser
// so we have to add the local storage that will store the notes in our browser, every time we will open the browser it will be stored and displayed as it is . For that we doing this
function updateStorage() {
    localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", function () {
    let input_box = document.createElement("p");
    let img = document.createElement("img");
    input_box.className = "input-box";
    input_box.setAttribute("contenteditable", "true");
    img.src = "./Images/delete.jpg";
    // line 97 wale code ki wajah se baar baar notes ke liye whiteboard khul rha h, kyoki button pr click krne pr har baar new (p) ban rha h
    notesContainer.appendChild(input_box).appendChild(img);
    updateStorage();
})
// on clicking the delete/dustbin button , the parenetElement which is <p> (para) will disappear
notesContainer.addEventListener("click", function (val) {
    if (val.target.tagName === "IMG") {
        // console.log(val.target.tagName);
        val.target.parentElement.remove();
        updateStorage();
        // console.log(val.target.parentElement);
    }
    else if (val.target.tagName === "P") {
        notes = document.querySelectorAll(".input-box");
        notes.forEach(note => {
            //➝ Adds an onkeyup event listener to each note, so whenever the user types inside it, updateStorage() is called.
            note.onkeyup = function () {
                updateStorage();
            }
        })
    }
})
document.addEventListener("keydown", function event() {
    if (event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})
// localStorage.clear();