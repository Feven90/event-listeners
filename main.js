const toDoInputElm = document.getElementById('toDoInput');
const notesInputElm = document.getElementById('notesInput');
const submitToDoButtonElm = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    const deleteButton = document.getElementsByClassName('deleteButton');
    console.log(deleteButton);
    
    for (let i=0; i< deleteButton.length; i++){
        const element = deleteButton[i];
        element.addEventListener("click", ()=> {
            console.log("they clicke delete!!!");
        })
    }
}

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <button href="#" class="btn btn-primary deleteButton">Delete</button>
    </div>
  </div>`
    printToDom(domString, 'toDoCards');
    activateDeletes();

}

submitToDoButtonElm.addEventListener("click", (e) => {
   e.preventDefault();

   buildNewToDoCard(toDoInputElm.value, notesInputElm.value);

});

