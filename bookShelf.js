// Question:

Book Shelf
Create a Book constructor that has two properties:

Title
Author
and two methods:

A method named getTitle that returns: "Title: " + the instance title.
A method named getAuthor that returns: "Author: " + the instance author.
and instantiate this constructor by creating 3 new books:

Pride and Prejudice - Jane Austen(PP)
Hamlet - William Shakespeare(H)
War and Peace - Leo Tolstoy(WP)
Name the new object instances PP, H, and WP, respectively.

For instance, if I instantiated the following book using this Book constructor function:

  Harry Potter - J.K.Rowling(HP)
I would get the following properties and methods:

Examples
HP.title ➞ "Harry Potter"
HP.author ➞ "J.K. Rowling"
HP.getTitle() ➞ "Title: Harry Potter"
HP.getAuthor() ➞ "Author: J.K. Rowling"




// Answer:

function Book(title, author, getTitle) {
  // Write your properties and methods here
  this.getTitle = function () {
    return "Title: " + this.title
  };

  this.getAuthor = function () {
    return "Author: " + this.author
  };

  // this.author = function getAuthor() {
  //	return "Author: " + this.author
  // };
}

// Instantiate your Book constructor here
function Book(title, author) {
  this.title = title;
  this.author = author;
  this.getTitle = function () {
    return "Title: " + this.title
  }
  this.getAuthor = function () {
    return "Author: " + this.author
  }
}

var PP = new Book("Pride and Prejudice", "Jane Austen")
var H = new Book("Hamlet", "William Shakespeare")
var WP = new Book("War and Peace", "Leo Tolstoy")
