const booksContainer = document.getElementById("main");
const books = document.querySelectorAll(".book-cart");
const formWindow = document.getElementById("form-book");

let actualLastBook;

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function clearLibraryFromPage() {
    booksContainer.innerHTML = "";
}

function deleteBooksListeners() {
    const btnsDelete = document.querySelectorAll(".btn-book-delete");

    btnsDelete.forEach((item, index) => {
        item.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            reloadLibrary();
        });
    });
}

function addLibraryToPage() {
    myLibrary.forEach(book => {
        const bookCart = document.createElement("div");
        bookCart.classList.add("book-cart");

        const bookTitle = document.createElement("p");
        bookTitle.classList.add("book-title");
        bookTitle.innerText = book.title;

        const bookAuthor = document.createElement("p");
        bookAuthor.classList.add("book-author");
        bookAuthor.innerText = book.author;

        const bookPages = document.createElement("p");
        bookPages.classList.add("book-pages");
        bookPages.innerText = `Pages: ${book.pages}`;

        const bookRead = document.createElement("div");
        bookRead.classList.add("book-read");
        if(book.read) {
            bookRead.innerHTML = "Read:<label class='switch'><input type='checkbox' class='read-status' checked><span class='slider round'></span></label>";
            bookCart.classList.add("read");
        } else { 
            bookRead.innerHTML = "Read:<label class='switch'><input type='checkbox' class='read-status'><span class='slider round'></span></label>";
            bookCart.classList.add("not-read");
        }
        const bookIcons = document.createElement("div");
        bookIcons.classList.add("book-icons");
        bookIcons.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>pencil-outline</title><path d='M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z' /></svg><svg class='btn-book-delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>delete-outline</title><path d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /></svg><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>star-outline</title><path d='M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z' /></svg>";

        bookCart.appendChild(bookTitle);
        bookCart.appendChild(bookAuthor);
        bookCart.appendChild(bookPages);
        bookCart.appendChild(bookRead);
        bookCart.appendChild(bookIcons);
        booksContainer.appendChild(bookCart);
    });
}

function addBookListener() {
    const btnFormAdd = document.getElementById("btn-submit");
    const inputTitle = document.getElementById("title");
    const inputAuthor = document.getElementById("author");
    const inputPages = document.getElementById("pages");
    const inputRead = document.getElementById("read");

    btnFormAdd.addEventListener("click", () => {
        const inputTitleValue = inputTitle.value;
        const inputAuthorValue = inputAuthor.value;
        const inputPagesValue = inputPages.value;
        const inputReadValue = inputRead.checked;

        const newBook = new Book(inputTitleValue, inputAuthorValue, inputPagesValue, inputReadValue);
        addBookToLibrary(newBook);
        reloadLibrary();
        statusReadListener();

        formWindow.reset();
        formWindow.className = "disable";
    });
}

function addFormWindow() {
    const btnCloseForm = document.getElementById("btn-form-close");

    btnCloseForm.addEventListener("click", () => {
        if (formWindow.className === "active")
            formWindow.className = "disable";
    });

    const btnAddBook = document.getElementById("add-book");

    btnAddBook.addEventListener("click", () => {
        if (formWindow.className === "disable")
            formWindow.className = "active";
    });

    addBookListener();
}

function statusReadListener() {
    const readInputSliders = document.querySelectorAll('.read-status');
    const bookCarts = document.querySelectorAll('.book-cart');

    console.log(readInputSliders.length);
    for (let i = 0; i < readInputSliders.length; i++) {
        readInputSliders[i].addEventListener('click', () => {
            if (readInputSliders[i].checked) {
                bookCarts[i].classList = 'book-cart read';
            } else {
                bookCarts[i].classList = 'book-cart not-read';
            }
        });
    }
}

function reloadLibrary() {
    clearLibraryFromPage();
    addLibraryToPage();
    deleteBooksListeners();
    statusReadListener();
}

function startLibrary() {
    addFormWindow();
    addLibraryToPage();
}

startLibrary();
