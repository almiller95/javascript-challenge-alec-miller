// Using the UFO dataset provided in the form of an array of JavaScript objects, 
// write code that appends a table to your web page and then adds new rows 
// of data for each UFO sighting.

// Make sure you have a column for: 
// date/time, city, state, country, shape, and comment at the very least.

var table = d3.select("#ufo-table");
var tbody = d3.select("tbody");
var thead = d3.select("thead")

// using for each and arrow functions to pull in the data
data.forEach((observation) => {
    var row = tbody.append("tr");
    Object.entries(observation).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
});


// creating function to clear the contents of the table
var tr_clear = d3.selectAll("tr")
function clearTR() {
    tr_clear.remove()
};

// creating function to add in table headers, they get removed in the above step
var headerArray = ['Date','City','State','Country','Shape','Duration','Comments']
function addTheadTr() {
    var row = thead.append("tr");
    headerArray.forEach(x => {
        var cell = row.append("th");
        cell.text(x)
    })
}

// Use a date form in your HTML document and write JavaScript code that will listen 
// for events and search through the date/time column to find rows that match user input.

// Select the button
var button = d3.select("#filter-btn");
// Select the form
var form = d3.select("#form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);


function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    
    // clearing table row contents and adding back in headers
    // clearTR();
    tr_all = d3.selectAll("tr")
    tr_all.remove()
    addTheadTr();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);

    // applying filter to only show input date data
    var filtered_data = data.filter(x => x.datetime === inputValue)
    console.log(filtered_data)
    

    // pulling in data over filtered results
    filtered_data.forEach((observation) => {
        var row = tbody.append("tr");
        Object.entries(observation).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
    });

}



