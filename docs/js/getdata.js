
const sheetname = 'workshops'
const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0/values/'+sheetname+'?key=AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';

let workshops = null;

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
    workshops = data.values
    // get rid of first row
    workshops.shift()
    console.log(workshops)
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

