---
hide:
#   - navigation
  - toc
---



<div class="gallery">

</div>




<script>

	const apiUrl = 'https://sheets.googleapis.com/v4/spreadsheets/1bQDVVO-R3tt99eR7ageBYu5XK8lnnlxHZLzJghYSLa0/values/team?key=AIzaSyAUi4KazffmDZV_dQUnMUKA1jJt4i0mqlU';

	let sheet = null;

	// Use the fetch function to make a GET request
	fetch(apiUrl)
	.then(response => {
		// Check if the response status is OK (200)
		if (!response.ok) {
		throw new Error('Network response was not ok');
		}
		// Parse the response as JSON
		return response.json();
	})
	.then(data => {
		// Handle the JSON data here
		sheet = data.values
		console.log(sheet)
		sheet2 = []
		id = 0
		sheet.forEach(function(element){
			if(id>0)
			{
				element.unshift(id)
				sheet2.push(element)
			}
			id++
		})
		// console.log(sheet2)
		sheet.shift();
		init()
		console.log(sheet);

	})
	.catch(error => {
		// Handle errors
		console.error('Fetch error:', error);
	});


	function init(){
		sheet2.forEach(function(row) {
			let galleryItem = document.createElement('div');
			galleryItem.className = 'gallery-item';

			let link = document.createElement('a');
			link.href = row[2]; // Assuming the second column in the sheet is the URL

			let img = document.createElement('img');
			img.src = row[5]; // Assuming the first column in the sheet is the image name
			img.alt = row[1]; // Assuming the third column in the sheet is the alt text

			let caption = document.createElement('div');
			caption.className = 'caption';
			caption.innerHTML = row[1]+'<br>'+row[2]; 
			
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

			document.querySelector('.gallery').appendChild(galleryItem);
		});
	}


</script>