---
hide:
  - toc
---

<h1 id="title">Connect</h1>
<!-- two buttons to toggle between gallery view and tag view -->
<span class="btn btn-on" onclick="window.location.href = '../'">
	gallery view
</span>
<span class="btn btn-off" onclick="window.location.href = 'tags'">
	tag view
</span>

<div class="gallery"></div> 

<script>

// --------------------------------	//
//                            		//
//	  Initialize			    	//
//                            		//
// -------------------------------- //

let section = 'connect'

function init(){

	// --------------------------------	//
	// Loop through project data		//
	// -------------------------------- //
	counter = 0;

	// filter data by tag, default is all
	let tag = urlParams.get('tag');
	if (tag) {
		document.querySelector('.gallery').innerHTML = '';
		data[section].values.forEach(function(row) {
			let tags = row[6].split(',');
			if (tags.map(function(x) { return x.trim() }).includes(tag)) {
				addGalleryItem(row,counter);
			}
			counter++;
		});
	} else {
		data[section].values.forEach(function(row) {
			addGalleryItem(row,counter);
			counter++;
		});
	}

}

</script>