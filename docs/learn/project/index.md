
<h1 id="title"></h1>
<div id="project-container"></div>


<script>
// -------------------------- //
//                            //
//	  Function to get URL    //
//                            //
// -------------------------- //
function init(){
	// Get URL parameters
	var params = getUrlParams();
	
	// Check if "val" parameter exists and set it as a variable
	var projectid = params["projectid"];
	
	// add projectid to the input
	if (projectid == undefined) {
		projectid = "No value found";
	}
	else
	{		
		createProject(projectid);	
	}
}
	
function createProject(projectid) {
	// find the project in the workshops array
	let project = workshops[projectid];
	// add the title
	// get the h1 element title
	let title = document.getElementById('title');
	title.textContent = project[0];

	// create a div for the project
	let projectDiv = document.createElement('div');
	projectDiv.className = 'project';

	// add the youtube video
	let video = document.createElement('div');
	video.innerHTML = project[6];
	projectDiv.appendChild(video);

	// add the description
	let description = document.createElement('p');
	description.textContent = project[3];
	projectDiv.appendChild(description);

	// add the tags
	let tags = project[7].split(',');
	let tagContainer = document.createElement('div');
	tagContainer.className = 'tag-container';
	tags.forEach(function(tag) {
		let tagDiv = document.createElement('div');
		tagDiv.className = 'tag';
		tagDiv.textContent = tag.trim();
		tagContainer.appendChild(tagDiv);
	});
	projectDiv.appendChild(tagContainer);

	// add the project to the page
	document.getElementById('project-container').appendChild(projectDiv);



	
}
</script>