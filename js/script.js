/*

scrum 

review of SDLC
software development life cycle

plan
requirement analysis
design
develop
test
deploy
maintenence

common software development lifecyble models:
waterfall
v-model
spiral
*agile - can not be called *** on its own

------

scrum framework 
popular framewek project for managment
scrum is an agile framewoek
scrum consist of some roles and tools for managing projects

the scrum roles 
stakolder 
product owner
scrum master
development team

the scrum artefacts
product backlog - list of all the tasks that need to be done
sprint backlog - one sircle, set some tasks for the sprint, list of smaller tasks that need to be done 
increment - 


the scrum ceremonies
srpint planing - meeting what kinds of tasks what kind of tools
daily scrum - talk everyday about todays task, what have been achieved so far
sprint review - when the prototype is ready you and stakeholder/customer "we have this and that, what do you think?" feedback
sprint retrospective - before starting the new sprint the team gather talk about tools, tasks, problems and what to improve


scrum terms
sprint - is time-boxed to one month or less 2 weeks thatserve as a container for the other avtivities
burn down chart - show the amount of work that need to be done
burn up chart - is the oposite, shows the work that have been done


---------------------------------------------------------------------------------------------------------------
*/

const books = [];
const audioBooks = [];


// SELECTING THE ELEMENTS FROM THE DOM

const bookForm = document.querySelector('.book-form');

const title = document.querySelector('.title');
const author = document.querySelector('.author');
const selectElement = document.querySelector('.format');
const isbn = document.querySelector('.isbn');
const narrator = document.querySelector('.narrator');




// ADDING THE EVENT LISTENERS

selectElement.addEventListener('change', () => {
	if(selectElement.value === 'physical') {
		narrator.setAttribute('disabled', '');
		isbn.removeAttribute('disabled');
	} else {
		isbn.setAttribute('disabled', '');
		narrator.removeAttribute('disabled');
	}
});

// e = event
bookForm.addEventListener('submit', (e) =>{
	e.preventDefault();
	let newBook;
	if(selectElement.value === 'physical'){
		newBook = new Book(title.value, author.value, selectElement.value, isbn.value)
	} else {
		newBook = new AudioBook(title.value, author.value, selectElement.value, narrator.value)
	}
	Book.addBook(newBook);
	console.log(newBook);
	console.log(books);
	console.log(audioBooks);
}) 


// DECLARING THE BOOK CLASS

class Book {
	constructor(title, author, format, isbn) {
		this.title = title;
		this.author = author;
		this.format = format;
		this.isbn = isbn;
		this.ID = Date.now();
	}
	static addBook(book){
		if(book.format === 'physical') {
			books.push(book)
		} else {
			audioBooks.push(book)
		}
	}
}


// DECLARING THE AUDIO BOOK CLASS (extends betyr at den arver fra forelderen Book)
// super = de man vil den skal arve

class AudioBook extends Book {
	constructor(title, author, format, narrator) {
		super(title, author, format);
		this.narrator = narrator;
		this.ID = Date.now();
	}
}