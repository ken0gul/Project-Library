// Selecting elements
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputIsRead = document.querySelector('#read');
const addBtn = document.querySelector('.add-button > button');
const container = document.querySelector('.container');




// Creating the first book or the array
let myLibrary = [];

// Constructor function to create book instances
function Book(title,author,pages,isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Function to take user's input and create an instance then store it to myLibrary array

function addBook() {
    let newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputIsRead.value);
    myLibrary.push(newBook)
    displayBooks()
    console.log(myLibrary)
    return newBook
}


function displayBooks() {
    let card;
    let id = new Date().getTime();
    myLibrary.forEach(book => {
        console.log(book.title)
         card =`
        <div class="card" data-id="${id}">
        
        <span>Title: ${book.title}</span>
        <span>Author: ${book.author}</span>
        <span>Pages: ${book.pages}</span>
        <span>Read: ${book.isRead}</span>
        
        </div>
        `
    })

document.body.insertAdjacentHTML("afterbegin", card);

// Let's select that card..
const cardID =document.querySelector(`div[data-id="${id}"]`);
cardID.style.display = "flex";
container.style.display ='none';

}





// Button functionality
addBtn.addEventListener('click', addBook)
