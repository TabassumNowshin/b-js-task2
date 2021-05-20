//OOP

// get UI element
let form = document.querySelector("#book-form");
let booklist = document.querySelector("#book-list");


class Book {
  constructor(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
  }
}


//UI class
class UI {
  constructor() {

  }

  addToBookList(book) {
    let list = document.querySelector('#book-list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`;
    list.appendChild(tr);
  }

  clearFields() {
    document.querySelector('#title').value = "";
    document.querySelector("#author").value = "";
    document.querySelector('#isbn').value = "";
  }

  showAlert(message, className) {
    let div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));

    let container = document.querySelector(".container");
    let form = document.querySelector("#book-form");
    container.insertBefore(div, form);

    setTimeout( () => {
      document.querySelector(".alert").remove();
    }, 3000); 
  }

  deleteFromBook(target){
    if (target.hasAttribute("href")) {
      target.parentElement.parentElement.remove();
    }
  }
}

// add event listener
form.addEventListener("submit", newBook);
booklist.addEventListener("click", removeBook);

//functions

function newBook(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value, author = document.querySelector("#author").value, isbn = document.querySelector('#isbn').value;

  let ui = new UI();

  if (title === '' || author === '' || isbn === '') {
    ui.showAlert("Please fill up all the fields!", "error");    

  } else {
    
    let book = new Book(title, author, isbn);

    ui.addToBookList(book);
    
    ui.clearFields();
    
    ui.showAlert("Book Added!", "success");
  }

}

function removeBook(e) {
  e.preventDefault();

  let ui = new UI;

  ui.deleteFromBook(e.target);
  ui.showAlert("Book Removed!", "success");
}