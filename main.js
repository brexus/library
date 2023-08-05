/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Book.js":
/*!*********************!*\
  !*** ./src/Book.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Book: () => (/* binding */ Book),\n/* harmony export */   booksController: () => (/* binding */ booksController)\n/* harmony export */ });\n\r\nclass Book {\r\n    constructor(title, author, pages, read) {\r\n        this.title = title;\r\n        this.author = author;\r\n        this.pages = pages;\r\n        this.read = read;\r\n    }\r\n};\r\n\r\nconst booksController = (() => {\r\n    let myLibrary = [];\r\n\r\n    const getMyLibrary = () => {\r\n        return myLibrary;\r\n    };\r\n    \r\n    const addBookToLibrary = (book) => {\r\n        myLibrary.push(book);\r\n    };\r\n\r\n    return { addBookToLibrary, getMyLibrary };\r\n})();\r\n\r\n\r\n\n\n//# sourceURL=webpack://library/./src/Book.js?");

/***/ }),

/***/ "./src/Gui.js":
/*!********************!*\
  !*** ./src/Gui.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   displayController: () => (/* binding */ displayController)\n/* harmony export */ });\n/* harmony import */ var _Book__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Book */ \"./src/Book.js\");\n\r\n\r\nconst booksContainer = document.getElementById(\"main\");\r\nconst formWindow = document.getElementById(\"form-book\");\r\n\r\n\r\nconst displayController = (() => {\r\n\r\n    const clearLibraryFromPage = () => {\r\n        booksContainer.innerHTML = \"\";\r\n    };\r\n    \r\n    const showFormWindow = () => {\r\n        if(formWindow.classList.contains('disable')){\r\n            formWindow.classList.remove(\"disable\");\r\n            formWindow.classList.add(\"active\");\r\n        } \r\n    };\r\n\r\n    const hideFormWindow = () => {\r\n        if(formWindow.classList.contains('active')){\r\n            formWindow.classList.remove(\"active\");\r\n            formWindow.classList.add(\"disable\");\r\n            displayController.clearInputsValue();\r\n        }\r\n    };\r\n\r\n    const addLibraryToPage = () => {\r\n        const myLibrary = _Book__WEBPACK_IMPORTED_MODULE_0__.booksController.getMyLibrary();\r\n\r\n        myLibrary.forEach(book => {\r\n            const bookCart = document.createElement(\"div\");\r\n            bookCart.classList.add(\"book-cart\");\r\n\r\n            const bookTitle = document.createElement(\"p\");\r\n            bookTitle.classList.add(\"book-title\");\r\n            bookTitle.innerText = `\"${book.title}\"`;\r\n\r\n            const bookAuthor = document.createElement(\"p\");\r\n            bookAuthor.classList.add(\"book-author\");\r\n            bookAuthor.innerText = `by ${book.author}`;\r\n\r\n            const bookPages = document.createElement(\"p\");\r\n            bookPages.classList.add(\"book-pages\");\r\n            bookPages.innerText = `Pages: ${book.pages}`;\r\n\r\n            const bookRead = document.createElement(\"div\");\r\n            bookRead.classList.add(\"book-read\");\r\n            if(book.read) {\r\n                bookRead.innerHTML = \"Read:<label class='switch'><input type='checkbox' class='read-status' checked><span class='slider round'></span></label>\";\r\n                bookCart.classList.add(\"read\");\r\n            } else { \r\n                bookRead.innerHTML = \"Read:<label class='switch'><input type='checkbox' class='read-status'><span class='slider round'></span></label>\";\r\n                bookCart.classList.add(\"not-read\");\r\n            }\r\n            const bookIcons = document.createElement(\"div\");\r\n            bookIcons.classList.add(\"book-icons\");\r\n            bookIcons.innerHTML = \"<svg class='btn-book-delete' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>delete-outline</title><path d='M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19M8,9H16V19H8V9M15.5,4L14.5,3H9.5L8.5,4H5V6H19V4H15.5Z' /></svg>\";\r\n\r\n            // kiedys dodac wyzej edit icon\r\n            // \"<svg class='btn-book-edit' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><title>pencil-outline</title><path d='M14.06,9L15,9.94L5.92,19H5V18.08L14.06,9M17.66,3C17.41,3 17.15,3.1 16.96,3.29L15.13,5.12L18.88,8.87L20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18.17,3.09 17.92,3 17.66,3M14.06,6.19L3,17.25V21H6.75L17.81,9.94L14.06,6.19Z' /></svg>\r\n\r\n            bookCart.appendChild(bookTitle);\r\n            bookCart.appendChild(bookAuthor);\r\n            bookCart.appendChild(bookPages);\r\n            bookCart.appendChild(bookRead);\r\n            bookCart.appendChild(bookIcons);\r\n            booksContainer.appendChild(bookCart);\r\n        });\r\n    };\r\n\r\n    const clearInputsValue = () => {\r\n        document.getElementById(\"title\").value = \"\";\r\n        document.getElementById(\"author\").value = \"\";\r\n        document.getElementById(\"pages\").value = \"\";\r\n        document.getElementById(\"read\").checked = false;\r\n\r\n        document.querySelector(\".error-title\").innerText = \"\";\r\n        document.querySelector(\".error-author\").innerText = \"\";\r\n        document.querySelector(\".error-pages\").innerText = \"\";\r\n    };\r\n\r\n    const checkTitleInput = () => {\r\n        const inputTitle = document.getElementById(\"title\");\r\n    \r\n        if (!inputTitle.checkValidity())\r\n        document.querySelector(\".error-title\").innerText = \"The title is invalid.\";\r\n        else \r\n            document.querySelector(\".error-title\").innerText = \"\";\r\n    };\r\n    \r\n    const checkAuthorInput = () => {\r\n        const inputAuthor = document.getElementById(\"author\");\r\n        \r\n        if (!inputAuthor.checkValidity())\r\n            document.querySelector(\".error-author\").innerText = \"The author is invalid.\";\r\n        else \r\n            document.querySelector(\".error-author\").innerText = \"\";\r\n    };\r\n    \r\n    const checkPagesInput = () => {\r\n        const inputPages = document.getElementById(\"pages\");\r\n        \r\n        if (!inputPages.checkValidity())\r\n        document.querySelector(\".error-pages\").innerText = \"The pages is invalid.\";\r\n        else \r\n            document.querySelector(\".error-pages\").innerText = \"\";\r\n    };\r\n\r\n    const reloadLibrary = () => {\r\n        clearLibraryFromPage();\r\n        addLibraryToPage();\r\n        listenersController.addDeleteBookListener();\r\n        listenersController.addStatusReadListener();\r\n    };\r\n\r\n    return { showFormWindow, hideFormWindow, reloadLibrary, clearInputsValue, checkTitleInput, checkAuthorInput, checkPagesInput };\r\n})();\r\n\r\n\r\n\r\n// =====================================================================================================\r\n//                  LISTENERS\r\n// =====================================================================================================\r\n\r\nconst listenersController = (() => {\r\n\r\n    const addStatusReadListener = () => {\r\n        const readInputSliders = document.querySelectorAll('.read-status');\r\n        const bookCarts = document.querySelectorAll('.book-cart');\r\n    \r\n        for (let i = 0; i < readInputSliders.length; i++) {\r\n            readInputSliders[i].addEventListener('click', () => {\r\n                if (readInputSliders[i].checked) {\r\n                    bookCarts[i].classList = 'book-cart read';\r\n                } else {\r\n                    bookCarts[i].classList = 'book-cart not-read';\r\n                }\r\n            });\r\n        }\r\n    };\r\n\r\n\r\n    const addSaveBookListener = () => {\r\n        const btnFormAdd = document.getElementById(\"btn-submit\");\r\n        const inputTitle = document.getElementById(\"title\");\r\n        const inputAuthor = document.getElementById(\"author\");\r\n        const inputPages = document.getElementById(\"pages\");\r\n        const inputRead = document.getElementById(\"read\");\r\n        \r\n        btnFormAdd.addEventListener(\"click\", (e) => {\r\n            const inputTitleValue = inputTitle.value;\r\n            const inputAuthorValue = inputAuthor.value;\r\n            const inputPagesValue = inputPages.value;\r\n            const inputReadValue = inputRead.checked;\r\n\r\n            // if( inputTitleValue !== '' && \r\n            //     inputAuthorValue !== '' &&\r\n            //     inputPagesValue !== '')\r\n            e.preventDefault();\r\n            // formWindow.setCustomValidity(\"error\");\r\n    \r\n            if(formWindow.checkValidity()) {\r\n                _Book__WEBPACK_IMPORTED_MODULE_0__.booksController.addBookToLibrary(\r\n                    new _Book__WEBPACK_IMPORTED_MODULE_0__.Book(\r\n                        inputTitleValue, \r\n                        inputAuthorValue, \r\n                        inputPagesValue, \r\n                        inputReadValue\r\n                    )\r\n                );\r\n                displayController.clearInputsValue();\r\n                displayController.hideFormWindow();\r\n                displayController.reloadLibrary();\r\n            } else {\r\n                displayController.checkTitleInput();\r\n                displayController.checkAuthorInput();\r\n                displayController.checkPagesInput();\r\n            }\r\n        });\r\n    };\r\n\r\n\r\n    const addCloseFormListener = () => {\r\n        const btnCloseForm = document.getElementById(\"btn-form-close\");\r\n\r\n        btnCloseForm.addEventListener(\"click\", () => {\r\n            if (formWindow.classList.contains(\"active\")){\r\n                displayController.clearInputsValue();\r\n                displayController.hideFormWindow();\r\n            }\r\n        });\r\n    };\r\n\r\n\r\n    const addShowFormListener = () => {\r\n        const btnAddBook = document.getElementById(\"add-book\");\r\n\r\n        btnAddBook.addEventListener(\"click\", () => {\r\n            if (formWindow.classList.contains(\"disable\")) \r\n                displayController.showFormWindow();\r\n            else if (formWindow.classList.contains(\"active\")) {\r\n                displayController.clearInputsValue()\r\n                displayController.hideFormWindow();\r\n            }\r\n        });\r\n    };\r\n\r\n\r\n\r\n    const addDeleteBookListener = () => {\r\n        const btnsDelete = document.querySelectorAll(\".btn-book-delete\");\r\n        const myLibrary = _Book__WEBPACK_IMPORTED_MODULE_0__.booksController.getMyLibrary();\r\n\r\n        btnsDelete.forEach((item, index) => {\r\n            item.addEventListener('click', () => {\r\n                myLibrary.splice(index, 1);\r\n                displayController.reloadLibrary();\r\n            });\r\n        });\r\n    };\r\n\r\n\r\n    const darkLightToggleListener = () => {\r\n        const darkLightToggle = document.getElementById(\"dark-light-toggle\");\r\n\r\n        darkLightToggle.addEventListener('click', () => {\r\n            document.body.classList.toggle('dark-mode');\r\n            document.body.classList.toggle('light-mode');\r\n                \r\n            formWindow.classList.toggle('light-mode');\r\n            formWindow.classList.toggle('dark-mode');\r\n        });\r\n    };\r\n\r\n    return { addShowFormListener, darkLightToggleListener, addDeleteBookListener, addStatusReadListener, addCloseFormListener, addSaveBookListener };\r\n})();\r\n\r\n\r\n\r\nconst firstLoad = () => {\r\n    displayController.reloadLibrary();\r\n    listenersController.darkLightToggleListener();\r\n    listenersController.addShowFormListener();\r\n    listenersController.addCloseFormListener();\r\n    listenersController.addSaveBookListener();\r\n\r\n\r\n    // const titleInput = document.getElementById(\"title\");\r\n    // const titleErrorMessage = document.querySelector(\"#title + .error-message\");\r\n\r\n    // titleInput.addEventListener(\"invalid\", (e) => {\r\n    //     titleErrorMessage.innerHTML = \"Error title!!\";\r\n    // });\r\n\r\n    // titleInput.addEventListener(\"valid\", (e) => {\r\n    //     titleErrorMessage.innerHTML = \"\";\r\n    // });\r\n\r\n};\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (firstLoad);\r\n\r\n\n\n//# sourceURL=webpack://library/./src/Gui.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Gui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Gui */ \"./src/Gui.js\");\n\r\n\r\n\r\n(0,_Gui__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n\n\n//# sourceURL=webpack://library/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;