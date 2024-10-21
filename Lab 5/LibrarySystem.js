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
function testlibrary(){
    const book1 = createBook("Harry Potter and the Goblet of Fire", "J.K. Rowling", 2000, 10.99);
    const book2 = createBook("Harry Potter and the Order of the Phoenix", "J.K. Rowling", 2003, 25.00);
    const book3 = createBook("A Dance with Dragons", "George R. R. Martin", 2011, 9.99);
    
    const myLibrary = createLibrary();
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);
    
    const totalValue = myLibrary.getTotalValue();
    console.log(`Total value of all books: $${totalValue.toFixed(2)}`);
    
    const searchedBook = myLibrary.findBook("Harry Potter and the Goblet of Fire");
    console.log(searchedBook.getBookInfo());
    myLibrary.removeBook("Harry Potter and the Order of the Phoenix");

    const newTotalValue = myLibrary.getTotalValue();
    console.log(`New total value after removing a book: $${newTotalValue.toFixed(2)}`);
    
    book1.setDiscount(0.40);
    
    const totalValueAfterDiscount = myLibrary.getTotalValue();
    console.log(`Total value after applying discount: $${totalValueAfterDiscount.toFixed(2)}`);

}

testlibrary();