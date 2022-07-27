// Selecting elements
const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputIsRead = document.querySelector('#read');
const addBtn = document.querySelector('.add-button > button');
const container = document.querySelector('.container');
const plusIcon = document.querySelector('.plus-icon');
let isEditing = false;


// Creating the first book or the array
let myLibrary = [];

// Constructor function to create book instances
function Book(title,author,pages,isRead,id,isEdited) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
    this.isEdited = isEdited;
}

// Function to take user's input and create an instance then store it to myLibrary array

// Global Index
let index;
let itemID;
function addBook(e) {
     itemID = new Date().getMilliseconds();
    if(myLibrary.length >= 8) return;
    if (inputTitle.value === "") return;
    if (inputAuthor.value === "") return;
    if (inputPages.value === "") return;
    if (inputIsRead.value === "") return;
    let newBook = new Book(inputTitle.value,inputAuthor.value,inputPages.value,inputIsRead.value,itemID,isEditing);
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
const wrapper = `<div class="wrapper"></div>`;
 const header = document.querySelector('.header');
    document.body.insertAdjacentHTML('beforeend', wrapper)

function displayBooks() {
    let card;
    // let id = new Date().getTime();

    
    myLibrary.forEach(book => {
       
         card =`

      
   
        <div class="card" data-id="${itemID}">
        <div class="icons">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 edit-icon icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
</svg>
        <svg xmlns="http://www.w3.org/2000/svg"  class="h-6 w-6 cancel-icon icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
      </div>
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
        <span class="is-read">${book.isRead === " " ? "Yes" : book.isRead}</span>
        </div>

        
        <label class="switch">
            <input type="checkbox" ${book.isRead}>
            <span class="slider round"></span>
                </label>
        </div>
        `

    })


    function editItem(e) {
        let currentCard = e.currentTarget.parentElement.parentElement;
        let currentCardID = e.currentTarget.parentElement.parentElement.dataset.id;
        currentCardID = +currentCardID;
        myLibrary.forEach(book => {
            if(book.id === currentCardID) {
                isEditing = true;
                let wrapper= document.querySelector('.wrapper');
                wrapper.style.display = 'none';
                container.style.display = 'flex';
                // Select each input to edit
                let title = container.querySelector('input[id="title"]');
                let author = container.querySelector('input[id="author"]');
                let pages = container.querySelector('input[id="pages"]');
                let read = container.querySelector('select[id="read"]');
                
                title.value = book.title;
                author.value = book.author;
                pages.value = book.pages;
                read.value = book.isRead;

                currentCard.remove();
                let removed = myLibrary.find(item => item.id === currentCardID);
                myLibrary.splice(removed,1);
                
            }
        })
    }

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
        currentCard.parentElement.remove()
       let removed = myLibrary.find(item => {
            let removed = item.id;
            return removed;
            
        })
        myLibrary.splice(removed, 1)
        console.log(myLibrary)
    })
})

//Adding an event listener to edit-icon
cardID.querySelectorAll('.edit-icon').forEach(el => {
    el.addEventListener('click', editItem);
})


cardID.querySelectorAll('.switch').forEach(toggle => {
    toggle.addEventListener('change', e => {
        let currentCard = e.currentTarget.parentElement;
        let currentItem = myLibrary.find(item => {
            return item.id === +currentCard.dataset.id;
        })

        if(currentItem.isRead === "Yes") {
            currentItem.isRead = "No";
            let currentStatus = e.target.parentElement.previousElementSibling.lastElementChild;
            currentStatus.textContent = "No";
        }
        else if (currentItem.isRead === "No") {
            currentItem.isRead = "Yes";
           let currentStatus = e.target.parentElement.previousElementSibling.lastElementChild;
           currentStatus.textContent = "Yes"
        }
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
