const createBook = (title, author, yearPublished, price) => {
    return {
        title: title,
        author: author,
        yearPublished: yearPublished,
        price: price,

        getBookInfo() {
            return `${this.title}, by ${this.author}, published in ${this.yearPublished}`;
        },

        setDiscount(discount) {
            this.price = this.price * (1 - discount);
        }
    }
}

const createLibrary = (books) => {
    return {
        books: books || [],

        addBook(book) {
            this.books.push(book); 
        },

        removeBook(title) {
            this.books = this.books.filter(book => book.title !== title);
        },
        findBook(title) {
            return this.books.find(book => book.title === title);
        },
        getTotalValue() {
            let total = 0;
            for (let i = 0; i < this.books.length; i++) {
                total += this.books[i].price;
            }
            return total;
        }
    }
}
