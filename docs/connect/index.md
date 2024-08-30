---
hide:
  - toc

---

<h1 id="title">Connect</h1>

<!-- add a search box -->
<input type="text" id="search" class="search" onkeyup="search()" placeholder="Search for people..">

<!-- two buttons to toggle between gallery view and tag view -->
<span class="btn btn-on" >
	gallery view
</span>
<span class="btn btn-off" onclick="window.location.href = 'tags'">
	tag view
</span>

<h2>Current</h2>
<div class="gallery-current"></div>

<h2>Past</h2>
<div class="gallery-past"></div><hr>
<!-- <div class="gallery"></div>  -->

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
	
	// divide the gallery into two sections: Current and Past
	// gallery will be determined by the value in row[2]
	// if the value is 'staff', the gallery item will be added to the current section
	// else, it will be added to the past section
	// document.querySelector('.gallery').innerHTML = '';
	// add current as a title to .gallery






	// document.querySelector('.gallery').insertAdjacentHTML('beforeend',`<h2>Current</h2>`);
	// document.querySelector('.gallery').insertAdjacentHTML('beforeend',`<div class="gallery-current" style='border:1px solid red;'>current here</div><hr>`);
	// document.querySelector('.gallery').insertAdjacentHTML('beforeend',`<h2>Past</h2>`);
	// document.querySelector('.gallery').insertAdjacentHTML('beforeend',`<div class="gallery-past" style='border:1px solid blue;'>past here</div>`);
	
	
	
	// filter data by tag, default is all
	let tag = urlParams.get('tag');
	if (tag) {
		console.log('tag found');
		data[section].values.forEach(function(row) {
			let status = row[2];
			let tags = row[6].split(',');
			if (tags.map(function(x) { return x.trim() }).includes(tag)) {
				if (status == 'staff') {
					addGalleryItem(row,counter,'.gallery-current')
				} else {
					addGalleryItem(row,counter,'.gallery-past')
				}
			}
			counter++;
		});
		// add the name of the tag next to the search box with an option to clear the filter
		// clear the filter by removing the tag from the url
		document.querySelector('.search').insertAdjacentHTML('afterend',` <a href="?"><span class="tag tag-filter">${tag} x</span></a>`);
		
	} else {
		console.log('no tag found');
		data[section].values.forEach(function(row) {
			let status = row[2];
			if (status == 'staff') {
				addGalleryItem(row,counter,'.gallery-current')
			} else {
				addGalleryItem(row,counter,'.gallery-past')
			}

			// addGalleryItem(row,counter);
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

			// search by project name, project description, and tags
			let txtValue = a.textContent || a.innerText;
			// search tags, which are in separate span tags of class tag
			let tags = '';
			li[i].querySelectorAll('.tag').forEach(function(tag) {
				tags += tag.textContent;
			});

			if (txtValue.toUpperCase().indexOf(filter) > -1 || tags.toUpperCase().indexOf(filter) > -1) {
				li[i].style.display = '';
			} else {
				li[i].style.display = 'none';
			}

		}
	}	

}

</script>