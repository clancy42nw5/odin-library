function literature() {
}

literature.prototype.printInfo = function() {
    return(`${this.name} by ${this.author}, ${this.pages} pages. ${this.read}.`);
}

function book(name, author, pages) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = "Have you read it?";
}

book.prototype = Object.create(literature.prototype)

const theHobbit = new book("The Hobbit", "J.R.R. Tolkien", 310)
const Ametora = new book("Ametora", "W. David Marx", 296)
const ninaSimonesGum = new book("Nina Simone's Gum", "Warren Ellis", 250)

let myLibrary = [];

myLibrary.push(theHobbit);
myLibrary.push(Ametora);
myLibrary.push(ninaSimonesGum);

//Adds a new book to the beginning of the library array

function addToLibrary(name, author, pages) {
    const x = new book(name, author, pages);
    myLibrary.unshift(x);
}

addToLibrary("The Princess Bride", "William Goldman", 400)

//every book div within the book container. These display the books.

const bookOne = document.getElementById('book1');
const bookTwo = document.getElementById('book2');
const bookThree = document.getElementById('book3');
const bookFour = document.getElementById('book4');
const bookFive = document.getElementById('book5');
const bookSix = document.getElementById('book6');
const bookSeven = document.getElementById('book7');
const bookEight = document.getElementById('book8');
const bookNine = document.getElementById('book9');
const bookTen = document.getElementById('book10');
const bookEleven = document.getElementById('book11');
const bookTwelve = document.getElementById('book12');

//fills the booksContainer with books. Must be used after every book addition
//otherwise nothing new will be displayed

function populateLibrary() {
    bookOne.textContent = myLibrary[0]?.printInfo();
    bookTwo.textContent = myLibrary[1]?.printInfo();
    bookThree.textContent = myLibrary[2]?.printInfo();
    bookFour.textContent = myLibrary[3]?.printInfo();
    bookFive.textContent = myLibrary[4]?.printInfo();
    bookSix.textContent = myLibrary[5]?.printInfo();
    bookSeven.textContent = myLibrary[6]?.printInfo();
    bookEight.textContent = myLibrary[7]?.printInfo();
    bookNine.textContent = myLibrary[8]?.printInfo();
    bookTen.textContent = myLibrary[9]?.printInfo();
    bookEleven.textContent = myLibrary[10]?.printInfo();
    bookTwelve.textContent = myLibrary[11]?.printInfo();
}

//Allows the user to remove books from the library, shifting the array

const removeButtons = document.querySelectorAll('.removeButton');
removeButtons.forEach((button) => {
    button.addEventListener('click', () => {
        x = button.id;
        myLibrary.splice(x, 1);
        populateLibrary();
    });
});

//Toggles the "have read" property of the book object

const readButtons = document.querySelectorAll('.readButton');
readButtons.forEach((button) => {
    button.addEventListener('click', () => {
        x = button.id;
        if (myLibrary[x].read == "Read it") {
            myLibrary[x].read = "Not read";
        } else {
            myLibrary[x].read = "Read it";
        }
        populateLibrary();
    });
});

//newBookButton displays the new book form.
//bookForm allows the user to input a new book.

const newBookButton = document.querySelector('.newBookButton');
const bookForm = document.getElementById('bookForm');

newBookButton.addEventListener('click', () => {
    bookForm.classList.remove('hidden');
});

bookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    a = bookForm.elements['title'];
    b = bookForm.elements['author'];
    c = bookForm.elements['pages'];
    addToLibrary(a.value, b.value, c.value);
    populateLibrary();
})

//begins the script by populating the library

populateLibrary();