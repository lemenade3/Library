let myLibrary = [];

class Book {
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

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

        function changeRead () {
            if (myLibrary[i].read == true) {
                myLibrary[i].read = false;
            } else if (myLibrary[i].read == false) {
                myLibrary[i].read = true;
            };
        };

        const card = document.createElement('div');
        card.setAttribute('class', 'card');
        card.setAttribute('id', i)

        removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.textContent = 'Delete';

        removeButton.addEventListener('click', function () {
            myLibrary.splice(i, 1);
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
        storedRead.addEventListener('change', function() {
            changeRead();
        });

        const checkRead = myLibrary[i].read;
        storedRead.checked = checkRead;

        const topCard = document.createElement('div');
        topCard.setAttribute('class', 'topCard')
        topCard.append(storedName, removeButton);

        switchLabel.append(storedRead, sliderRound);

        card.append(topCard, storedAuthor, storedPages, switchLabel);
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
