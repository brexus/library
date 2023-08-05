
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
};

const booksController = (() => {
    let myLibrary = [];

    const getMyLibrary = () => {
        return myLibrary;
    };
    
    const addBookToLibrary = (book) => {
        myLibrary.push(book);
    };

    return { addBookToLibrary, getMyLibrary };
})();

export { Book, booksController };
