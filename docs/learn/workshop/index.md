<h1 id="title"></h1>
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
	var workshopid = params["workshopid"];
	
	// add workshopid to the input
	if (workshopid == undefined) {
		workshopid = "No value found";
	}
	else
	{		
		createWorkshop(workshopid);	
	}
}
	
function createWorkshop(workshopid) {
	// find the workshop in the workshops array
	let workshop = sectionData[workshopid];
	// add the title
	// get the h1 element title
	let title = document.getElementById('title');
	title.textContent = workshop[0];

	// create a div for the workshop
	let workshopDiv = document.createElement('div');
	workshopDiv.className = 'workshop';

	// add the youtube video
	let video = document.createElement('div');
	video.innerHTML = workshop[6];
	workshopDiv.appendChild(video);

	// add the description
	let description = document.createElement('p');
	description.textContent = workshop[3];
	workshopDiv.appendChild(description);

	// add the tags
	let tags = workshop[7].split(',');
	let tagContainer = document.createElement('div');
	tagContainer.className = 'tag-container';
	tags.forEach(function(tag) {
		let tagDiv = document.createElement('div');
		tagDiv.className = 'tag';
		tagDiv.textContent = tag.trim();
		tagContainer.appendChild(tagDiv);
	});
	workshopDiv.appendChild(tagContainer);

	// add the workshop to the page
	document.getElementById('workshop-container').appendChild(workshopDiv);



	
}
</script>