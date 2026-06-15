const myLib = [];

function makeBook(title, author, isRead, pages){
    if(!new.target){
        throw new Error("You must use the \"new\" keyword");
    }

    this.id = crypto.randomUUID();
    this.author = author
    this.title = title;
    this.pages = pages;
    this.isRead = isRead;
}

makeBook.prototype.toggleRead = function(){
    this.isRead = !this.isRead;
    // this refers to the object it is called on
    // if there is no isRead property it goes to its parent and modifies that
}

function addBookToLibrary(title, author, isRead, pages){
    const book = new makeBook(title, author, isRead, pages);
    myLib.push(book);
}

addBookToLibrary("The Hobbit", "J.R.R. Tolkien", false, 295);
addBookToLibrary("Atomic Habits", "James Clear", true, 320);

function displayCards(){
    const lib = document.querySelector("main");
    lib.textContent = "";

    for(const book of myLib){
        const card = document.createElement("div");
        card.innerHTML = `
        <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Pages:</strong> ${book.pages}</p>
            <p><strong>Status:</strong> ${book.isRead ? "Read" : "Not Read Yet"}</p>
            <div class="card-buttons">
                <button class="toggle-read-btn">${book.isRead ? "Mark Unread" : "Mark Read"}</button>
                <button class="remove-btn">Remove</button>
            </div>
        `;

        card.classList.add("card");
        card.setAttribute("data-id", book.id);

        lib.appendChild(card);
    }
}

// Grab our DOM elements for the form/modal
const bookDialog = document.querySelector("#book-dialog");
const newBookBtn = document.querySelector("#new-book-btn");
const cancelBtn = document.querySelector("#cancel-btn");
const bookForm = document.querySelector("#book-form");

// 1. Show the modal when clicking the main "Add New Book" button
newBookBtn.addEventListener("click", () => {
    bookForm.reset(); // Clear any old data out of the inputs
    bookDialog.showModal(); // Opens the dialog cleanly as a modal popup
});

// 2. Hide the modal when clicking "Cancel"
cancelBtn.addEventListener("click", () => {
    bookDialog.close();
});

// 3. Handle the form submission
bookForm.addEventListener("submit", (e) => {
    // STOP the browser from trying to refresh the page or send data to a server!
    e.preventDefault();

    // Pull values directly from our form input elements
    const titleVal = document.querySelector("#title").value;
    const authorVal = document.querySelector("#author").value;
    const pagesVal = document.querySelector("#pages").value;
    const readYetVal = document.querySelector("#readYet").checked; // true if checked, false if not

    // Add this new data structure to our library array
    addBookToLibrary(titleVal, authorVal, readYetVal, pagesVal);

    // Re-run our master display function to draw the new card onto the screen
    displayCards();

    // Close up the modal
    bookDialog.close();
});


// Grab the main container where all cards live
const libContainer = document.querySelector("main");

libContainer.addEventListener("click", (e) => {
    // Find the closest parent card element to get the unique data-id
    const cardElement = e.target.closest(".card");
    if (!cardElement) return; // Exit if clicked outside a card
    
    const bookId = cardElement.getAttribute("data-id");

    // 1. IF REMOVE BUTTON IS CLICKED
    if (e.target.classList.contains("remove-btn")) {
        // Find the index of the book with the matching unique ID
        const bookIndex = myLib.findIndex(book => book.id === bookId);
        
        if (bookIndex !== -1) {
            myLib.splice(bookIndex, 1); // Remove it from our data array
            displayCards(); // Re-render the screen to show updated list
        }
    }

    // 2. IF TOGGLE READ BUTTON IS CLICKED
    if (e.target.classList.contains("toggle-read-btn")) {
        // Find the exact book object in our array
        const targetBook = myLib.find(book => book.id === bookId);
        
        if (targetBook) {
            targetBook.toggleRead(); // Execute the prototype method we built earlier!
            displayCards(); // Re-render the screen to update text/button status
        }
    }
});

displayCards();