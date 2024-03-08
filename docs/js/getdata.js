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

const sheetNames = ['work', 'learn', 'team'];
const spreadsheetId = '1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0';
const apiKey = 'AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';
let data = {};

// Function to fetch data from a specific sheet
async function fetchData(sheetName) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${sheetName}?key=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    // get rid of first row 
    data.values.shift();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}

// Function to check if data is fetched from all sheets
async function checkAndInit() {
  const promises = sheetNames.map(sheetName => fetchData(sheetName));
  const results = await Promise.all(promises);

  // Check if data is fetched from all sheets
  const allDataFetched = results.every(result => result !== null);

  if (allDataFetched) {
    // console.log('Data fetched from all sheets:', results);
    // put the data in an object
    results.forEach((result, index) => {
      data[sheetNames[index]] = result;
    });
    console.log('Data object:', data);

    init();
  } else {
    console.log('Failed to fetch data from one or more sheets.');
  }
}


// Call the function to fetch data from all sheets and initialize if successful
checkAndInit();











// // get current url to find out what page we are on
// const fullUrl = window.location.href;
// console.log(fullUrl);


// // fetch data from three different google sheets with the same id but different sheet names (work, learn, connect), then run init function

// const sheets = ['work', 'learn', 'connect']

// // fetch data from google sheets
// sheets.forEach(sheet => {
//     const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0/values/'+sheet+'?key=AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';
//     fetch(apiUrl)
//     .then(response => {
//         // Check if the response status is OK (200)
//         if (!response.ok) {
//         throw new Error('Network response was not ok');    
//         }
//         // Parse the response as JSON
//         return response.json();
//     })    
//     .then(data => {
//         // Handle the JSON data here
//         window[sheet] = data.values
//         // get rid of first row
//         window[sheet].shift()
//         console.log(window[sheet])
//         init()
//     })    
//     .catch(error => {
//         // Handle errors
//         console.error('Fetch error:', error);
//     });    
// }    








// // const section = fullUrl.split('/')[3];


// console.log('section: ',section);

// const sheetname = section
// const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0/values/'+sheetname+'?key=AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';

// let sectionData = null;

// // Use the fetch function to make a GET request
// fetch(apiUrl)
// .then(response => {
//     // Check if the response status is OK (200)
//     if (!response.ok) {
//     throw new Error('Network response was not ok');    
//     }
//     // Parse the response as JSON
//     return response.json();
// })    
// .then(data => {
//     // Handle the JSON data here
//     sectionData = data.values
//     // get rid of first row
//     sectionData.shift()
//     console.log(sectionData)
//     init()

// })    
// .catch(error => {
//     // Handle errors
//     console.error('Fetch error:', error);
// });    
