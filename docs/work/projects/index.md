<h1 id="title"></h1>
<span id="secondary-title"></span>
<div id="project-container"></div>


<script>
// ---------------------------- //
//                            	//
//	  Function to get URL    	//
//                            	//
// ---------------------------- //
function init(){
	// Get URL parameters
	var params = getUrlParams();
	
	// Check if "id" parameter exists and set it as a variable
	var projectid = params["id"];
	
	// add projectid to the input
	if (projectid == undefined) {
		// go 
		projectid = 0
	}
	createProject(projectid);	
}
	
function createProject(projectid) {
	// find the project in the projects array
	let project = data.work.values[projectid];
	// add the title
	// get the h1 element title
	let title = document.getElementById('title');
	title.innerHTML = project[0];

	// get the secondary title
	let secondaryTitle = document.getElementById('secondary-title');
	secondaryTitle.innerHTML = project[1];

	// create a div for the project
	let projectDiv = document.createElement('div');
	projectDiv.className = 'project';

	// add the project image
	let image = document.createElement('img');
	image.src = '../../work/images/'+project[4]; // Assuming the first column in the sheet is the image name
	image.alt = project[1]; // Assuming the third column in the sheet is the alt text
	projectDiv.appendChild(image);

	// add project link project[5]
	let link = document.createElement('a');
	link.href = project[5];
	link.innerHTML = "Project Link";
	projectDiv.appendChild(link);

	// add the description
	// allow for html in the description	
	
	let description = document.createElement('p');
	description.innerHTML = project[3];
	projectDiv.appendChild(description);

	// add contributors project[7]
	let contributorsTitle = document.createElement('h3');
	contributorsTitle.innerHTML = "Contributors";
	projectDiv.appendChild(contributorsTitle);
	let contributors = document.createElement('p');
	contributors.innerHTML = project[7];
	projectDiv.appendChild(contributors);

	// add supported by project[8]
	let supportedByTitle = document.createElement('h3');
	supportedByTitle.innerHTML = "Supported by";
	projectDiv.appendChild(supportedByTitle);
	let supportedBy = document.createElement('p');
	supportedBy.innerHTML = project[8];
	projectDiv.appendChild(supportedBy);

	// add the tags
	let tags = project[6].split(',');
	let tagContainer = document.createElement('div');
	tagContainer.className = 'tag-container';
	tags.forEach(function(tag) {
		let tagDiv = document.createElement('div');
		tagDiv.className = 'tag';
		tagDiv.innerHTML = tag.trim();
		tagContainer.appendChild(tagDiv);
	});
	projectDiv.appendChild(tagContainer);

	// add the project to the page
	document.getElementById('project-container').appendChild(projectDiv);



	
}
</script>