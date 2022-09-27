let myLibrary = [];

let serial = 0

class Book {
    constructor(name, author, pages, read, serial) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.serial = serial
    }
};

let modal = document.querySelector('#cardModal');

let addBook = document.querySelector('#newCard');
addBook.addEventListener('click', function() {
    modal.style.display = 'block';
});

let span = document.querySelector('.close');
span.addEventListener('click', function () {
    modal.style.display = 'none';
});

let commitCard = document.querySelector('#commitCard');
commitCard.addEventListener('click', function () {
    validate();
});

function validate() {
    let name = document.querySelector('#name');
    if (name.validity.valueMissing) {
        name.setCustomValidity("Please fill in the book's Name")
        name.reportValidity();
    } else {
        name.setCustomValidity("")
    }

    let author = document.querySelector('#author');
    if (author.validity.valueMissing) {
        author.setCustomValidity("Please fill in the book's Author")
        author.reportValidity();
    } else {
        author.setCustomValidity("")
    }

    let pages = document.querySelector('#pages');
    if (pages.validity.valueMissing) {
        pages.setCustomValidity("Please fill in how many pages this book has")
        pages.reportValidity();
    } else if (pages.validity.rangeUnderflow) {
        pages.setCustomValidity("If there is less than one page, it's not really a book")
        pages.reportValidity();
    } else {
        pages.setCustomValidity("")
    }

    if (name.validity.valid && author.validity.valid && pages.validity.valid) {
        commit();
    };
};

function clearInputs() {
    document.querySelector('#name').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pages').value = ''
    document.querySelector('#read').checked = false
}

function commit() {
    let book = new Book(document.querySelector('#name').value, document.querySelector('#author').value, document.querySelector('#pages').value, document.querySelector('#read').checked, serial)
    myLibrary.push(book)
    serial += 1;
    console.log(serial)
    displayLibrary();
    clearInputs()
    modal.style.display = 'none';
}

function displayLibrary () {
    document.querySelector('#library').innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        writeBook(myLibrary[i]);
    };
};

function writeBook(book) {
    const library = document.querySelector('#library');

    const card = document.createElement('div');
        card.setAttribute('class', 'card');

        let removeButton = document.createElement('button');
        removeButton.setAttribute('class', 'removeButton');
        removeButton.textContent = 'Delete';
        removeButton.addEventListener('click', () => {
            for (let i = 0; i < myLibrary.length; i++) {
                if (myLibrary[i].serial === book.serial) {
                    myLibrary.splice(i, 1);
                }
            }
            displayLibrary();
        });

        const storedName = document.createElement('div');
        storedName.setAttribute('class', 'storedName');
        storedName.textContent = book.name;

        const storedAuthor = document.createElement('div');
        storedAuthor.setAttribute('class', 'storedAuthor');
        storedAuthor.textContent = book.author;

        const storedPages = document.createElement('div');
        storedPages.setAttribute('class', 'storedPages');
        storedPages.textContent = `Pages: ${book.pages}`;

        const storedRead = document.createElement('input');
        storedRead.setAttribute('type', 'checkbox');
        storedRead.setAttribute('class', 'storedRead');
        storedRead.checked = book.read;
        storedRead.addEventListener('change', () => {
            book.read = storedRead.checked;
        });

        const switchLabel = document.createElement('label');
        switchLabel.setAttribute('class', 'switch');

        const sliderRound = document.createElement('span');
        sliderRound.setAttribute('class', 'slider round');

        const topCard = document.createElement('div');
        topCard.setAttribute('class', 'topCard')
        topCard.append(storedName, removeButton);

        switchLabel.append(storedRead, sliderRound);

        card.append(topCard, storedAuthor, storedPages, switchLabel);
        library.append(card);
}

