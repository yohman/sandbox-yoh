// get current url to find out what page we are on
const fullUrl = window.location.href;
console.log(fullUrl);
// get the section name from the url, which is the first part of the url after the domain
const section = fullUrl.split('/')[3];
console.log('section: ',section);

const sheetname = section
const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0/values/'+sheetname+'?key=AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';

let sectionData = null;

// Use the fetch function to make a GET request
fetch(apiUrl)
.then(response => {
    // Check if the response status is OK (200)
    if (!response.ok) {
    throw new Error('Network response was not ok');
    }
    // Parse the response as JSON
    return response.json();
})
.then(data => {
    // Handle the JSON data here
    sectionData = data.values
    // get rid of first row
    sectionData.shift()
    console.log(sectionData)
    init()

})
.catch(error => {
    // Handle errors
    console.error('Fetch error:', error);
});

// Function to get URL parameters
function getUrlParams() {
	var params = {};
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	urlParams.forEach(function(value, key) {
	  params[key] = value;
	});
	return params;
}

