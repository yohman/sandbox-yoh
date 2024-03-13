---
hide:
  - navigation
---

<div class="gallery"></div> 

<script>

// --------------------------------	//
//                            		//
//	  Gamefied version		    	//
//                            		//
// -------------------------------- //
var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('gamified')) {
	alert("Congratulations! You have chosen the gamified version! This is still under (secret) development, so stay tuned!");
}

// --------------------------------	//
//                            		//
//	  Initialize			    	//
//                            		//
// -------------------------------- //

let section = 'work'

function init(){

	// --------------------------------	//
	// Loop through project data		//
	// -------------------------------- //
	counter = 0;

	// filter data by tag, default is all
	let tag = urlParams.get('tag');
	if (tag) {
		document.querySelector('.gallery').innerHTML = '';
		data.work.values.forEach(function(row) {
			let tags = row[6].split(',');
			if (tags.map(function(x) { return x.trim() }).includes(tag)) {
				addGalleryItem(row,counter);
			}
			counter++;
		});
	} else {
		data.work.values.forEach(function(row) {
			addGalleryItem(row,counter);
			counter++;
		});
	}

	// --------------------------------	//
	// Add tags							//
	// -------------------------------- //
	// let tags = [];
	// data.work.values.forEach(function(row) {
	// 	let tagList = row[6].split(',');
	// 	tagList.forEach(function(tag) {
	// 		tags.push(tag.trim());
	// 	});
	// });
	// tags = tags.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
	// tags.forEach(function(tag) {
	// 	let tagItem = document.createElement('span');
	// 	tagItem.className = 'tag';
	// 	tagItem.textContent = tag;
	// 	tagItem.onclick = function() {
	// 		window.location.search = '?tag='+tag;
	// 	}
	// 	// set cursor to pointer
	// 	tagItem.style.cursor = "pointer";
	// 	document.querySelector('.gallery').appendChild(tagItem);
	// });
}

// --------------------------------	//
// Add gallery item					//
// -------------------------------- //
function addGalleryItem(row,counter) {

	// --------------------------------	//
	// gallery item						//
	// -------------------------------- //
	let galleryItem = document.createElement('div');
	galleryItem.className = 'gallery-item';

	// link
	let link = document.createElement('a');
	link.href = 'project/?id='+counter; 
	// counter++;

	// image
	let img = document.createElement('img');
	img.src = '../'+section+'/images/'+row[4]; // Assuming the first column in the sheet is the image name
	img.alt = row[1]; // Assuming the third column in the sheet is the alt text

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
	galleryItem.appendChild(link);

	// --------------------------------	//
	// tags								//
	// -------------------------------- //
	document.querySelector('.gallery').appendChild(galleryItem);
	let tags = row[6]; // Assuming the ninth column in the sheet contains the tags
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
		document.querySelector('.gallery').appendChild(tagContainer);
	}
}

</script>