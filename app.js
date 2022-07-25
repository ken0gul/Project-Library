// Selecting elements
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputIsRead = document.querySelector('#read');
const addBtn = document.querySelector('.add-button > button');
const container = document.querySelector('.container');
const plusIcon = document.querySelector('.plus-icon');



// Creating the first book or the array
let myLibrary = [];

// Constructor function to create book instances
function Book(title,author,pages,isRead,id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}

// Function to take user's input and create an instance then store it to myLibrary array

// Global Index
let index;
let itemID;
function addBook(e) {
     itemID = new Date().getDate();
    if(myLibrary.length >= 8) return;

    if(inputTitle.value === "" || inputAuthor.value === "" || inputPages.value === "" || inputIsRead.value === "") return; 
    
    let newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputIsRead.value,itemID);
    myLibrary.push(newBook)
    displayBooks()
    inputTitle.value = "";
    inputAuthor.value = "";
    inputPages.value = "";
    inputIsRead.value = "";

    let wrapper = document.querySelector('.wrapper')
    wrapper.style.display ='grid';
    container.style.display = 'none';

    return newBook
}
const wrapper = `<div class="wrapper"></div>`
    document.body.insertAdjacentHTML('afterbegin', wrapper)

function displayBooks() {
    let card;
    // let id = new Date().getTime();

    
    myLibrary.forEach(book => {
       
         card =`
   
        <div class="card" data-id="${itemID}">
        <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6 cancel-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
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
const cardID =document.querySelector(`div[data-id="${itemID}"]`);
cardID.style.display = "flex";
// container.style.display ='none';

// Adding an event listener to cancel-icon
cardID.querySelectorAll('.cancel-icon').forEach(el => {
    el.addEventListener('click', (e) => {
        const currentCard = e.currentTarget.parentElement;
        currentCard.remove()
       let removed = myLibrary.find(item => {
            let removed = item.id;
            return removed;
            
        })
        myLibrary.splice(removed, 1)
        console.log(myLibrary)
    })
})

}





// Button functionality
addBtn.addEventListener('click', addBook)

// Plus Icon
plusIcon.addEventListener('click', () => {
    let wrapper= document.querySelector('.wrapper');
    wrapper.style.display = 'none';
    container.style.display = 'flex'
})
