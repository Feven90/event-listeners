
const toDoInputElm = document.getElementById('toDoInput');
const notesInputElm = document.getElementById('notesInput');
const submitToDoButtonElm = document.getElementById('submitToDoButton');

const activateDeletes = () => {
    const deleteButton = document.getElementsByClassName('deleteButton');
    console.log(deleteButton);

    for (let i=0; i< deleteButton.length; i++){
        const element = deleteButton[i];
        element.addEventListener("click", (e)=> {
            // delete the card that the button was on 
            // we need to get the delete button I clicked to delete that card so use e.target
            const buttonIClicked = e.target;
            const cardToDelete = buttonIClicked.parentNode.parentNode;
            cardToDelete.remove();
            // .parentNode 
            // if it is a DOM node we can use .remove()
            console.log("they clicked delete!!!");
        })
    }
}


const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
}

const buildNewToDoCard = (toDo, notes) => {
    let domString = `<div class="card w-25 m-2">
    <div class="card-body">
      <h5 class="card-title">${toDo}</h5>
      <p class="card-text">${notes}</p>
      <button href="#" class="btn btn-danger deleteButton">Delete</button>
    </div>
  </div>`
    printToDom(domString, 'toDoCards');
    activateDeletes();
}

submitToDoButtonElm.addEventListener("click", (e) => {
   e.preventDefault(); // prevent type submit to have the default behaviour, if we don't use this, as soon as we hit the button then everything disapears 

   buildNewToDoCard(toDoInputElm.value, notesInputElm.value);

});

