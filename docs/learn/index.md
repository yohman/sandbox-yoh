---
hide:
  - navigation
  - toc
---

<div class="gallery">
	
</div> 


<script>


function init(){
	counter = 0;
	data.learn.values.forEach(function(row) {

		// create a container for the gallery item and gallery tags
		let galleryContainer = document.createElement('div');
		galleryContainer.className = 'gallery-container';

		// --------------------------------	//
		// gallery item						//
		// -------------------------------- //
		let galleryItem = document.createElement('div');
		galleryItem.className = 'gallery-item';

		let link = document.createElement('a');
		link.href = 'workshop/?id='+counter; // Assuming the second column in the sheet is the URL
		counter++;

		let img = document.createElement('img');
		img.src = '../learn/images/'+row[4]; // Assuming the first column in the sheet is the image name
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

		galleryContainer.appendChild(galleryItem);

		// document.querySelector('.gallery-container').appendChild(galleryItem);

		// --------------------------------	//
		// tags								//
		// -------------------------------- //
		let tags = row[7]; // Assuming the ninth column in the sheet contains the tags
		if (tags) {
			let tagList = tags.split(','); // Split the tags by comma
			let tagContainer = document.createElement('div');
			tagContainer.className = 'tag-container';

			tagList.forEach(function(tag) {
				let tagItem = document.createElement('div');
				tagItem.className = 'tag';
				tagItem.textContent = tag.trim();

				tagContainer.appendChild(tagItem);
			});

			// galleryItem.appendChild(tagContainer);
			galleryContainer.appendChild(tagContainer);
			// document.querySelector('.gallery-container').appendChild(tagContainer);
		}
		document.querySelector('.gallery').appendChild(galleryContainer);
	});
}

</script>