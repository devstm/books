let submit_button = document.getElementById('submit');
let title = document.getElementById('title');
let author = document.getElementById('author');
let image = document.getElementById('image');
let books = [];
let ather_books = [
    {
        title: 'kill shot',
        author: 'Zora modern',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png'
    },
    {
        title: 'night family',
        author: 'sadeek ghannam',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png',
    },
    {
        title: 'sad man',
        author: 'saleh tayseer',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png',
    },
    {
        title: 'tomorrow will be change',
        author: 'samah al haj',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png',
    },
    {
        title: 'soon as better',
        author: 'samanta mazareety',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png'
    },
    {
        title: 'my name is window',
        author: 'window sleem',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png',
    },
    {
        title: 'today Ill speak',
        author: 'soran mohd',
        image: 'https://upload.wikimedia.org/wikipedia/en/f/fb/Le_Livre_d%27image.png',
    },
];
let book = {
    title: '',
    author: '',
    image
};
for (let i in ather_books) {
    addToGridAther(ather_books[i]);
}

submit_button.addEventListener('click', function (e) {
    e.preventDefault();
    book.title = title.value;
    book.author = author.value;
    book.image = image.value;
    console.log(image.value);
    books.push(book);
    addToGrid(book);
});

function addToGrid(book) {
    let image_path = image.value;
    let words = image_path.split('\\');
    let shelves = document.querySelector('.shelves');
    shelves.innerHTML += `
       <div class="book-card">
            <img src="/Users/SALOOH/Desktop/GSG/Javascript/src/images/${words[2]}" alt="images" class="book-image">
            <h3 class="book-title">${book.title}</h3>
            <h5 class="book-author">${book.author}</h5>
        </div>
    `
}

function addToGridAther(book) {
    let shelves = document.querySelector('.shelves');
    shelves.innerHTML += `
       <div class="book-card">
            <img src="${book.image}" alt="images" class="book-image">
            <h3 class="book-title">${book.title}</h3>
            <h5 class="book-author">${book.author}</h5>
        </div>
    `
}
