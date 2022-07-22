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

function addBook(e) {
    if(myLibrary.length >= 8) return;

    if(inputTitle.value === "" || inputAuthor.value === "" || inputPages.value === "" || inputIsRead.value === "") return; 
    
    let newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputIsRead.value);
    myLibrary.push(newBook)
    displayBooks()
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputIsRead.value = "";


    return newBook
}
const wrapper = `<div class="wrapper"></div>`
    document.body.insertAdjacentHTML('afterbegin', wrapper)

function displayBooks() {
    let card;
    let id = new Date().getTime();

    
    myLibrary.forEach(book => {
         card =`
         
        <div class="card" data-id="${id}">
        <div class="single-item">
        <span class="single_item_title">Title</span>
        <span>${book.title}</span>
        </div>
        <div class="single-item">
        <span class="single_item_title">Author</span>
        <span>${book.author}</span>
        </div>
        <div class="single-item">
        <span class="single_item_title">Pages</span>
        <span>${book.pages}</span>
        </div>
        <div class="single-item">
        <span class="single_item_title">Read</span>
        <span>${book.isRead}</span>
        </div>
        </div>
        `
    })

document.querySelector('.wrapper').insertAdjacentHTML("afterbegin", card);
document.body.style.justifyContent = 'space-around'

// Let's select that card..
const cardID =document.querySelector(`div[data-id="${id}"]`);
cardID.style.display = "flex";
// container.style.display ='none';

}





// Button functionality
addBtn.addEventListener('click', addBook)
