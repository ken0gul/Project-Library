// Selecting elements

// Creating the first book or the array
let myLibrary = [
    {
        title: 'Harry Potter',
        author: "J.K Rownling",
        pages: 980,
        isRead: true

    }



]

const card =`
    <div class="card">
    <span>Title: ${myLibrary[0].title}</span>
    <span>Title: ${myLibrary[0].author}</span>
    <span>Title: ${myLibrary[0].pages}</span>
    <span>Title: ${myLibrary[0].isRead}</span>
    
    </div>
`

document.body.insertAdjacentHTML("beforebegin", card);
