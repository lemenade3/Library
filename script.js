let myLibrary = [];

body = document.querySelector('body');

function Book(name, author, pages, read, description) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.description = description;
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
    let description = document.querySelector('#description').value;
    
    name = new Book(name, author, pages, read, description)
    myLibrary.push(name);
};

addBook = document.querySelector('button');

addBook.addEventListener('click', function() {
    addToLibrary();
    displayLibrary();
});

function displayLibrary () {
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
        storedPages.textContent = myLibrary[i].pages;

        const storedRead = document.createElement('div');
        storedRead.setAttribute('class', 'storedRead');
        storedRead.textContent = myLibrary[i].read;

        const storedDescription = document.createElement('div');
        storedDescription.setAttribute('class', 'storedDescription');
        storedDescription.textContent = myLibrary[i].description;

        card.append(storedName, storedAuthor, storedPages, storedRead, storedDescription);
        body.append(card);
    };
};
