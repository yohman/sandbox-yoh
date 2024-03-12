---
hide:
  - navigation
  - toc
---

<div class="gallery"></div> 

<script>
// get url params and check if door is one of them
var urlParams = new URLSearchParams(window.location.search);
if(urlParams.has('gamified')) {
	alert("You have chosen the gamified version!");
}

let section = 'work'

function init(){

	counter = 0;
	data.work.values.forEach(function(row) {
		let galleryItem = document.createElement('div');
		galleryItem.className = 'gallery-item';

		let link = document.createElement('a');
		link.href = 'projects/?id='+counter; 
		counter++;

		let img = document.createElement('img');
		img.src = '../'+section+'/images/'+row[4]; // Assuming the first column in the sheet is the image name
		img.alt = row[1]; // Assuming the third column in the sheet is the alt text

		let caption = document.createElement('div');
		caption.className = 'caption';
		caption.innerHTML = row[0]+'<br>'+row[1]; 
		
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

		link.appendChild(img);
		link.appendChild(caption);
		galleryItem.appendChild(link);

		// tags
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

				tagContainer.appendChild(tagItem);
			});

			// galleryItem.appendChild(tagContainer);
			document.querySelector('.gallery').appendChild(tagContainer);
		}

	});
}

</script>