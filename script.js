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
//since we don't need constuctor we might as well make the functions static. that we can access them directly without creating an object to the class.
class UI {

  static addToBookList(book) {
    let list = document.querySelector('#book-list');
    let tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href='#' class='delete'>X</a></td>`;
    list.appendChild(tr);
  }

  static clearFields() {
    document.querySelector('#title').value = "";
    document.querySelector("#author").value = "";
    document.querySelector('#isbn').value = "";
  }

  static showAlert(message, className) {
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

  static deleteFromBook(target){
    if (target.hasAttribute("href")) {
      target.parentElement.parentElement.remove();
      UI.showAlert("Book Removed!", "success");
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

  if (title === '' || author === '' || isbn === '') {
    UI.showAlert("Please fill up all the fields!", "error");    

  } else {
    
    let book = new Book(title, author, isbn);

    UI.addToBookList(book);
    
    UI.clearFields();
    
    UI.showAlert("Book Added!", "success");
  }

}

function removeBook(e) {
  e.preventDefault();

  UI.deleteFromBook(e.target);
}