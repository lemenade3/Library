let myLibrary = [
    {
        name : "The Hobbit",
        author : "J.R.R Tolkien",
        pages : 300,
        read : "Read",
    },
    {
        name : "Harry Potter",
        author : "J.K Rowling",
        pages : 564,
        read : "Read",
    },
    {
        name : "Frankestein",
        author : "Mary Shelley",
        pages : 274,
        read : "Not Read",
    }
];

library = document.querySelector('#library');

function Book(name, author, pages, read, description) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        let info = `${name} by ${author} has ${pages}, you have ${read} this.`;
        return info;
    };
};

function addToLibrary(name) {
    name = document.querySelector('#name').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;
    name = new Book(name, author, pages, read)
    myLibrary.push(name);
};

let modal = document.querySelector('#cardModal');

let addBook = document.querySelector('#newCard');

let span = document.querySelector('.close');

addBook.addEventListener('click', function() {
    modal.style.display = 'block';
});

span.addEventListener('click', function () {
    modal.style.display = 'none';
});

window.addEventListener('click', function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});


function displayLibrary () {
    library.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');

        const storedName = document.createElement('div');
        storedName.setAttribute('class', 'storedName');
        storedName.textContent = myLibrary[i].name;

        const storedAuthor = document.createElement('div');
        storedAuthor.setAttribute('class', 'storedAuthor');
        storedAuthor.textContent = myLibrary[i].author;

        const storedPages = document.createElement('div');
        storedPages.setAttribute('class', 'storedPages');
        storedPages.textContent = `Pages: ${myLibrary[i].pages}`;

        const storedRead = document.createElement('label');
        storedRead.setAttribute('class', 'switch');
        
        const checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        const sliderRound = document.createElement('span');
        sliderRound.setAttribute('class', 'slider round');

        const readText = document.createElement('div');
        readText.setAttribute('class', 'readText');
        readText.textContent = myLibrary[i].read;

        const readSelector = document.createElement('div');
        readSelector.setAttribute('class', 'readSelector');

        storedRead.append(checkbox, sliderRound);
        readSelector.append(readText, storedRead);

        card.append(storedName, storedAuthor, storedPages, readSelector);
        library.append(card);
    };
};

let newName = document.querySelector("#name");

let commitCard = document.querySelector('#commitCard');
commitCard.addEventListener('click', function () {
    addToLibrary();
    displayLibrary();
    modal.style.display = 'none';
    newName.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
});

displayLibrary();
