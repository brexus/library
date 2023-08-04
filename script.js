const booksContainer = document.getElementById("main");
const books = document.querySelectorAll(".book-cart");
const formWindow = document.getElementById("form-book");


class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};


// =====================================================================================================
//                  BOOKS CONTROLLER
// =====================================================================================================
const booksController = (() => {
    let myLibrary = [];

    const getMyLibrary = () => {
        return myLibrary;
    };
    
    const addBookToLibrary = (book) => {
        myLibrary.push(book);
    };

    const clearLibraryFromPage = () => {
        booksContainer.innerHTML = "";
    };

    return { addBookToLibrary, clearLibraryFromPage, getMyLibrary };
})();



// =====================================================================================================
//                  DISPLAY CONTROLLER
// =====================================================================================================
const displayController = (() => {
    
    const showFormWindow = () => {
        if(formWindow.classList.contains('disable')){
            formWindow.classList.remove("disable");
            formWindow.classList.add("active");
        } 
    };

    const hideFormWindow = () => {
        if(formWindow.classList.contains('active')){
            formWindow.classList.remove("active");
            formWindow.classList.add("disable");
        }
    };

    const addLibraryToPage = () => {
        const myLibrary = booksController.getMyLibrary();

        myLibrary.forEach(book => {
            const bookCart = document.createElement("div");
            bookCart.classList.add("book-cart");

            const bookTitle = document.createElement("p");
            bookTitle.classList.add("book-title");
            bookTitle.innerText = `"${book.title}"`;

            const bookAuthor = document.createElement("p");
            bookAuthor.classList.add("book-author");
            bookAuthor.innerText = `by ${book.author}`;

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
            bookIcons.innerHTML = "<svg class='btn-book-delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>delete-outline</title><path d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /></svg>";

            // kiedys dodac wyzej edit icon
            // "<svg class='btn-book-edit' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>pencil-outline</title><path d='M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z' /></svg>

            bookCart.appendChild(bookTitle);
            bookCart.appendChild(bookAuthor);
            bookCart.appendChild(bookPages);
            bookCart.appendChild(bookRead);
            bookCart.appendChild(bookIcons);
            booksContainer.appendChild(bookCart);
        });
    };

    const reloadLibrary = () => {
        booksController.clearLibraryFromPage();
        addLibraryToPage();
        listenersController.addDeleteBookListener();
        listenersController.addStatusReadListener();
    };

    
    return { showFormWindow, hideFormWindow, reloadLibrary };
})();




// =====================================================================================================
//                  LISTENERS
// =====================================================================================================

const listenersController = (() => {

    const addStatusReadListener = () => {
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
    };


    const addSaveBookListener = () => {
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
    
            if( inputTitleValue !== '' && 
                inputAuthorValue !== '' &&
                inputPagesValue !== '') {
                const newBook = new Book(inputTitleValue, inputAuthorValue, inputPagesValue, inputReadValue);
                booksController.addBookToLibrary(newBook);
                formWindow.reset();
                displayController.hideFormWindow();
                displayController.reloadLibrary();
            }
        });
    };


    const addCloseFormListener = () => {
        const btnCloseForm = document.getElementById("btn-form-close");

        btnCloseForm.addEventListener("click", () => {
            if (formWindow.classList.contains("active"))
                displayController.hideFormWindow();
        });
    };



    const addShowFormListener = () => {
        const btnAddBook = document.getElementById("add-book");

        btnAddBook.addEventListener("click", () => {
            addCloseFormListener();
            addSaveBookListener();

            if (formWindow.classList.contains("disable"))
                displayController.showFormWindow();
            else if (formWindow.classList.contains("active"))
                displayController.hideFormWindow();
        });
    };



    const addDeleteBookListener = () => {
        const btnsDelete = document.querySelectorAll(".btn-book-delete");
        const myLibrary = booksController.getMyLibrary();

        btnsDelete.forEach((item, index) => {
            item.addEventListener('click', () => {
                myLibrary.splice(index, 1);
                displayController.reloadLibrary();
            });
        });
    };


    const darkLightToggleListener = () => {
        const darkLightToggle = document.getElementById("dark-light-toggle");

        darkLightToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            document.body.classList.toggle('light-mode');
        
            console.log(formWindow.className);
        
            formWindow.classList.toggle('light-mode');
            formWindow.classList.toggle('dark-mode');
        });
    };

    return { addShowFormListener, darkLightToggle: darkLightToggleListener, addDeleteBookListener, addStatusReadListener };
})();



function addFormWindowListener() {
    addCloseFormListener();
    addSaveBookListener();
}

// function reloadLibrary() {
//     clearLibraryFromPage();
//     addLibraryToPage();
//     addDeleteBookListener();
//     addStatusReadListener();
// }



(() => {
    // addShowFormListener();
    // addFormWindowListener();

    listenersController.addShowFormListener();
    listenersController.darkLightToggle();

})();

