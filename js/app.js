/**
 * Get a reference to the <tbody> element, clear its existing content, and then
 * for each book call renderBook()to create a table row, appending it to the <tbody>
 * element.
 * @param {*} book_list should be a list, each item in is is a map.
 */
function renderBooks(book_list) {
    //select the <tbody> element
    var tbody = document.querySelector("tbody");

    //clear any existing content in the body
    tbody.textContent = "";

    //for each element in the array, render that person record as a <tr> with <td>s
    //and append it to the <tbody>
    for (var idx = 0; idx < book_list.length; idx++) {
        var book = book_list[idx];
        tbody.appendChild(renderBook(book));
    }
}

/**
 * create and return a new <tr> element, using renderBookProp() to 
 * create elements for the title, revenue, and rating properties and appending them 
 * to the <tr>
 * @param {*} book should be a map, each element represents a cell in a table
 */
function renderBook(book) {
    //create the <tr> element
    var tr = document.createElement("tr");

    //create and append the <td> elements
    tr.appendChild(renderBookProp(book.title, true));
    tr.appendChild(renderBookProp(book.author, true));
    tr.appendChild(renderBookProp(book.year, false));
    //tr.appendChild(renderBookProp(book.year, false));
    //return the table row to the caller
    return tr;
}

/**
 * renderBookProp() create and return a new <td> element, 
 * set its contents to the value parameter, and if nonNumeric is true,
 * add the CSS style class non-numeric
 * @param {*} content can be a string
 * @param {*} nonNumeric a boolean type
 */
function renderBookProp(content, nonNumeric) {
    //create the new <td> element
    var td = document.createElement("td");

    //set its text content to the provided value
    td.textContent = content;

    //if it should be formatted as numeric...
    if (nonNumeric) {
        //add the "non-numeric" style class
        td.classList.add("non-numeric");
    }

    //return the new element to the caller
    return td;
}



//sort the books' year in discending order.
BOOKS.sort(function(firstBook, secondBook) {
    return secondBook.year - firstBook.year;
});
//list all books on the web page
renderBooks(BOOKS)

//Enable filter functions
var searchInput = document.getElementById("movie-filter");
searchInput.addEventListener('input',function(){
    var userInput = searchInput.value.toLowerCase()
    let containedInBookTitlesBook = BOOKS.filter(book => book.title.toLowerCase().indexOf(userInput) != -1);
    renderBooks(containedInBookTitlesBook)
})