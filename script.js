//OOP

// get UI element
let form = document.querySelector("#book-form");


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
}

// add event listener
form.addEventListener("submit", newBook);


//functions

function newBook(e) {
  e.preventDefault();

  let title = document.querySelector('#title').value, author = document.querySelector("#author").value, isbn = document.querySelector('#isbn').value;

  // create a new object of book class from the input info
  let book = new Book(title, author, isbn);

  let ui = new UI();

  // pass that object to the ui class to add it to the table via ui.addToBookList() method
  ui.addToBookList(book);

  ui.clearFields();
}