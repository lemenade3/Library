let myLibrary = [
    {
        name : "The Hobbit",
        author : "J.R.R Tolkien",
        pages : 300,
        read : true,
    },
    {
        name : "Harry Potter",
        author : "J.K Rowling",
        pages : 564,
        read : true,
    },
    {
        name : "Frankestein",
        author : "Mary Shelley",
        pages : 274,
        read : false,
    }
];

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addToLibrary(name) {
    name = document.querySelector('#name').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
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

let removeButton;

function displayLibrary () {
    library.textContent = '';
    for (let i = 0; i < myLibrary.length; i++) {
        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', myLibrary[i])

        removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.textContent = "x";

        removeButton.addEventListener('click', function () {
            myLibrary.splice(myLibrary[i], 1);
            displayLibrary();
        });

        const storedName = document.createElement('div');
        storedName.setAttribute('class', 'storedName');
        storedName.textContent = myLibrary[i].name;

        const storedAuthor = document.createElement('div');
        storedAuthor.setAttribute('class', 'storedAuthor');
        storedAuthor.textContent = myLibrary[i].author;

        const storedPages = document.createElement('div');
        storedPages.setAttribute('class', 'storedPages');
        storedPages.textContent = `Pages: ${myLibrary[i].pages}`;

        const storedRead = document.createElement('input');

        const switchLabel = document.createElement('label');
        switchLabel.setAttribute('class', 'switch');

        const sliderRound = document.createElement('span');
        sliderRound.setAttribute('class', 'slider round');

        storedRead.setAttribute('type', 'checkbox');
        storedRead.setAttribute('class', 'storedRead');

        const checkRead = myLibrary[i].read;
        storedRead.checked = checkRead;

        switchLabel.append(storedRead, sliderRound);

        card.append(removeButton, storedName, storedAuthor, storedPages, switchLabel);
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
    read.checked = false;
});

displayLibrary();
