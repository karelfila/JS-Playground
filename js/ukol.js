const books = [
    { id: 1, title: 'Hobit', author: 'J.R.R. Tolkien', genre: 'fantasy', price: 250 },
    { id: 2, title: '1984', author: 'George Orwell', genre: 'sci-fi', price: 180 },
    { id: 3, title: 'Válka a mír', author: 'Lev Nikolajevič Tolstoj', genre: 'historical', price: 450 },
    { id: 4, title: 'Kytice', author: 'Karel Jaromír Erben', genre: 'poetry', price: 150 },
    { id: 5, title: 'Dune', author: 'Frank Herbert', genre: 'sci-fi', price: 280 },
    { id: 5, title: 'Dune2', author: 'Frank Herbert', genre: 'sci-fi', price: 280 }
];



// Vytvořte seznam názvů knih, které stojí více než 200 korun.

let booksThatCostMoreThan200 = books.filter(book => book.price > 200)
console.log(booksThatCostMoreThan200 = booksThatCostMoreThan200.map(booksThatCostMoreThan200 => booksThatCostMoreThan200.title))




//Vypočtěte průměrnou cenu knihy v kategorii "sci-fi".

function scifiAvg(books) {
    let priceScifiTotal = 0
    let counter = 0

    books.forEach(book => {
        if(book.genre === "sci-fi") {
            priceScifiTotal += book.price;
            counter++
        }
    })
    return priceScifiTotal / counter;
}

console.log(scifiAvg(books))



//Vytvořte nový seznam knih, kde je cena každé knihy snížena o 10%.

let discountedBooks = books.map(book => ({ ...book, price: book.price * 0.9 }));

console.log(discountedBooks)




//Seřazení knih podle ceny od nejvyšší k nejnižší

let booksSortedByPrice = books.slice().sort((a, b) => b.price - a.price);

console.log(booksSortedByPrice)




//Počet knih s více než 3 slovy v názvu

let longTitleBooks = books.filter(book => book.title.split(' ').length > 3).length;

console.log(longTitleBooks)




//Bonus: Vytvořte funkci, která pro danou kategorii vrátí nejdražší knihu.

function findMostExpensiveBookByGenre(genre) {

    let priceTotal = 0
    let counter = 0

    let genreBooks = books.filter(book => book.genre === genre)

    genreBooks.forEach(genreBook => {
        priceTotal += genreBook.price;
        counter++;
    })

    return priceTotal/counter;
}