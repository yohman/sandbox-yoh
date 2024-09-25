// -------------------------------------------- //
// Parameters to be used in the page            //
// -------------------------------------------- //

const sheetNames = ['work', 'learn', 'connect','musings'];
const spreadsheetId = '1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0';
const apiKey = 'AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';
let data = {};

// -------------------------------------------- //
// Function to fetch data from a specific sheet //
// -------------------------------------------- //

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

// -------------------------------------------- //
// Function to check if data is                 //
// fetched from all sheets                      //
// -------------------------------------------- //
async function checkAndInit() {
	const promises = sheetNames.map(sheetName => fetchData(sheetName));
	const results = await Promise.all(promises);

	// Check if data is fetched from all sheets
	const allDataFetched = results.every(result => result !== null);

	if (allDataFetched) {
		// put the data in an object
		results.forEach((result, index) => {
			data[sheetNames[index]] = result;
		});
		console.log('Data object:', data);

		// fun init function, located in each respective page
		init();
	} else {
		console.log('Failed to fetch data from one or more sheets.');
	}
}

// -------------------------------------------- //
// Let's get it rolling				            //
// -------------------------------------------- //
checkAndInit();

// --------------------------------	//
//                            		//
//	  Gamefied version		    	//
//                            		//
// -------------------------------- //
var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('gamified')) {
	alert("Congratulations! You have chosen the gamified version! This is still under (secret) development, so stay tuned!");
}

// -------------------------------------------- //
// Add gallery item								//
// -------------------------------------------- //
function addGalleryItem(row,counter,selector) {

	// create a container for the gallery item and gallery tags
	let galleryContainer = document.createElement('div');
	galleryContainer.className = 'gallery-container';

	// --------------------------------	//
	// gallery item						//
	// -------------------------------- //
	let galleryItem = document.createElement('div');
	galleryItem.className = 'gallery-item';

	// link
	let link = document.createElement('a');

	// sometimes, link name is different from the section name...
	if (section == 'connect') {
		link.href = 'who/?id='+counter;
	} else if (section == 'learn') {
		link.href = 'workshop/?id='+counter;
	} else if (section == 'musings') {
		link.href = 'posts/?id='+counter;
	} else {
		link.href = 'project/?id='+counter;
	}

	// image
	// if image is not available, use the default image
	// if row[4] is undefined, use the default image
	if (row[4] == undefined || row[4] == '') {
		image_file = 'sandbox.png';
	}
	else {
		image_file = row[4];
	}

	let img = document.createElement('img');
	img.src = '../'+section+'/images/'+image_file; 
	img.alt = row[1]; 

	// caption
	let caption = document.createElement('div');
	caption.className = 'caption';
	caption.innerHTML = row[0]+'<br>'+row[1]; 
	
	// hover effect
	img.style.filter = "grayscale(100%)";
	img.onmouseover = function() {
		img.style.filter = "grayscale(0%)";
	}
	img.onmouseout = function() {
		img.style.filter = "grayscale(100%)";
	}
	caption.onmouseover = function() {
		img.style.filter = "grayscale(0%)";
	}
	caption.onmouseout = function() {
		img.style.filter = "grayscale(100%)";
	}

	// append elements
	link.appendChild(img);
	link.appendChild(caption);

	// add alt tags
	img.alt = row[0] + ' - ' + row[1];
	img.title = row[0] + ' - ' + row[1];
	galleryItem.appendChild(link);

	// append elements
	galleryContainer.appendChild(galleryItem);

	// --------------------------------	//
	// tags								//
	// -------------------------------- //
	let tags = row[6];
	if (tags) {
		let tagList = tags.split(','); // Split the tags by comma
		let tagContainer = document.createElement('div');
		tagContainer.className = 'tag-container';

		tagList.forEach(function(tag) {
			let tagItem = document.createElement('span');
			tagItem.className = 'tag';
			tagItem.textContent = tag.trim();
			// get rid of the leading and trailing white spaces
			tag = tag.trim();
			tagItem.onclick = function() {
				window.location.search = '?tag='+tag;
			}
			// add title attribute
			tagItem.title = tag;
			// set cursor to pointer
			tagItem.style.cursor = "pointer";
			tagContainer.appendChild(tagItem);
		});

		// galleryItem.appendChild(tagContainer);
		galleryContainer.appendChild(tagContainer);
	}

	// if selector argument is provided, append to the selector, otherwise, append to the gallery
	if (selector) {
		document.querySelector(selector).appendChild(galleryContainer);
	}
	else {
		document.querySelector('.gallery').appendChild(galleryContainer);
	}
}

// -------------------------------------------- //
// Create tag divs				            	//
// -------------------------------------------- //
function createTagDiv(tag) {
	let tagItem = document.createElement('div');
	tagItem.className = 'tag-round';
	// add the tag name plus the count
	tag_count = tags.filter(function(x) { return x === tag }).length;
	// if tag count is 1, make the width and height 50px, for every additional tag, multiply by 1.5
	tagItem.style.width = 80 + (tag_count-1)*40 + 'px';
	tagItem.style.height = 80 + (tag_count-1)*40 + 'px';
	
	// if tag count is 1, make the font size 6px, for every additional tag, multiply by 1.5
	tagItem.style.fontSize = 10 + (tag_count-1)*4 + 'px';
	if (tag_count > 1) {
		tagItem.textContent = tag + ' (' + tag_count + ')';
	}
	else {
		tagItem.textContent = tag;
	}
	// tagItem.textContent = tag;
	tagItem.onclick = function() {
		// get the current url, and go to the work page (one folder up) with the tag parameter
		// get the current url
		currentUrl = window.location.href;
		// find the work page
		workIndex = currentUrl.indexOf('/'+section+'/');
		// use substring to get the url of the work page and add the tag parameter
		window.location.href = currentUrl.substring(0, workIndex+section.length+2) + '?tag='+tag;
	}
	// set cursor to pointer
	tagItem.style.cursor = "pointer";
	// add title attribute
	tagItem.title = tag;
	// add alt tag
	tagItem.alt = tag;
	// add tabindex
	tagItem.tabIndex = 0;
	// add onkeypress event
	tagItem.onkeypress = function(event) {
		if (event.key === 'Enter') {
			tagItem.click();
		}
	}
	document.querySelector('.tag-gallery').appendChild(tagItem);
}

// -------------------------------------------- //
// Get URL parameters				            //
// -------------------------------------------- //
function getUrlParams() {
	var params = {};
	var queryString = window.location.search;
	var urlParams = new URLSearchParams(queryString);
	urlParams.forEach(function(value, key) {
		params[key] = value;
	});
	return params;
}
