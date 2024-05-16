class Cart {
    constructor(userId) {
      this.userId = userId;
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
    }
  
    removeBook(isbn) {
      this.books = this.books.filter(book => book.isbn !== isbn);
    }
  
    calculateTotal() {
      return this.books.reduce((total, book) => total + book.price, 0);
    }
  }
  
  module.exports = Cart;