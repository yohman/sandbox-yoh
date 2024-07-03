---
hide:
  - navigation
  - toc
---

<h1 id="title">Learn</h1>

<!-- add a search box -->
<input type="text" id="search" class="search" onkeyup="search()" placeholder="Search for projects..">

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

let section = 'learn'

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

	// create the search function
	window.search = function() {
		let input, filter, ul, li, a, i, txtValue;
		input = document.getElementById('search');
		filter = input.value.toUpperCase();
		li = document.querySelectorAll('.gallery-container');
		for (i = 0; i < li.length; i++) {
			a = li[i].getElementsByTagName('a')[0];
			txtValue = a.textContent || a.innerText;
			if (txtValue.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = '';
			} else {
				li[i].style.display = 'none';
			}
		}
	}	
	

}

</script>