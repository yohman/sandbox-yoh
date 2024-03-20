---
hide:
  - navigation
---
<div class="btn btn-primary" onclick="window.location.href = '../'">
	gallery view
</div>

<div class="tag-gallery"></div> 

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
let tags = [];

function init(){

	data.work.values.forEach(function(row) {
		let tagList = row[6].split(',');
		tagList.forEach(function(tag) {
			tags.push(tag.trim());
		});
	});
	// --------------------------------	//
	// Loop through project data		//
	// -------------------------------- //
	counter = 0;


	// --------------------------------	//
	// Add tags							//
	// -------------------------------- //
	// add count to tags


	 

	distinct_tags = tags.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
	distinct_tags.forEach(function(tag) {
		createTagDiv(tag);

	});

	
}

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
			workIndex = currentUrl.indexOf('/work/');
			// use substring to get the url of the work page and add the tag parameter
			window.location.href = currentUrl.substring(0, workIndex+6) + '?tag='+tag;
		}
		// set cursor to pointer
		tagItem.style.cursor = "pointer";
		document.querySelector('.tag-gallery').appendChild(tagItem);}

</script>