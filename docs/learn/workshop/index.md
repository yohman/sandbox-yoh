<h1 id="title"></h1>
<span id="secondary-title"></span>
<div id="workshop-container"></div>


<script>
// ---------------------------- //
//                            	//
//	  Function to get URL    	//
//                            	//
// ---------------------------- //
function init(){
	// Get URL parameters
	var params = getUrlParams();
	
	// Check if "val" parameter exists and set it as a variable
	var id = params["id"];
	
	// add id to the input
	if (id == undefined) {
		id = "No value found";

	}
	else
	{		
		createWorkshop(id);	
	}
}
	
function createWorkshop(id) {
	// find the workshop in the workshops array
	let workshop = data.learn.values[id];
	// add the title
	// get the h1 element title
	let title = document.getElementById('title');
	title.innerHTML = workshop[0];

	// add secondary title
	let secondaryTitle = document.getElementById('secondary-title');
	secondaryTitle.innerHTML = workshop[1];

	// create a div for the workshop
	let workshopDiv = document.createElement('div');
	workshopDiv.className = 'workshop';

	// add the youtube video
	let video = document.createElement('div');
	video.innerHTML = workshop[7];
	workshopDiv.appendChild(video);

	// add the link to the youtube video
	let link = document.createElement('a');
	link.href = workshop[5];
	link.innerHTML = "Watch on YouTube";
	workshopDiv.appendChild(link);
	

	// add the description
	let description = document.createElement('p');
	description.innerHTML = workshop[3];
	workshopDiv.appendChild(description);

	// add the tags
	let tags = workshop[6].split(',');
	let tagContainer = document.createElement('div');
	tagContainer.className = 'tag-container';
	tags.forEach(function(tag) {
		let tagDiv = document.createElement('div');
		tagDiv.className = 'tag';
		tagDiv.innerHTML = tag.trim();
		tagContainer.appendChild(tagDiv);
	});
	workshopDiv.appendChild(tagContainer);

	// add the workshop to the page
	document.getElementById('workshop-container').appendChild(workshopDiv);



	
}
</script>