---
hide:
  - navigation
---

<h1 id="title">Connect Tags</h1>
<!-- two buttons to toggle between gallery view and tag view -->
<span class="btn btn-off" onclick="window.location.href = '../'">
	gallery view
</span>
<span class="btn btn-on">
	tag view
</span>


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

let section = 'connect'
let tags = [];

function init(){

	data[section].values.forEach(function(row) {
		// if row is not undefined
		if (row[6] != undefined) {
			let tagList = row[6].split(',');
			tagList.forEach(function(tag) {
				tags.push(tag.trim());
			});
		}
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


</script>